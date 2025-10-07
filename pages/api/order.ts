import type { NextApiRequest, NextApiResponse } from 'next';
import { enqueue } from '../../lib/queue';
import { createBitrixLead, createBitrixDeal } from '../../lib/bitrix';
import axios from 'axios';

type ReqBody = { message?: string; name?:string; phone?:string; email?:string; pickup?:string; dropoff?:string; date?:string; passengers?:number };

const SYSTEM_PROMPT = `You are an assistant that extracts structured booking information from user's free-form text for a car transfer/rental company.
Respond with JSON only. Fields: name, phone, email, pickup_address, dropoff_address, date_time, vehicle_type, passengers, notes.
If a field is missing, set it to null.`;

async function parseWithOpenAI(text: string) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) return null;
  try {
    const client = new (await import('openai')).OpenAI({ apiKey: key });
    const resp = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-3.5-turbo',
      messages: [{ role:'system', content: SYSTEM_PROMPT }, { role:'user', content: text }],
      max_tokens: 400
    } as any);
    const content = resp.choices?.[0]?.message?.content;
    try { return JSON.parse(content); } catch(e){ return null; }
  } catch (e) {
    console.error('OpenAI error', e);
    return null;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const body: ReqBody = req.body || {};
  let parsed = null;
  if (body.message) parsed = await parseWithOpenAI(body.message);
  // fallback try to map fields directly
  if (!parsed) {
    parsed = {
      name: body.name || null,
      phone: body.phone || null,
      email: body.email || null,
      pickup_address: body.pickup || null,
      dropoff_address: body.dropoff || null,
      date_time: body.date || null,
      vehicle_type: null,
      passengers: body.passengers || null,
      notes: body.message || null
    };
  }
  // enqueue the order for processing (local queue)
  enqueue({ type: 'order', payload: parsed, createdAt: Date.now() });
  // Try immediate push to Bitrix if webhook provided
  const bitrixWebhook = process.env.BITRIX_WEBHOOK_URL;
  try {
    if (bitrixWebhook) {
      // create lead
      const leadFields: any = {
        TITLE: parsed.name ? `Заявка: ${parsed.name}` : 'Заявка с сайта',
        NAME: parsed.name || '',
        COMMENTS: parsed.notes || ''
      };
      if (parsed.phone) leadFields.PHONE = [{ VALUE: parsed.phone, VALUE_TYPE: 'WORK' }];
      if (parsed.email) leadFields.EMAIL = [{ VALUE: parsed.email, VALUE_TYPE: 'WORK' }];
      await createBitrixLead(bitrixWebhook, leadFields);
      // optionally create deal - user can configure a separate webhook for deals
      if (process.env.BITRIX_DEAL_WEBHOOK) {
        const dealFields: any = { TITLE: 'Новый трансфер/аренда', CONTACT_ID: null, OPPORTUNITY: 0 };
        if (parsed.notes) dealFields.COMMENTS = parsed.notes;
        await createBitrixDeal(process.env.BITRIX_DEAL_WEBHOOK, dealFields);
      }
    }
  } catch (e) {
    console.error('bitrix push error', e);
  }
  return res.status(200).json({ ok: true, parsed });
}
