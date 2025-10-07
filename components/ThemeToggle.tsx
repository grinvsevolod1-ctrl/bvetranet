'use client';
import { useState, useEffect } from 'react';
export default function ThemeToggle(){ const [theme,setTheme]=useState('black-gold');
useEffect(()=>{ const t = localStorage.getItem('theme'); if(t) setTheme(t); },[]);
const toggle = ()=>{ const next = theme==='black-gold'?'gray-gold':'black-gold'; setTheme(next); localStorage.setItem('theme', next); document.documentElement.setAttribute('data-theme', next); }
return <button onClick={toggle} className='p-2 border rounded'>{theme==='black-gold'?'Black':'Gray'}</button> }
