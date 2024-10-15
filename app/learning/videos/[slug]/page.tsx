'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Clock, Calendar, ThumbsUp } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'

// Mock data for videos
const videos = {
  "introduction-to-ci-cd": {
    slug: "introduction-to-ci-cd",
    title: "Introduction to CI/CD",
    description: "Learn the basics of Continuous Integration and Continuous Deployment.",
    youtubeId: "LNLKZ4Rvk8w",
    duration: 1800, // 30 minutes
    date: "2023-06-15",
    instructor: "Jane Doe",
    category: "DevOps",
    transcript: "In this video, we'll cover the fundamentals of CI/CD...",
    relatedVideos: [
      { slug: "docker-basics", title: "Docker Basics", youtubeId: "pTFZFxd4hOI" },
      { slug: "jenkins-tutorial", title: "Jenkins Tutorial", youtubeId: "LFDrDnKPOTg" },
    ],
  },
  "spring-boot-crash-course": {
    slug: "spring-boot-crash-course",
    title: "Spring Boot Crash Course",
    description: "Get up to speed with Spring Boot in this comprehensive tutorial.",
    youtubeId: "9SGDpanrc8U",
    duration: 3600, // 60 minutes
    date: "2023-07-01",
    instructor: "John Smith",
    category: "Spring",
    transcript: "Welcome to this Spring Boot crash course. We'll start by setting up our development environment...",
    relatedVideos: [
      { slug: "spring-security-basics", title: "Spring Security Basics", youtubeId: "her_7pa0vrg" },
      { slug: "spring-data-jpa", title: "Spring Data JPA", youtubeId: "8SGI_XS5OPw" },
    ],
  },
}

export default function VideoPage({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([
    { id: 1, user: "Alice", text: "Great video! Very informative.", likes: 5 },
    { id: 2, user: "Bob", text: "Could you explain more about X?", likes: 2 },
  ])

  const video = videos[params.slug as keyof typeof videos]

  if (!video) {
    router.push('/learning/videos')
    return null
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (comment.trim()) {
      setComments([...comments, { id: comments.length + 1, user: "You", text: comment, likes: 0 }])
      setComment('')
    }
  }

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <Card className="w-full mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{video.title}</CardTitle>
          <p className="text-muted-foreground">{video.description}</p>
        </CardHeader>
        <CardContent>
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <iframe
              src={`https://www.youtube.com/embed/${video.youtubeId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
            <span className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              {Math.floor(video.duration / 60)} mins
            </span>
            <span className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              {new Date(video.date).toLocaleDateString()}
            </span>
          </div>
          <div className="flex items-center mb-4">
            <Avatar className="h-10 w-10 mr-2">
              <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${video.instructor}`} alt={video.instructor} />
              <AvatarFallback>{video.instructor[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{video.instructor}</p>
              <p className="text-sm text-muted-foreground">{video.category} Instructor</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Tabs defaultValue="transcript">
            <TabsList>
              <TabsTrigger value="transcript">Transcript</TabsTrigger>
              <TabsTrigger value="comments">Comments</TabsTrigger>
            </TabsList>
            <TabsContent value="transcript">
              <Card>
                <CardContent className="mt-4">
                  <p>{video.transcript}</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="comments">
              <Card>
                <CardContent className="mt-4">
                  <form onSubmit={handleCommentSubmit} className="mb-4">
                    <Textarea
                      placeholder="Add a comment..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="mb-2"
                    />
                    <Button type="submit">Post Comment</Button>
                  </form>
                  {comments.map((comment) => (
                    <div key={comment.id} className="mb-4 p-4 bg-muted rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center">
                          <Avatar className="h-6 w-6 mr-2">
                            <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${comment.user}`} alt={comment.user} />
                            <AvatarFallback>{comment.user[0]}</AvatarFallback>
                          </Avatar>
                          <span className="font-semibold">{comment.user}</span>
                        </div>
                        <Button variant="ghost" size="sm" className="flex items-center">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          {comment.likes}
                        </Button>
                      </div>
                      <p>{comment.text}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Related Videos</h3>
          {video.relatedVideos.map((relatedVideo) => (
            <Card key={relatedVideo.slug} className="mb-4">
              <CardContent className="p-4">
                <div className="aspect-w-16 aspect-h-9 mb-2">
                  <Image
                    src={`https://img.youtube.com/vi/${relatedVideo.youtubeId}/mqdefault.jpg`}
                    alt={relatedVideo.title}
                    width={320}
                    height={180}
                    className="object-cover rounded-md"
                  />
                </div>
                <Link href={`/learning/videos/${relatedVideo.slug}`} className="font-semibold hover:underline">
                  {relatedVideo.title}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}