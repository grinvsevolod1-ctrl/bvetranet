import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
export default function handler(req:NextApiRequest,res:NextApiResponse){
  if(req.method!=='POST') return res.status(405).end();
  const sub = req.body;
  const file = path.join(process.cwd(),'data','push.json');
  fs.mkdirSync(path.dirname(file),{recursive:true});
  let arr = [];
  if(fs.existsSync(file)) arr = JSON.parse(fs.readFileSync(file,'utf8')||'[]');
  arr.push(sub);
  fs.writeFileSync(file, JSON.stringify(arr,null,2));
  return res.status(200).json({ ok:true });
}
