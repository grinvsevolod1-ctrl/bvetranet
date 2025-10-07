'use client';

import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';
import ContactIcon from './ContactIcon';
import MobileNav from './MobileNav';
import { useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 30);
  });

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled
          ? 'backdrop-blur-md bg-white/70 dark:bg-black/50 shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Логотип */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Image
              src="/images/01_logo.png"
              alt="logo"
              width={48}
              height={48}
              className="drop-shadow-lg group-hover:drop-shadow-xl transition-all"
            />
          </motion.div>
          <motion.div
            whileHover={{ color: '#22d3ee' }}
            className="text-xl font-bold tracking-wide"
          >
            Bvetra
          </motion.div>
        </Link>

        {/* Навигация */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="hidden md:flex gap-6 items-center text-[16px]"
        >
          <Link
            href="/services"
            className="hover:text-cyan-400 transition-colors"
          >
            Услуги
          </Link>
          <Link href="/cars" className="hover:text-cyan-400 transition-colors">
            Автопарк
          </Link>
          <Link href="/chat" className="hover:text-cyan-400 transition-colors">
            Чат ИИ
          </Link>
          <ContactIcon />
          <LanguageSwitcher />
          <ThemeToggle />
        </motion.nav>

        {/* Мобильное меню */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
}
