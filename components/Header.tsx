'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import TypingHeading from './TypingHeading'
import CodeSnippet from './CodeSnippet'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const codeSnippets = [
    {
      language: 'javascript',
      code: `
function greet(name) {
  return \`Hello, \${name}! Welcome to my portfolio.\`;
}

console.log(greet('Developer'));
      `
    },
    {
      language: 'python',
      code: `
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

print(list(fibonacci(10)))
      `
    },
    {
      language: 'rust',
      code: `
fn is_prime(n: u32) -> bool {
    if n <= 1 {
        return false;
    }
    for i in 2..=((n as f64).sqrt() as u32) {
        if n % i == 0 {
            return false;
        }
    }
    true
}

fn main() {
    println!("First 10 primes: {:?}", 
        (2..100).filter(|&n| is_prime(n))
        .take(10).collect::<Vec<_>>());
}
      `
    }
  ];

  return (
    <header className={`bg-gray-50 dark:bg-gray-800 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:w-1/2">
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
                className="mx-auto md:mx-0 rounded-full border-4 border-gray-100 shadow-lg flex justify-center items-center"
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
              className="mt-8 flex justify-center md:justify-start"
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
            className="mt-8 md:mt-0 md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <CodeSnippet snippets={codeSnippets} />
          </motion.div>
        </div>
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
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