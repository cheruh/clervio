'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface AnimatedLogoProps {
  className?: string
}

export function AnimatedLogo({ className }: AnimatedLogoProps) {
  return (
    <Link href="/" className={className}>
      <motion.div
        className="relative flex items-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Image 
          src="/logo.svg" 
          alt="Clervio Logo" 
          width={32} 
          height={32} 
          className="mr-2"
        />
        <motion.span 
          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          Clervio
        </motion.span>
      </motion.div>
    </Link>
  )
}