import { motion } from 'framer-motion'

interface Post {
  id: number
  title: string
  content: string
  createdAt: string
}

interface BlogPostProps {
  post: Post
  onClick: () => void
}

export default function BlogPost({ post, onClick }: BlogPostProps) {
  return (
    <motion.article
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 cursor-pointer"
      onClick={onClick}
    >
      <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{post.title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.content}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Posted on {new Date(post.createdAt).toLocaleDateString()}
      </p>
    </motion.article>
  )
}