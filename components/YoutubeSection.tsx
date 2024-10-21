'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Youtube } from "lucide-react"

interface VideoData {
  title: string;
  description: string;
}

interface YouTubeBannerProps {
  videoId?: string;
  title?: string;
  description?: string;
  channelUrl?: string;
}

export default function YoutubeSection({ 
  videoId = "jEpWB3RsNtE",
  title = "My Channel YouTube",
  description = "Check out my latest video!",
  channelUrl = "https://www.youtube.com/@nakkhmertechnology",
}: YouTubeBannerProps) {
  const [videoData, setVideoData] = useState<VideoData | null>(null); 

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${process.env.YOUTUBE_API_KEY}&part=snippet`);
        const data = await response.json();
        if (data.items && data.items.length > 0) {
          setVideoData({
            title: data.items[0].snippet.title,
            description: data.items[0].snippet.description,
          });
        }
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchVideoData();
  }, [videoId]);

  return (
    <Card className="w-full max-w-3xl mx-auto overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      <CardContent className="flex flex-col items-center p-4">
        <div className="relative w-full aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="text-center mt-4">
          <h2 className="text-2xl font-bold mb-1">{videoData?.title || title}</h2>
          <p className="text-muted-foreground mb-2">{videoData?.description || description}</p>
          <Button onClick={() => window.open(channelUrl, '_blank')} className="flex items-center justify-center w-full">
            <Youtube className="w-4 h-4 mr-2" />
            Subscribe
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}