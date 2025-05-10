'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BlogPost from './BlogPost'

interface Post {
  id: number
  title: string
  content: string
  createdAt: string
}

export default function BlogList() {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/posts')
        if (!response.ok) {
          throw new Error('Failed to fetch posts')
        }
        const data = await response.json()
        setPosts(data)
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div layout className="space-y-8">
        <AnimatePresence>
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <BlogPost post={post} onClick={() => setSelectedPost(post)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      <div className="hidden md:block">
        <div className="sticky top-8">
          {selectedPost ? (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{selectedPost.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedPost.content}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Posted on {new Date(selectedPost.createdAt).toLocaleDateString()}
              </p>
            </motion.div>
          ) : (
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 text-center">
              <p className="text-gray-600 dark:text-gray-300">Select a post to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}