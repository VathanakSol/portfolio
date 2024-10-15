
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SidebarCourses from '@/components/sidebar/SidebarCourse';
import Link from 'next/link';

const quizzes = [
  {
    slug: "javascript-fundamentals",
    title: "JavaScript Fundamentals",
    description: "Test your knowledge of JavaScript basics.",
  },
  {
    slug: "react-component-lifecycle",
    title: "React Component Lifecycle",
    description: "Challenge yourself on React component lifecycle methods.",
  },
  {
    slug: "css-grid-layout",
    title: "CSS Grid Layout",
    description: "Assess your understanding of CSS Grid.",
  },
];

export default function QuizzesPage() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen">
      <SidebarCourses />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Quizzes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quizzes.map((quiz) => (
            <Card key={quiz.slug}>
              <CardHeader>
                <CardTitle>{quiz.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{quiz.description}</p>
                <Link href={`/learning/quizzes/${quiz.slug}`}>
                  <Button className="mt-4">Start Quiz</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}