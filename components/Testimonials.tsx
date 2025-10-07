'use client';
import { useState, useEffect } from 'react';
const items = [{text:'Профессионально и быстро', author:'Алексей'}, {text:'Рекомендую', author:'Мария'}];
export default function Testimonials(){ const [i,setI]=useState(0); useEffect(()=>{ const t=setInterval(()=>setI(s=>(s+1)%items.length),5000); return ()=>clearInterval(t); },[]);
return (<div className='py-8'><div className='bg-surface p-6 rounded'>{items[i].text} — {items[i].author}</div></div>) }
