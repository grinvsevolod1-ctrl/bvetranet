'use client';
import { useEffect } from 'react';
export default function SWRegister(){ useEffect(()=>{ if('serviceWorker' in navigator){ navigator.serviceWorker.register('/sw.js').then(()=>console.log('SW registered')); } },[]); return null; }
