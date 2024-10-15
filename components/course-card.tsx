'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

type Course = {
  id: number
  title: string
  description: string
  image: string
}

export function CourseCard({ course }: { course: Course }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    >
      <Link href={`/courses/${course.id}`}>
        <Image
          src={course.image}
          alt={course.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{course.title}</h2>
          <p className="text-gray-600 dark:text-gray-400">{course.description}</p>
        </div>
      </Link>
    </motion.div>
  )
}