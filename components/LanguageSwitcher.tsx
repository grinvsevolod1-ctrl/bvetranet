'use client';
import { useState, useEffect } from 'react';
export default function LanguageSwitcher(){ const [lang,setLang]=useState('ru');
useEffect(()=>{ const l = localStorage.getItem('lang') || (navigator.language.startsWith('en')?'en':'ru'); setLang(l); },[]);
const change = (l:string)=>{ setLang(l); localStorage.setItem('lang', l); document.documentElement.lang = l; }
return (<div className='p-1'><select value={lang} onChange={e=>change(e.target.value)} className='border rounded p-1'><option value='ru'>Рус</option><option value='en'>EN</option></select></div>)
}
