'use client';
import { motion } from 'framer-motion';
export default function AnimatedButton({children, onClick}:{children:any, onClick?:any}){
  return <motion.button whileHover={{ scale:1.03 }} whileTap={{ scale:0.97 }} onClick={onClick} className='px-4 py-2 rounded bg-accent text-black font-semibold'>{children}</motion.button>
}
