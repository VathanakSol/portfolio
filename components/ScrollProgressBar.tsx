'use client'
import React, { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const ScrollProgressBar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()

  // Smooth spring animation for the progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsVisible(scrollPosition > 100) // Show after 100px of scrolling
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-50"
      style={{
        background: isVisible
          ? 'linear-gradient(90deg, #7e22ce, #22d3ee)'
          : 'transparent',
        transformOrigin: '0%',
        scaleX,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out, background 0.3s ease-in-out',
        boxShadow: isVisible ? '0 0 10px 2px rgba(147, 51, 234, 0.7)' : 'none'
      }}
    />
  )
}

export default ScrollProgressBar