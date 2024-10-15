import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, Star, BookOpen, Award } from 'lucide-react'

// Mock data for courses
const coursesData = [
  { 
    id: 1, 
    title: "Introduction to React", 
    category: "Frontend", 
    duration: "4 weeks", 
    students: 1200, 
    rating: 4.8,
    description: "Learn the fundamentals of React, including components, state, props, and hooks.",
    instructor: "Jane Doe",
    videoId: "w7ejDZ8SWv8", 
    topics: ["JSX", "Components", "State & Props", "Hooks", "Routing"]
  },
  // ... other courses
]

export default function CoursePage({ params }: { params: { id: string } }) {
  const course = coursesData.find(c => c.id === parseInt(params.id))

  if (!course) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black">
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{course.title}</h1>
            <div className="aspect-video mb-6">
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${course.videoId}`}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <Card className="bg-gray-100 dark:bg-gray-700">
              <CardHeader>
                <CardTitle>Course Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">{course.description}</p>
              </CardContent>
            </Card>
            <Card className="mt-6 bg-gray-100 dark:bg-gray-700">
              <CardHeader>
                <CardTitle>What You will Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {course.topics.map((topic, index) => (
                    <li key={index} className="flex items-center text-gray-800 dark:text-gray-200">
                      <BookOpen className="mr-2 h-4 w-4 text-blue-500" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Section */}
          <div className="sticky top-4 h-fit"> {/* Sidebar */}
            <Card className="bg-white dark:bg-gray-800">
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
              <CardFooter>
                {/* Link to start learning */}
                <Link href={`/courses/${course.id}/learn`} className="w-full">
                  <Button className="w-full bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:text-gray-200 dark:hover:bg-blue-800">Start Learning</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Instructor Information */}
            <Card className="mt-6 bg-white dark:bg-gray-800">
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
                  <h3 className="font-semibold text-gray-900 dark:text-white">{course.instructor}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">Expert {course.category} Developer</p>
                </div>
              </CardContent>
            </Card>

          </div> 
        </div> 
      </main> 
    </div>
  );
}