"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Clock, Play, Eye } from "lucide-react";
import Image from "next/image";

export default function DevOpsVideos() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const videos = [
    {
      id: 1,
      title: "Getting Started with Jenkins",
      description: "Learn how to set up and configure Jenkins for CI/CD",
      duration: "45 min",
      views: "12.5k",
      category: "pipeline",
      featured: true,
    },
    {
      id: 2,
      title: "Kubernetes Deployment Strategies",
      description: "Explore different deployment strategies in Kubernetes",
      duration: "38 min",
      views: "8.2k",
      category: "container",
      featured: true,
    },
    {
      id: 3,
      title: "Terraform Best Practices",
      description: "Learn best practices for organizing Terraform code",
      duration: "52 min",
      views: "6.7k",
      category: "infrastructure",
      featured: false,
    },
    {
      id: 4,
      title: "Docker Compose Deep Dive",
      description: "Advanced techniques with Docker Compose",
      duration: "41 min",
      views: "9.3k",
      category: "container",
      featured: false,
    },
    {
      id: 5,
      title: "Setting Up Prometheus Alerts",
      description: "Configure effective alerting in Prometheus",
      duration: "36 min",
      views: "5.1k",
      category: "monitoring",
      featured: false,
    },
    {
      id: 6,
      title: "GitLab CI Pipeline Tutorial",
      description: "Build efficient CI pipelines with GitLab",
      duration: "49 min",
      views: "7.8k",
      category: "pipeline",
      featured: true,
    },
  ];

  const filteredVideos = videos.filter((video) => {
    const matchesFilter = filter === "all" || video.category === filter;
    const matchesSearch =
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-blue-100">
          DevOps Videos
        </h1>

        <div className="relative w-full md:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-slate-400" />
          <Input
            placeholder="Search videos..."
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
        {filteredVideos.map((video) => (
          <Card
            key={video.id}
            className="overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative h-40 bg-slate-200 dark:bg-slate-700">
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full bg-blue-500/90 text-white hover:bg-blue-600"
                >
                  <Play className="h-5 w-5" />
                </Button>
              </div>
              <Image
                src={`/placeholder.svg?height=160&width=320&text=${encodeURIComponent(video.title)}`}
                width={320}
                height={160}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              {video.featured && (
                <Badge className="absolute top-2 right-2 bg-blue-500 text-white">
                  Featured
                </Badge>
              )}
            </div>
            <CardContent className="pt-4">
              <h3 className="font-medium text-slate-800 dark:text-blue-100 mb-1">
                {video.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-blue-300 mb-3">
                {video.description}
              </p>

              <div className="flex justify-between text-xs text-slate-500 dark:text-blue-300">
                <div className="flex items-center">
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  <span>{video.duration}</span>
                </div>
                <div className="flex items-center">
                  <Eye className="h-3.5 w-3.5 mr-1" />
                  <span>{video.views} views</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-500 dark:text-blue-300">
            No videos found matching your criteria.
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
