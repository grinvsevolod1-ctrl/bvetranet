'use client';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxHero(){ 
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -80]);
  return (
    <section className="relative overflow-hidden py-20">
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-r from-black via-transparent to-transparent opacity-20"></div>
      </motion.div>
      <div className="container relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-5xl font-extrabold leading-tight">Bvetra — премиум трансферы и аренда</h1>
          <p className="mt-4 text-lg opacity-80">Комфорт, безопасность и стиль. Трансферы для бизнеса и VIP клиентов.</p>
          <div className="mt-6 flex gap-3">
            <a href="/contact" className="px-5 py-3 rounded bg-accent text-black font-semibold">Забронировать</a>
            <a href="/chat" className="px-5 py-3 rounded border">Супер-чат</a>
          </div>
        </div>
        <div className="rounded overflow-hidden p-4 bg-surface">
          <img src="/images/01_logo.png" alt="logo" className="w-full h-80 object-contain" />
        </div>
      </div>
    </section>
  )
}
