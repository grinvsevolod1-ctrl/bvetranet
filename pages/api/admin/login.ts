import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
export default function handler(req:NextApiRequest,res:NextApiResponse){
  if(req.method!=='POST') return res.status(405).end();
  const { password } = req.body || {};
  const ADMIN_PASS = process.env.ADMIN_PASS || 'changeme';
  if(password===ADMIN_PASS){
    const token = jwt.sign({ role:'admin' }, process.env.ADMIN_JWT_SECRET || 'secret', { expiresIn: '8h' });
    return res.status(200).json({ token });
  }
  return res.status(401).json({ error: 'Unauthorized' });
}
