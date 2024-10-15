"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Clock, Calendar } from "lucide-react";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from 'next/image';
import SidebarLearning from '@/components/SidebarLearning';

// Mock data for videos
const videos = [
  {
    slug: "introduction-to-ci-cd",
    title: "Introduction to CI/CD",
    description: "Learn the basics of Continuous Integration and Continuous Deployment.",
    youtubeId: "LNLKZ4Rvk8w",
    duration: 1800,
    date: "2023-06-15",
    category: "DevOps"
  },
  {
    slug: "docker-basics",
    title: "Docker Basics",
    description: "Get started with Docker containerization.",
    youtubeId: "pTFZFxd4hOI",
    duration: 2400,
    date: "2023-06-20",
    category: "DevOps"
  },
  {
    slug: "spring-boot-crash-course",
    title: "Spring Boot Crash Course",
    description: "Get up to speed with Spring Boot in this comprehensive tutorial.",
    youtubeId: "9SGDpanrc8U",
    duration: 3600,
    date: "2023-07-01",
    category: "Spring"
  },
  {
    slug: "spring-security-basics",
    title: "Spring Security Basics",
    description: "Learn how to secure your Spring applications.",
    youtubeId: "her_7pa0vrg",
    duration: 2700,
    date: "2023-07-10",
    category: "Spring"
  },
  {
    slug: "kubernetes-for-beginners",
    title: "Kubernetes for Beginners",
    description: "Start your journey with Kubernetes orchestration.",
    youtubeId: "X48VuDVv0do",
    duration: 3000,
    date: "2023-07-15",
    category: "DevOps"
  },
  {
    slug: "spring-data-jpa",
    title: "Spring Data JPA",
    description: "Master database operations with Spring Data JPA.",
    youtubeId: "8SGI_XS5OPw",
    duration: 2800,
    date: "2023-07-20",
    category: "Spring"
  }
];

const VideosPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredVideos = videos.filter(video => 
    video.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (activeCategory === 'All' || video.category === activeCategory)
  );

  const featuredVideo = videos[0]; // Assuming the first video is featured

  return (

  <main className="flex flex-col md:flex-row min-h-screen bg-gray-100 dark:bg-gray-900">
      <SidebarLearning />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">Video Tutorials</h1>
        
        {/* Featured Video */}
        <Card className="mb-8 overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800">
          <div className="aspect-w-16 aspect-h-9">
            <Image 
              src={`https://img.youtube.com/vi/${featuredVideo.youtubeId}/maxresdefault.jpg`} 
              width={1280}
              height={720}
              alt={featuredVideo.title}
              className="object-cover w-full h-full"
            />
          </div>
          <CardHeader>
            <CardTitle className="flex items-center text-xl font-semibold text-gray-800 dark:text-gray-200">
              <Video className="mr-2 h-6 w-6 text-blue-500" /> 
              Featured: {featuredVideo.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{featuredVideo.description}</p>
            <Link href={`/learning/videos/${featuredVideo.slug}`}>
              <Button className="w-full">
                Watch Featured Video
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Search and Category Tabs */}
        <div className="mb-6 flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <Input
              type="text"
              placeholder="Search videos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full md:w-auto">
            <TabsList>
              <TabsTrigger value="All">All</TabsTrigger>
              <TabsTrigger value="DevOps">DevOps</TabsTrigger>
              <TabsTrigger value="Spring">Spring</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <Card key={video.slug} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800">
              <div className="aspect-w-16 aspect-h-9">
                <Image 
                  src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`} 
                  width={500}
                  height={500}
                  alt={video.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center text-lg font-semibold text-gray-800 dark:text-gray-200">
                  <Video className="mr-2 h-5 w-5 text-blue-500" /> 
                  {video.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{video.description}</p>
                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mb-4">
                  <span className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {Math.floor(video.duration / 60)} mins
                  </span>
                  <span className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    {new Date(video.date).toLocaleDateString()}
                  </span>
                </div>
                <Link href={`/learning/videos/${video.slug}`}>
                  <Button className="w-full">
                    Watch Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};


export default VideosPage;