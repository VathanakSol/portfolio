import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TextItem {
  text: string
  style?: React.CSSProperties
}

interface TypingHeadingProps {
  texts: TextItem[]
}

const TypingHeading: React.FC<TypingHeadingProps> = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting && currentText === texts[currentIndex].text) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
      } else {
        setCurrentText(texts[currentIndex].text.slice(0, isDeleting ? currentText.length - 1 : currentText.length + 1))
      }
    }, isDeleting ? 50 : 150)

    return () => clearTimeout(timer)
  }, [currentIndex, currentText, isDeleting, texts])

  return (
    <AnimatePresence mode="wait">
      <motion.p
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="mt-3 max-w-md mx-auto text-xl text-gray-500 dark:text-gray-300 sm:text-2xl md:mt-5 md:text-3xl md:max-w-3xl"
        style={texts[currentIndex].style}
      >
        {currentText}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
        >
          |
        </motion.span>
      </motion.p>
    </AnimatePresence>
  )
}

export default TypingHeading