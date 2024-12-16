'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {ChevronDown, Github, Globe} from 'lucide-react'
import TypingHeading from './TypingHeading'
import DevOpsPipeline from './DevOpsPipeline'
import {FaGoogle } from 'react-icons/fa';

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/VathanakSol' },
  { name: 'Website', icon: Globe, url: 'https://naktech.pro' },
  { name: 'Google', icon: FaGoogle, url: 'https://g.dev/naktech' }
]

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [easterEggTriggered, setEasterEggTriggered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleEasterEggClick = () => {
    if (!easterEggTriggered) {
      setEasterEggTriggered(true)
      setTimeout(() => setEasterEggTriggered(false), 5000)
    }
  }

  return (
      <header className={`bg-gray-50 dark:bg-gray-800 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col items-center justify-center md:w-1/2 relative text-center py-4">
              <motion.div
                  initial={{opacity: 0, scale: 0.5}}
                  animate={{opacity: 1, scale: 1}}
                  transition={{duration: 0.5}}
                  onClick={handleEasterEggClick}
                  className="relative"
              >
                <Image
                    src="/assets/profile.jpg"
                    alt="Vathanak Sol"
                    width={200}
                    height={200}
                    className="mx-auto md:mx-0 rounded-full border-4 border-gray-100 shadow-lg"
                />

                {easterEggTriggered && (
                    <span
                        className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                🎉 Easter Egg Found!
            </span>
                )}
              </motion.div>

              <motion.h1
                  className="mt-6 text-4xl font-extrabold text-blue-700 dark:text-blue-300 sm:text-5xl sm:tracking-tight lg:text-6xl w-full"
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.5, delay: 0.2}}
              >
                Vathanak Sol
              </motion.h1>

              <TypingHeading
                  texts={[
                    {text: 'DevSecOps Engineer'},
                    {text: 'Cloud Architect'},
                    {text: 'Full Stack Developer', style: {color: 'rgb(59,130,246)'}}
                  ]}
              />

              <motion.div
                  className="mt-8 flex justify-center w-full"
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.5, delay: 0.4}}
              >
                <Link href="/contact" passHref>
                  <motion.div
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 transition-all ease-in-out"
                      whileHover={{scale: 1.05}}
                      whileTap={{scale: 0.95}}
                  >
                    Get in touch
                  </motion.div>
                </Link>
              </motion.div>

              <div className="mt-8 flex justify-center space-x-4">
                {socialLinks.map(({name, icon: Icon, url}) => (
                    <Link
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-500"
                        aria-label={name}
                    >
                      <Icon className="w-6 h-6"/>
                    </Link>
                ))}
              </div>
            </div>


            <motion.div
                className="mt-8 md:mt-0 md:w-1/2"
                initial={{opacity: 0, x: 50}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.5, delay: 0.6}}
            >
              <DevOpsPipeline/>
            </motion.div>
          </div>
          <motion.div
              className="mt-12 flex justify-center"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: 0.8}}
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

