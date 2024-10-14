'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  content: string
  author: string
  createdAt: string
  readTime: number
}

export default function BlogViewPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts')
        if (!response.ok) throw new Error('Failed to fetch posts')
        const data = await response.json()
        setPosts(data)
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }

    fetchPosts()
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50 min-h-screen dark:bg-black">
      <motion.h1
        className="text-5xl font-bold mb-16 text-center text-blue-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Explore My Blog
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {posts.map((post) => (
            <motion.article
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-shadow hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex-grow">
                  <h2 className="text-2xl font-semibold mb-3 text-gray-800 line-clamp-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
                  <span className="font-medium">{post.author}</span>
                  {/* <span>{post.readTime} min read</span> */}
                </div>
                <motion.button
                  className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedPost(post)}
                >
                  <span>Read Article</span>
                  <ArrowRight size={18} />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h3 className="text-3xl font-bold mb-4 text-gray-800">{selectedPost.title}</h3>
              <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
                <span className="font-medium">{selectedPost.author}</span>
                <span>{new Date(selectedPost.createdAt).toLocaleDateString()}</span>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">{selectedPost.content}</p>
              <motion.button
                onClick={() => setSelectedPost(null)}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}