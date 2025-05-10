"use client";

import type React from "react";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Cpu, BookOpen, Video, FileQuestion, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DevOpsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(() => {
    if (pathname.startsWith("/learning/web/courses")) return "courses";
    if (pathname.startsWith("/learning/web/videos")) return "videos";
    if (pathname.startsWith("/learning/web/quizzes")) return "quizzes";
    return "overview";
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex items-center mb-8">
          <Link href="/learning">
            <Button variant="ghost" size="icon" className="mr-4">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600">
              Web Development
            </h1>
            <p className="text-slate-600 dark:text-blue-200 mt-1">
              Master modern web development frameworks and tools
            </p>
          </div>
        </div>

        <Tabs value={activeTab} className="mb-8" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 w-full max-w-2xl">
            <TabsTrigger
              value="overview"
              asChild
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            >
              <Link href="/learning/devops">
                <Cpu className="h-4 w-4 mr-2" />
                Overview
              </Link>
            </TabsTrigger>
            <TabsTrigger
              value="courses"
              asChild
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            >
              <Link href="/learning/devops/courses">
                <BookOpen className="h-4 w-4 mr-2" />
                Courses
              </Link>
            </TabsTrigger>
            <TabsTrigger
              value="videos"
              asChild
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            >
              <Link href="/learning/devops/videos">
                <Video className="h-4 w-4 mr-2" />
                Videos
              </Link>
            </TabsTrigger>
            <TabsTrigger
              value="quizzes"
              asChild
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            >
              <Link href="/learning/devops/quizzes">
                <FileQuestion className="h-4 w-4 mr-2" />
                Quizzes
              </Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="bg-white/80 dark:bg-slate-800/60 border border-slate-200 dark:border-blue-500/30 backdrop-blur-sm rounded-lg p-6 shadow-lg">
          {children}
        </div>
      </div>
    </div>
  );
}
