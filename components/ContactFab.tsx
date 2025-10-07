'use client';
import { useState } from 'react';
export default function ContactFab(){
  const [open,setOpen]=useState(false);
  return (<div className='fixed right-4 bottom-6 z-50'>
    <button onClick={()=>setOpen(o=>!o)} className='w-14 h-14 rounded-full shadow-lg bg-accent text-black flex items-center justify-center'>☎</button>
    {open && <div className='mt-2 p-3 bg-white text-black rounded shadow w-64'>Тел: <a href='tel:+71234567890'>+7 (123) 456-78-90</a></div>}
  </div>)
}
