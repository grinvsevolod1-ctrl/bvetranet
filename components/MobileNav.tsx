'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-50">
      <button
        onClick={() => setOpen((o) => !o)}
        className="p-2 border rounded bg-white shadow"
      >
        Menu
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/40 z-40 flex items-end"
        >
          <div className="bg-white w-full rounded-t-2xl p-6">
            <nav className="flex flex-col gap-3 text-lg font-medium">
              <Link href="/">Главная</Link>
              <Link href="/services">Услуги</Link>
              <Link href="/chat">Чат</Link>
            </nav>
          </div>
        </motion.div>
      )}
    </div>
  );
}
