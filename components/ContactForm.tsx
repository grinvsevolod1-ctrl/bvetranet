'use client';
import { useState } from 'react';
export default function ContactForm(){ 
  const [name,setName]=useState(''); const [phone,setPhone]=useState(''); const [vehicle,setVehicle]=useState(''); const [date,setDate]=useState(''); const [ok,setOk]=useState(false);
  const submit = async(e:any)=>{ e.preventDefault();
    const res = await fetch('/api/order', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ name, phone, vehicle, date }) });
    if(res.ok) setOk(true);
  };
  return (
    <form onSubmit={submit} className='grid gap-3 max-w-md'>
      <input value={name} onChange={e=>setName(e.target.value)} placeholder='Имя' className='border p-2 rounded' required />
      <input value={phone} onChange={e=>setPhone(e.target.value)} placeholder='Телефон' className='border p-2 rounded' required />
      <input value={vehicle} onChange={e=>setVehicle(e.target.value)} placeholder='Тип авто (например, Mercedes S)' className='border p-2 rounded' />
      <input type='datetime-local' value={date} onChange={e=>setDate(e.target.value)} className='border p-2 rounded' />
      <button className='bg-accent text-black rounded px-4 py-2'>Отправить</button>
      {ok && <div className='text-green-600'>Заявка отправлена</div>}
    </form>
  )
}
