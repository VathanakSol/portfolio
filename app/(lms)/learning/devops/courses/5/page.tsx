"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Award,
  BarChart,
  Users,
  Calendar,
  CheckCircle2,
  Star,
  BookOpen,
  Download,
  MessageSquare,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Image from "next/image";

export default function PrometheusCoursePage() {
  const [enrollmentStatus, setEnrollmentStatus] = useState<
    "not-enrolled" | "enrolling" | "enrolled"
  >("not-enrolled");

  const handleEnroll = () => {
    setEnrollmentStatus("enrolling");
    // Simulate API call
    setTimeout(() => {
      setEnrollmentStatus("enrolled");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex items-center mb-6">
          <Link href="/learning/devops/courses">
            <Button variant="ghost" size="icon" className="mr-4">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600">
                Monitoring with Prometheus and Grafana
              </h1>
              <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                Popular
              </Badge>
            </div>
            <p className="text-slate-600 dark:text-blue-200 mt-1">
              Implement effective monitoring solutions for your infrastructure
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content - 2/3 width on desktop */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 dark:bg-slate-800/60 border border-slate-200 dark:border-blue-500/30 backdrop-blur-sm rounded-lg p-6 shadow-lg mb-8">
              <div className="aspect-video relative rounded-md overflow-hidden mb-6 bg-slate-200 dark:bg-slate-700">
                <Image
                  src="/placeholder.svg?height=400&width=800&text=Prometheus%20and%20Grafana%20Course"
                  alt="Course Preview"
                  width={320}
                  height={180}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="rounded-full bg-blue-500/90 text-white hover:bg-blue-600"
                  >
                    Watch Preview
                  </Button>
                </div>
              </div>

              <Tabs defaultValue="overview">
                <TabsList className="mb-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="instructor">Instructor</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4">
                  <div>
                    <h2 className="text-xl font-semibold mb-3 text-slate-800 dark:text-blue-100">
                      About This Course
                    </h2>
                    <p className="text-slate-600 dark:text-blue-200 mb-4">
                      Learn how to implement effective monitoring solutions for
                      your infrastructure using Prometheus and Grafana. This
                      comprehensive course covers everything from basic
                      installation to advanced alerting configurations and
                      dashboard creation.
                    </p>
                    <p className="text-slate-600 dark:text-blue-200">
                      By the end of this course, you will be able to set up a
                      complete monitoring stack, create custom dashboards,
                      configure alerts, and troubleshoot common monitoring
                      issues in production environments.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-3 text-slate-800 dark:text-blue-100">
                      What You will Learn
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        "Prometheus architecture and components",
                        "Setting up Prometheus in production",
                        "PromQL query language fundamentals",
                        "Creating effective Grafana dashboards",
                        "Alert configuration and management",
                        "Monitoring Kubernetes clusters",
                        "Exporters for various services",
                        "High availability setup",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600 dark:text-blue-200">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-3 text-slate-800 dark:text-blue-100">
                      Prerequisites
                    </h2>
                    <ul className="space-y-2">
                      {[
                        "Basic understanding of Linux systems",
                        "Familiarity with containerization concepts",
                        "Basic knowledge of metrics and monitoring principles",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600 dark:text-blue-200">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="curriculum">
                  <h2 className="text-xl font-semibold mb-4 text-slate-800 dark:text-blue-100">
                    Course Curriculum
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    {[
                      {
                        title: "Module 1: Introduction to Monitoring",
                        lessons: [
                          {
                            title: "Why Monitoring Matters",
                            duration: "15 min",
                          },
                          {
                            title: "Monitoring vs Observability",
                            duration: "12 min",
                          },
                          {
                            title: "Key Metrics to Monitor",
                            duration: "18 min",
                          },
                          {
                            title: "Introduction to Prometheus",
                            duration: "20 min",
                          },
                        ],
                      },
                      {
                        title: "Module 2: Setting Up Prometheus",
                        lessons: [
                          {
                            title: "Installation and Configuration",
                            duration: "25 min",
                          },
                          { title: "Service Discovery", duration: "18 min" },
                          {
                            title: "Storage and Retention",
                            duration: "15 min",
                          },
                          {
                            title: "Hands-on: Basic Prometheus Setup",
                            duration: "30 min",
                          },
                        ],
                      },
                      {
                        title: "Module 3: PromQL Fundamentals",
                        lessons: [
                          { title: "Basic Query Syntax", duration: "22 min" },
                          {
                            title: "Aggregation Operators",
                            duration: "18 min",
                          },
                          {
                            title: "Rate and Increase Functions",
                            duration: "20 min",
                          },
                          {
                            title: "Hands-on: Writing Effective Queries",
                            duration: "35 min",
                          },
                        ],
                      },
                      {
                        title: "Module 4: Grafana Dashboards",
                        lessons: [
                          {
                            title: "Grafana Installation and Setup",
                            duration: "15 min",
                          },
                          {
                            title: "Creating Your First Dashboard",
                            duration: "25 min",
                          },
                          {
                            title: "Advanced Visualization Techniques",
                            duration: "28 min",
                          },
                          {
                            title: "Hands-on: Building a Complete Dashboard",
                            duration: "40 min",
                          },
                        ],
                      },
                      {
                        title: "Module 5: Alerting and Notification",
                        lessons: [
                          {
                            title: "Alert Manager Configuration",
                            duration: "20 min",
                          },
                          { title: "Creating Alert Rules", duration: "22 min" },
                          {
                            title: "Notification Channels",
                            duration: "15 min",
                          },
                          {
                            title:
                              "Hands-on: Setting Up a Complete Alert Pipeline",
                            duration: "35 min",
                          },
                        ],
                      },
                      {
                        title: "Module 6: Advanced Topics",
                        lessons: [
                          {
                            title: "High Availability Setup",
                            duration: "25 min",
                          },
                          {
                            title: "Federation and Remote Storage",
                            duration: "22 min",
                          },
                          { title: "Custom Exporters", duration: "28 min" },
                          {
                            title:
                              "Final Project: Complete Monitoring Solution",
                            duration: "60 min",
                          },
                        ],
                      },
                    ].map((module, index) => (
                      <AccordionItem key={index} value={`module-${index + 1}`}>
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex items-center text-left">
                            <BookOpen className="h-5 w-5 text-blue-500 mr-3" />
                            <div>
                              <div className="font-medium text-slate-800 dark:text-blue-100">
                                {module.title}
                              </div>
                              <div className="text-xs text-slate-500 dark:text-blue-300 mt-1">
                                {module.lessons.length} lessons •{" "}
                                {module.lessons.reduce(
                                  (acc, lesson) =>
                                    acc + Number.parseInt(lesson.duration),
                                  0,
                                )}{" "}
                                min
                              </div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-3 pl-9 pt-2">
                            {module.lessons.map((lesson, lessonIndex) => (
                              <li
                                key={lessonIndex}
                                className="flex justify-between items-center"
                              >
                                <div className="flex items-center">
                                  <span className="text-slate-600 dark:text-blue-200">
                                    {lesson.title}
                                  </span>
                                </div>
                                <span className="text-xs text-slate-500 dark:text-blue-300">
                                  {lesson.duration}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>

                <TabsContent value="instructor">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <Avatar className="h-32 w-32 mx-auto">
                        <AvatarImage src="/placeholder.svg?height=128&width=128&text=JS" />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="md:w-2/3">
                      <h2 className="text-xl font-semibold mb-2 text-slate-800 dark:text-blue-100">
                        Jane Smith
                      </h2>
                      <p className="text-blue-500 dark:text-blue-400 mb-3">
                        Senior DevOps Engineer & Cloud Architect
                      </p>
                      <p className="text-slate-600 dark:text-blue-200 mb-4">
                        Jane has over 10 years of experience in infrastructure
                        management and cloud architecture. She has helped dozens
                        of companies implement effective monitoring solutions
                        and is a certified Prometheus expert.
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="text-slate-600 dark:text-blue-200">
                            4.9 Instructor Rating
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-blue-500 mr-1" />
                          <span className="text-slate-600 dark:text-blue-200">
                            12,500+ Students
                          </span>
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="h-4 w-4 text-blue-500 mr-1" />
                          <span className="text-slate-600 dark:text-blue-200">
                            8 Courses
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="reviews">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-semibold text-slate-800 dark:text-blue-100">
                        Student Reviews
                      </h2>
                      <div className="flex items-center">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className="h-5 w-5 text-yellow-500"
                              fill="currentColor"
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-slate-600 dark:text-blue-200">
                          4.8 (256 reviews)
                        </span>
                      </div>
                    </div>

                    {[
                      {
                        name: "Alex Johnson",
                        date: "2 months ago",
                        rating: 5,
                        comment:
                          "Excellent course! The hands-on labs were particularly helpful in understanding how to set up Prometheus in a production environment. The instructor explains complex concepts in a very approachable way.",
                      },
                      {
                        name: "Maria Garcia",
                        date: "3 months ago",
                        rating: 4,
                        comment:
                          "Very comprehensive coverage of Prometheus and Grafana. I especially liked the section on PromQL which can be quite challenging to learn. The only improvement I'd suggest is more content on high availability setups.",
                      },
                      {
                        name: "David Kim",
                        date: "1 month ago",
                        rating: 5,
                        comment:
                          "This course helped me implement a complete monitoring solution for our Kubernetes cluster. The alerting section was particularly valuable as it helped us catch several production issues before they became critical.",
                      },
                    ].map((review, index) => (
                      <Card
                        key={index}
                        className="border border-slate-200 dark:border-blue-500/30"
                      >
                        <CardContent className="pt-6">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center">
                              <Avatar className="h-10 w-10 mr-3">
                                <AvatarFallback>
                                  {review.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium text-slate-800 dark:text-blue-100">
                                  {review.name}
                                </div>
                                <div className="text-xs text-slate-500 dark:text-blue-300">
                                  {review.date}
                                </div>
                              </div>
                            </div>
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`h-4 w-4 ${star <= review.rating ? "text-yellow-500" : "text-slate-300 dark:text-slate-600"}`}
                                  fill={
                                    star <= review.rating
                                      ? "currentColor"
                                      : "none"
                                  }
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-slate-600 dark:text-blue-200 mt-2">
                            {review.comment}
                          </p>
                        </CardContent>
                      </Card>
                    ))}

                    <Button variant="outline" className="w-full">
                      Load More Reviews
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Sidebar - 1/3 width on desktop */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <Card className="border border-slate-200 dark:border-blue-500/30 shadow-lg mb-6">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    $89.99
                  </div>

                  {enrollmentStatus === "not-enrolled" && (
                    <Button
                      className="w-full mb-4"
                      size="lg"
                      onClick={handleEnroll}
                    >
                      Enroll Now
                    </Button>
                  )}

                  {enrollmentStatus === "enrolling" && (
                    <Button className="w-full mb-4" size="lg" disabled>
                      <span className="animate-pulse">Processing...</span>
                    </Button>
                  )}

                  {enrollmentStatus === "enrolled" && (
                    <Alert className="mb-4 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <AlertDescription className="text-green-600 dark:text-green-400">
                        Successfully enrolled! You can now access the full
                        course.
                      </AlertDescription>
                    </Alert>
                  )}

                  <Button variant="outline" className="w-full mb-6">
                    <Download className="h-4 w-4 mr-2" />
                    Download Course Syllabus
                  </Button>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <div className="flex items-center text-slate-600 dark:text-blue-200">
                        <Clock className="h-5 w-5 text-blue-500 mr-2" />
                        Duration
                      </div>
                      <span className="font-medium text-slate-800 dark:text-blue-100">
                        18 hours
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <div className="flex items-center text-slate-600 dark:text-blue-200">
                        <BookOpen className="h-5 w-5 text-blue-500 mr-2" />
                        Modules
                      </div>
                      <span className="font-medium text-slate-800 dark:text-blue-100">
                        6
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <div className="flex items-center text-slate-600 dark:text-blue-200">
                        <BarChart className="h-5 w-5 text-blue-500 mr-2" />
                        Level
                      </div>
                      <span className="font-medium text-slate-800 dark:text-blue-100">
                        Intermediate
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <div className="flex items-center text-slate-600 dark:text-blue-200">
                        <Calendar className="h-5 w-5 text-blue-500 mr-2" />
                        Last Updated
                      </div>
                      <span className="font-medium text-slate-800 dark:text-blue-100">
                        March 2025
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <div className="flex items-center text-slate-600 dark:text-blue-200">
                        <Award className="h-5 w-5 text-blue-500 mr-2" />
                        Certificate
                      </div>
                      <span className="font-medium text-slate-800 dark:text-blue-100">
                        Yes
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-slate-200 dark:border-blue-500/30">
                <CardHeader>
                  <CardTitle className="text-lg">Share This Course</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between">
                    <Button variant="outline" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="h-4 w-4"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                    </Button>
                    <Button variant="outline" size="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="h-4 w-4"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                    </Button>
                    <Button variant="outline" size="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="h-4 w-4"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
