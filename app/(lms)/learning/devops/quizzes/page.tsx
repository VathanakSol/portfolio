"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Clock, FileQuestion, Trophy } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function DevOpsQuizzes() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const quizzes = [
    {
      id: 1,
      title: "CI/CD Fundamentals",
      description: "Test your knowledge of CI/CD principles and practices",
      questions: 15,
      timeLimit: "20 min",
      difficulty: "Beginner",
      category: "pipeline",
      completed: true,
      score: 85,
    },
    {
      id: 2,
      title: "Kubernetes Architecture",
      description: "Verify your understanding of Kubernetes components",
      questions: 20,
      timeLimit: "25 min",
      difficulty: "Intermediate",
      category: "container",
      completed: true,
      score: 92,
    },
    {
      id: 3,
      title: "Terraform Advanced Concepts",
      description: "Challenge yourself with advanced Terraform scenarios",
      questions: 18,
      timeLimit: "30 min",
      difficulty: "Advanced",
      category: "infrastructure",
      completed: false,
    },
    {
      id: 4,
      title: "Docker Networking",
      description: "Test your knowledge of Docker networking concepts",
      questions: 12,
      timeLimit: "15 min",
      difficulty: "Intermediate",
      category: "container",
      completed: false,
    },
    {
      id: 5,
      title: "Monitoring Best Practices",
      description: "Evaluate your understanding of monitoring principles",
      questions: 15,
      timeLimit: "20 min",
      difficulty: "Intermediate",
      category: "monitoring",
      completed: false,
    },
    {
      id: 6,
      title: "GitOps Principles",
      description: "Test your knowledge of GitOps workflows and tools",
      questions: 16,
      timeLimit: "25 min",
      difficulty: "Advanced",
      category: "pipeline",
      completed: false,
    },
  ];

  const filteredQuizzes = quizzes.filter((quiz) => {
    const matchesFilter = filter === "all" || quiz.category === filter;
    const matchesSearch =
      quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quiz.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-blue-100">
          DevOps Quizzes
        </h1>

        <div className="relative w-full md:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-slate-400" />
          <Input
            placeholder="Search quizzes..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs value={filter} onValueChange={setFilter} className="mb-6">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="pipeline">CI/CD</TabsTrigger>
          <TabsTrigger value="container">Containers</TabsTrigger>
          <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
          <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredQuizzes.map((quiz) => (
          <Card key={quiz.id} className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-slate-800 dark:text-blue-100">
                  {quiz.title}
                </h3>
                <Badge
                  variant="outline"
                  className={
                    quiz.difficulty === "Beginner"
                      ? "border-green-500 text-green-600 dark:text-green-400"
                      : quiz.difficulty === "Intermediate"
                        ? "border-yellow-500 text-yellow-600 dark:text-yellow-400"
                        : "border-red-500 text-red-600 dark:text-red-400"
                  }
                >
                  {quiz.difficulty}
                </Badge>
              </div>

              <p className="text-sm text-slate-500 dark:text-blue-300 mb-4">
                {quiz.description}
              </p>

              <div className="flex flex-wrap gap-4 text-xs text-slate-500 dark:text-blue-300 mb-4">
                <div className="flex items-center">
                  <FileQuestion className="h-3.5 w-3.5 mr-1" />
                  <span>{quiz.questions} questions</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  <span>{quiz.timeLimit}</span>
                </div>
              </div>

              {quiz.completed ? (
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-600 dark:text-blue-200">
                      Score: {quiz.score}%
                    </span>
                    <div className="flex items-center text-yellow-500">
                      <Trophy className="h-4 w-4 mr-1" />
                      <span className="text-xs">Completed</span>
                    </div>
                  </div>
                  <Progress value={quiz.score} className="h-2 mb-4" />
                  <Button variant="outline" className="w-full">
                    Retake Quiz
                  </Button>
                </div>
              ) : (
                <Button className="w-full">Start Quiz</Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredQuizzes.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-500 dark:text-blue-300">
            No quizzes found matching your criteria.
          </p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => {
              setFilter("all");
              setSearchQuery("");
            }}
          >
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
}
