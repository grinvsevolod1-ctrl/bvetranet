'use client';
import { useState } from 'react';
export default function OrderModal(){ const [open,setOpen]=useState(false);
return (<div><button onClick={()=>setOpen(true)} className='px-3 py-2 border rounded'>Заказать трансфер</button>{open && <div className='fixed inset-0 z-50 flex items-center justify-center'><div className='bg-white text-black p-6 rounded'>Order form here<button onClick={()=>setOpen(false)}>Close</button></div></div>}</div>) }
