'use client';
import { ReactNode, useEffect, useState } from 'react';

import SWRegister from './SWRegister';
export default function Provider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(() => typeof window !== 'undefined' ? (localStorage.getItem('theme') || 'black-gold') : 'black-gold');
  useEffect(()=>{ document.documentElement.setAttribute('data-theme', theme); localStorage.setItem('theme', theme); }, [theme]);
  return <div><SWRegister />{children}</div>
}
