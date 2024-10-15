'use client'

import { useState } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Clock, Users, Star, BookOpen, Award, PlayCircle, ArrowLeft } from 'lucide-react'

// Mock data for courses (in a real app, this would come from a database or API)
const coursesData = [
  { 
    id: 1, 
    title: "Introduction to React", 
    category: "Frontend", 
    duration: "4 weeks", 
    students: 1200, 
    rating: 4.8,
    description: "Learn the fundamentals of React, including components, state, props, and hooks. Build modern, interactive UIs with ease.",
    instructor: "Jane Doe",
    lessons: [
      { id: 1, title: "Getting Started with React", videoId: "w7ejDZ8SWv8", duration: "10:30" },
      { id: 2, title: "Components and Props", videoId: "Fy9SdZLBTOo", duration: "15:45" },
      { id: 3, title: "State and Lifecycle", videoId: "Ke90Tje7VS0", duration: "20:15" },
      { id: 4, title: "Handling Events", videoId: "0ZJgIjIuY7U", duration: "12:50" },
      { id: 5, title: "Conditional Rendering", videoId: "6YwbZbHRSUo", duration: "18:30" },
    ],
    topics: ["JSX", "Components", "State & Props", "Hooks", "Routing"]
  },
  // ... other courses
]

export default function LearnPage({ params }: { params: { id: string } }) {
  const course = coursesData.find(c => c.id === parseInt(params.id))
  const [currentLesson, setCurrentLesson] = useState(course?.lessons[0])

  if (!course) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="container mx-auto px-4 py-12">
        <Link href={`/courses/${course.id}`} className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Course Overview
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
            <div className="aspect-video mb-6">
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${currentLesson?.videoId}`}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>{currentLesson?.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{course.description}</p>
              </CardContent>
            </Card>
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>What You will Learn</CardTitle>
              </CardHeader>
              
              <CardContent>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {course.topics.map((topic, index) => (
                    <li key={index} className="flex items-center">
                      <BookOpen className="mr-2 h-4 w-4 text-blue-500" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Course Lessons</CardTitle>
                <CardDescription>Progress through your learning journey</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] pr-4">
                  {course.lessons.map((lesson) => (
                    <div 
                      key={lesson.id} 
                      className={`flex items-center mb-4 last:mb-0 p-2 rounded-md cursor-pointer ${currentLesson?.id === lesson.id ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
                      onClick={() => setCurrentLesson(lesson)}
                    >
                      <PlayCircle className="mr-2 h-5 w-5 text-blue-500" />
                      <div>
                        <p className="font-medium">{lesson.title}</p>
                        <p className="text-sm text-gray-500">{lesson.duration}</p>
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Course Information</CardTitle>
                <CardDescription>{course.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 opacity-70" /> 
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4 opacity-70" /> 
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="mr-2 h-4 w-4 text-yellow-400" /> 
                    <span>{course.rating} rating</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="mr-2 h-4 w-4 text-green-500" /> 
                    <span>Certificate of completion</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Instructor</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center">
                <Image
                  src="/placeholder.svg"
                  alt={course.instructor}
                  width={64}
                  height={64}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{course.instructor}</h3>
                  <p className="text-sm text-gray-500">Expert {course.category} Developer</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}