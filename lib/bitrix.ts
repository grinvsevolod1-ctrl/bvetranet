import axios from 'axios';

export async function createBitrixLead(webhookUrl: string, fields: Record<string, any>) {
  // webhookUrl: https://yourdomain.bitrix24.ru/rest/1/XXXXX/crm.lead.add.json
  try {
    const payload = { fields, params: { REGISTER_SONET_EVENT: 'Y' } };
    const res = await axios.post(webhookUrl, payload, { headers: { 'Content-Type': 'application/json' } });
    return res.data;
  } catch (err: any) {
    console.error('Bitrix lead create error', err?.response?.data || err.message);
    throw err;
  }
}

export async function createBitrixDeal(webhookUrl: string, fields: Record<string, any>) {
  // webhookUrl should point to crm.deal.add endpoint
  try {
    const payload = { fields, params: { REGISTER_SONET_EVENT: 'Y' } };
    const res = await axios.post(webhookUrl, payload, { headers: { 'Content-Type': 'application/json' } });
    return res.data;
  } catch (err: any) {
    console.error('Bitrix deal create error', err?.response?.data || err.message);
    throw err;
  }
}
