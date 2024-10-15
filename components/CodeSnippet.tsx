import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeSnippetProps {
  snippets: Array<{ language: string; code: string }>;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ snippets }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % snippets.length);
    }, 5000); // Change snippet every 5 seconds

    return () => clearInterval(interval);
  }, [snippets.length]);

  return (
    <div className="bg-gray-900 rounded-lg p-4 shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <SyntaxHighlighter
            language={snippets[currentIndex].language}
            style={vscDarkPlus}
            customStyle={{
              backgroundColor: 'transparent',
              padding: '1em',
              borderRadius: '0.5rem',
              fontSize: '0.9rem',
            }}
          >
            {snippets[currentIndex].code.trim()}
          </SyntaxHighlighter>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CodeSnippet;