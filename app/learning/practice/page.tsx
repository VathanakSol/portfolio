import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import SidebarCourses from '@/components/sidebar/SidebarCourse'
import Link from 'next/link'

const practiceExercises = [
  {
    slug: "ci-cd-pipeline",
    title: "CI/CD Pipeline Setup",
    description: "Learn to set up a Continuous Integration and Continuous Deployment pipeline.",
    category: "DevOps"
  },
  {
    slug: "docker-containerization",
    title: "Docker Containerization",
    description: "Practice containerizing applications using Docker.",
    category: "DevOps"
  },
  {
    slug: "spring-boot-rest-api",
    title: "Spring Boot REST API",
    description: "Build a RESTful API using Spring Boot.",
    category: "Spring"
  },
  {
    slug: "spring-security",
    title: "Spring Security Implementation",
    description: "Implement authentication and authorization using Spring Security.",
    category: "Spring"
  }
]

export default function PracticePage() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen">
      <SidebarCourses />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Practice Exercises</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {practiceExercises.map((exercise) => (
            <Card key={exercise.slug}>
              <CardHeader>
                <CardTitle>{exercise.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">{exercise.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-muted-foreground">{exercise.category}</span>
                  <Link href={`/learning/practice/${exercise.slug}`}>
                    <Button>Start Exercise</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}