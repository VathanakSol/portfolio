'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import TypingHeading from './TypingHeading'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`bg-gray-50 dark:bg-gray-800 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">       
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/assets/profile.jpg"
              alt="Vathanak Sol"
              width={200}
              height={200}
              className="mx-auto rounded-full border-4 border-gray-100 shadow-lg"
            />
          </motion.div>
          <motion.h1
            className="mt-6 text-4xl font-extrabold text-blue-700 dark:text-blue-300 sm:text-5xl sm:tracking-tight lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Vathanak Sol
          </motion.h1>
          <TypingHeading
            texts={[
              { text: 'Frontend Developer' },
              { text: 'Backend Developer' },
              { text: 'Full Stack Developer', style: { color: 'rgb(59,130,246)' } }
            ]}
          />
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/contact" passHref>
              <motion.div
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 transition-all ease-in-out"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in touch
              </motion.div>
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <ChevronDown
            className="text-blue-500 animate-bounce"
            size={32}
          />
        </motion.div>
      </div>
    </header>
  )
}

export default Header