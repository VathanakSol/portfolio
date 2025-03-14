"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Clock, Award, BarChart } from "lucide-react";

export default function DevOpsCourses() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const courses = [
    {
      id: 1,
      title: "CI/CD Pipeline Mastery",
      description:
        "Learn to build and optimize continuous integration and delivery pipelines",
      level: "Intermediate",
      duration: "24 hours",
      modules: 8,
      category: "pipeline",
      popular: true,
    },
    {
      id: 2,
      title: "Kubernetes for DevOps",
      description: "Master container orchestration with Kubernetes",
      level: "Advanced",
      duration: "32 hours",
      modules: 10,
      category: "container",
      popular: true,
    },
    {
      id: 3,
      title: "Infrastructure as Code with Terraform",
      description: "Automate infrastructure provisioning with Terraform",
      level: "Intermediate",
      duration: "20 hours",
      modules: 7,
      category: "infrastructure",
      popular: false,
    },
    {
      id: 4,
      title: "Docker Fundamentals",
      description: "Learn containerization basics with Docker",
      level: "Beginner",
      duration: "16 hours",
      modules: 6,
      category: "container",
      popular: true,
    },
    {
      id: 5,
      title: "Monitoring with Prometheus and Grafana",
      description:
        "Implement effective monitoring solutions for your infrastructure",
      level: "Intermediate",
      duration: "18 hours",
      modules: 6,
      category: "monitoring",
      popular: false,
    },
    {
      id: 6,
      title: "GitOps with ArgoCD",
      description: "Implement GitOps practices using ArgoCD",
      level: "Advanced",
      duration: "22 hours",
      modules: 8,
      category: "pipeline",
      popular: false,
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesFilter = filter === "all" || course.category === filter;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-blue-100">
          DevOps Courses
        </h1>

        <div className="relative w-full md:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-slate-400" />
          <Input
            placeholder="Search courses..."
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
        {filteredCourses.map((course) => (
          <Card key={course.id} className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-slate-800 dark:text-blue-100">
                  {course.title}
                </h3>
                {course.popular && (
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                  >
                    Popular
                  </Badge>
                )}
              </div>

              <p className="text-sm text-slate-500 dark:text-blue-300 mb-4">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-4 text-xs text-slate-500 dark:text-blue-300 mb-4">
                <div className="flex items-center">
                  <BarChart className="h-3.5 w-3.5 mr-1" />
                  <span>{course.level}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-3.5 w-3.5 mr-1" />
                  <span>{course.modules} modules</span>
                </div>
              </div>

              <Link href={`/learning/devops/courses/${course.id}`}>
                <Button className="w-full">Enroll Now</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-500 dark:text-blue-300">
            No courses found matching your criteria.
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
