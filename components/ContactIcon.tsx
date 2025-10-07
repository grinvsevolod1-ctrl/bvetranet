'use client';
import { useState } from 'react';
export default function ContactIcon(){ const [open,setOpen]=useState(false);
  return (<div className='relative'>
    <button onClick={()=>setOpen(o=>!o)} className='p-2'>Контакты</button>
    {open && <div className='absolute right-0 mt-2 w-64 bg-white text-black p-3 rounded shadow'>Тел: <a href='tel:+71234567890'>+7 (123) 456-78-90</a></div>}
  </div>)
}
