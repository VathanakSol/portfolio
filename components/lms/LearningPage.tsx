"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Database, Shield, Globe } from "lucide-react";

export default function LearningPage() {
  const router = useRouter();
  const handleOptionClick = (option: string) => {
    router.push(`/learning/${option}`);
  };

  return (
    <>
      <main className="flex flex-col md:flex-row min-h-screen bg-gradient-to-b from-white to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
        <div className="flex-1 p-8 max-w-6xl mx-auto w-full">
          <h1 className="text-4xl py-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 transition-all ease-in-out duration-300 text-center mb-6">
            NakTech Interactive Learning
          </h1>

          <p className="text-center text-slate-600 dark:text-blue-200 mb-10 max-w-2xl mx-auto">
            Explore innovative learning paths powered by cutting-edge
            technology. Connect, learn, and earn digital credentials.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-white/80 dark:bg-slate-800/60 border border-slate-200 dark:border-blue-500/30 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 transition-all duration-300">
              <CardContent className="p-6">
                <Button
                  className="w-full h-36 text-lg group relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 hover:from-blue-50 hover:to-blue-100 dark:hover:from-blue-600 dark:hover:to-blue-800 border border-slate-200 dark:border-blue-400/40"
                  onClick={() => handleOptionClick("/web")}
                >
                  <div className="absolute inset-0 bg-[url('/mesh-grid.svg')] opacity-10 dark:opacity-20 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity"></div>
                  <div className="flex flex-col items-center justify-center space-y-2 relative z-10">
                    <Globe className="h-10 w-10 text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-white transition-colors" />
                    <span className="text-slate-700 dark:text-blue-100 group-hover:text-blue-700 dark:group-hover:text-white">
                      Web Development
                    </span>
                    <span className="text-xs text-slate-500 dark:text-blue-300 font-mono">
                      150+ MODULES
                    </span>
                  </div>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-slate-800/60 border border-slate-200 dark:border-blue-500/30 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 transition-all duration-300">
              <CardContent className="p-6">
                <Button
                  className="w-full h-36 text-lg group relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 hover:from-blue-50 hover:to-blue-100 dark:hover:from-blue-600 dark:hover:to-blue-800 border border-slate-200 dark:border-blue-400/40"
                  onClick={() => handleOptionClick("#")}
                >
                  <div className="absolute inset-0 bg-[url('/mesh-grid.svg')] opacity-10 dark:opacity-20 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity"></div>
                  <div className="flex flex-col items-center justify-center space-y-2 relative z-10">
                    <Database className="h-10 w-10 text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-white transition-colors" />
                    <span className="text-slate-700 dark:text-blue-100 group-hover:text-blue-700 dark:group-hover:text-white">
                      Spring Development
                    </span>
                    <span className="text-xs text-slate-500 dark:text-blue-300 font-mono">
                      200+ MODULES
                    </span>
                  </div>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-slate-800/60 border border-slate-200 dark:border-blue-500/30 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 transition-all duration-300">
              <CardContent className="p-6">
                <Button
                  className="w-full h-36 text-lg group relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 hover:from-blue-50 hover:to-blue-100 dark:hover:from-blue-600 dark:hover:to-blue-800 border border-slate-200 dark:border-blue-400/40"
                  onClick={() => {
                    handleOptionClick("/devops");
                  }}
                >
                  <div className="absolute inset-0 bg-[url('/mesh-grid.svg')] opacity-10 dark:opacity-20 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity"></div>
                  <div className="flex flex-col items-center justify-center space-y-2 relative z-10">
                    <Cpu className="h-10 w-10 text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-white transition-colors" />
                    <span className="text-slate-700 dark:text-blue-100 group-hover:text-blue-700 dark:group-hover:text-white">
                      DevOps Engineering
                    </span>
                    <span className="text-xs text-slate-500 dark:text-blue-300 font-mono">
                      175+ MODULES
                    </span>
                  </div>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-slate-800/60 border border-slate-200 dark:border-blue-500/30 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 transition-all duration-300">
              <CardContent className="p-6">
                <Button
                  className="w-full h-36 text-lg group relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 hover:from-blue-50 hover:to-blue-100 dark:hover:from-blue-600 dark:hover:to-blue-800 border border-slate-200 dark:border-blue-400/40"
                  onClick={() => handleOptionClick("practice")}
                >
                  <div className="absolute inset-0 bg-[url('/mesh-grid.svg')] opacity-10 dark:opacity-20 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity"></div>
                  <div className="flex flex-col items-center justify-center space-y-2 relative z-10">
                    <Shield className="h-10 w-10 text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-white transition-colors" />
                    <span className="text-slate-700 dark:text-blue-100 group-hover:text-blue-700 dark:group-hover:text-white">
                      Cyber Security
                    </span>
                    <span className="text-xs text-slate-500 dark:text-blue-300 font-mono">
                      225+ MODULES
                    </span>
                  </div>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center text-slate-500 dark:text-blue-300/70 text-sm mt-12">
            <p>Sign in to track your progress and earn digital certificates</p>
            <div className="flex justify-center mt-4 space-x-4">
              <Button
                variant="outline"
                className="border-slate-300 dark:border-blue-500/40 text-slate-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10"
              >
                Sign In
              </Button>
              <Button
                variant="ghost"
                className="text-slate-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
