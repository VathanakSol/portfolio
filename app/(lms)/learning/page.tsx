"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Book, Video, FileQuestion, Code } from "lucide-react";

export default function CoursePage() {
  const router = useRouter();

  const handleOptionClick = (option: string) => {
    router.push(`/learning/${option}`);
  };

  return (
    <>
      <main className="flex flex-col md:flex-row min-h-screen px-16">
        <div className="flex-1 p-8">
          <h1 className="text-3xl py-4 font-bold hover:text-cyan-400 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 transition-all ease-in-out duration-300 dark:bg-gradient-to-r dark:from-purple-300 dark:to-cyan-300 dark:hover:text-white text-center">
            NakTech Interactive Learning
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <Button
                  className="w-full h-32 text-lg"
                  variant="outline"
                  onClick={() => handleOptionClick("courses")}
                >
                  <Book className="mr-2 h-6 w-6" /> Web Development
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Button
                  className="w-full h-32 text-lg"
                  variant="outline"
                  onClick={() => handleOptionClick("videos")}
                >
                  <Video className="mr-2 h-6 w-6" /> Spring Development
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Button
                  className="w-full h-32 text-lg"
                  variant="outline"
                  onClick={() => handleOptionClick("quizzes")}
                >
                  <FileQuestion className="mr-2 h-6 w-6" /> DevOps Engineering
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Button
                  className="w-full h-32 text-lg"
                  variant="outline"
                  onClick={() => handleOptionClick("practice")}
                >
                  <Code className="mr-2 h-6 w-6" /> Cyber Security
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}
