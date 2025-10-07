import fs from 'fs';
import path from 'path';
const FILE = path.join(process.cwd(),'data','queue.json');
export function enqueue(item:any){ const d = JSON.stringify(item); try{ fs.mkdirSync(path.dirname(FILE),{recursive:true}); let q=[]; if(fs.existsSync(FILE)) q=JSON.parse(fs.readFileSync(FILE,'utf8')||'[]'); q.push(item); fs.writeFileSync(FILE,JSON.stringify(q,null,2)); return true; }catch(e){return false;} }
