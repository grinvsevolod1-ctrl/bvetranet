import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import jwt from 'jsonwebtoken';
export default function handler(req:NextApiRequest,res:NextApiResponse){
  const auth = req.headers.authorization || '';
  const token = auth.replace('Bearer ','') || '';
  try{
    const secret = process.env.ADMIN_JWT_SECRET || 'secret';
    jwt.verify(token, secret);
  }catch(e){
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try{
    const f = path.join(process.cwd(),'data','queue.json');
    const orders = fs.existsSync(f) ? JSON.parse(fs.readFileSync(f,'utf8')||'[]') : [];
    return res.status(200).json({ orders });
  }catch(e){
    return res.status(500).json({ error: 'read error' });
  }
}
