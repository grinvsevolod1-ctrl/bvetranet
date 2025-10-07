'use client';
import { useEffect, useState } from 'react';

export default function AdminPage(){
  const [orders, setOrders] = useState<any[]>([]);
  const [token, setToken] = useState('');
  const [ok, setOk] = useState(false);
  useEffect(()=>{ const t = localStorage.getItem('admin_token'); if(t) setToken(t); },[]);
  async function load(){
    if(!token){ alert('Please login as admin'); return; }
    const res = await fetch('/api/admin/orders', { headers: { Authorization: 'Bearer '+token } });
    if(res.ok){ const j = await res.json(); setOrders(j.orders || []); setOk(true); } else { alert('Unauthorized'); }
  }
  return (
    <div className='py-8'>
      <h1 className='text-2xl font-bold'>Admin</h1>
      {!ok && <div className='mt-4'><input value={token} onChange={e=>setToken(e.target.value)} placeholder='admin token' className='border p-2'/><button onClick={()=>{ localStorage.setItem('admin_token', token); load(); }} className='ml-2 p-2 bg-accent rounded'>Load</button></div>}
      {ok && <pre className='mt-4 bg-surface p-4 rounded'>{JSON.stringify(orders,null,2)}</pre>}
    </div>
  );
}
