'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Book, Video, FileQuestion, Code } from "lucide-react"

export default function DocumentPage() {
  const router = useRouter()

  const handleOptionClick = (option: string) => {
    router.push(`/learning/${option}`)
  }

  return (
    <>
      <main className="flex flex-col md:flex-row min-h-screen px-16">
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-8 text-center text-green-500">NakTech Interactive Learning</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <Button 
                  className="w-full h-32 text-lg"
                  variant="outline"
                  onClick={() => handleOptionClick('courses')}
                >
                  <Book className="mr-2 h-6 w-6" /> Courses
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Button 
                  className="w-full h-32 text-lg"
                  variant="outline"
                  onClick={() => handleOptionClick('videos')}
                >
                  <Video className="mr-2 h-6 w-6" /> Videos
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Button 
                  className="w-full h-32 text-lg"
                  variant="outline"
                  onClick={() => handleOptionClick('quizzes')}
                >
                  <FileQuestion className="mr-2 h-6 w-6" /> Quizzes
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Button 
                  className="w-full h-32 text-lg"
                  variant="outline"
                  onClick={() => handleOptionClick('practice')}
                >
                  <Code className="mr-2 h-6 w-6" /> Practice
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
    
  )
}