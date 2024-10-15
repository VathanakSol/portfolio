'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, Star } from 'lucide-react'

// Mock data for courses
const coursesData = [
  { id: 1, title: "Introduction to React", category: "Frontend", duration: "4 weeks", students: 1200, rating: 4.8 },
  { id: 2, title: "Advanced Node.js", category: "Backend", duration: "6 weeks", students: 800, rating: 4.7 },
  { id: 3, title: "UI/UX Design Principles", category: "Design", duration: "3 weeks", students: 1500, rating: 4.9 },
  { id: 4, title: "Data Structures and Algorithms", category: "Computer Science", duration: "8 weeks", students: 1000, rating: 4.6 },
  { id: 5, title: "Machine Learning Basics", category: "AI", duration: "5 weeks", students: 950, rating: 4.5 },
]

export default function CoursesPage() {
  const [courses, setCourses] = useState(coursesData)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const filtered = coursesData.filter(course => 
      course.title.toLowerCase().includes(filter.toLowerCase()) ||
      course.category.toLowerCase().includes(filter.toLowerCase())
    )
    setCourses(filtered)
  }, [filter])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="w-full h-full bg-blue-500 opacity-20 blur-3xl"></div>
        </motion.div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Explore Our Courses</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Enhance your skills with our cutting-edge courses designed for modern developers and designers.</p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Input
            type="text"
            placeholder="Search courses..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="max-w-md mx-auto"
          />
        </div>

        <AnimatePresence>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {courses.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.category}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex items-center mb-2">
                      <Clock className="mr-2 h-4 w-4 opacity-70" /> 
                      <span className="text-sm text-gray-600">{course.duration}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <Users className="mr-2 h-4 w-4 opacity-70" /> 
                      <span className="text-sm text-gray-600">{course.students} students</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="mr-2 h-4 w-4 text-yellow-400" /> 
                      <span className="text-sm text-gray-600">{course.rating} rating</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/courses/${course.id}`} className="w-full">
                      <Button className="w-full">View Course</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {courses.length === 0 && (
          <motion.p
            className="text-center text-gray-500 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No courses found. Try a different search term.
          </motion.p>
        )}
      </main>
    </div>
  )
}