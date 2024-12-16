'use client';

import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Youtube, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';
import { motion } from "framer-motion";

interface VideoData {
  title: string;
  description: string;
  viewCount: string;
  likeCount: string;
  commentCount: string;
}

interface YouTubeSectionProps {
  videoId?: string;
  title?: string;
  description?: string;
  channelUrl?: string;
}

export default function YoutubeSection({
                                         videoId = "2wHNxsWQOXo",
                                         title = "My Channel YouTube",
                                         description = "Check out my latest video!",
                                         channelUrl = "https://www.youtube.com/@nakkhmertechnology",
                                       }: YouTubeSectionProps) {
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false); // New state for error handling

  useEffect(() => {
    const fetchVideoData = async () => {
      setIsLoading(true);
      setHasError(false); // Reset error state before fetching
      try {
        const response = await fetch(`/api/youtube?videoId=${videoId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data) {
          setVideoData({
            title: data.title,
            description: data.description,
            viewCount: data.viewCount,
            likeCount: data.likeCount,
            commentCount: data.commentCount,
          });
        }
      } catch (error) {
        console.error("Error fetching video data:", error);
        setHasError(true); // Set error state on failure
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideoData();
  }, [videoId]);

  const formatCount = (count: string) => {
    const num = parseInt(count, 10);
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return count;
  };

  // Early return for error state
  if (hasError) {
    return (
        <Card className="w-full max-w-4xl mx-auto overflow-hidden transition-shadow duration-300 hover:shadow-xl">
          <CardContent className="p-6 text-center">
            <p className="text-red-500">Failed to load video data. Please try again later.</p>
          </CardContent>
        </Card>
    );
  }

  return (
      <Card className="w-full max-w-4xl mx-auto overflow-hidden transition-shadow duration-300 hover:shadow-xl">
        <CardContent className="p-6">
          <div className="relative w-full aspect-video mb-4">
            {isLoading ? (
                <Skeleton className="w-full h-full" />
            ) : (
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            )}
          </div>
          <div className="space-y-4">
            {isLoading ? (
                <>
                  <Skeleton className="h-8 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </>
            ) : (
                <>
                  <h2 className="text-2xl font-bold">{videoData?.title || title}</h2>
                  <p className="text-muted-foreground">{videoData?.description || description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                  <span className="flex items-center">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    {formatCount(videoData?.likeCount || '0')}
                  </span>
                      <span className="flex items-center">
                    <MessageCircle className="w-4 h-4 mr-1" />
                        {formatCount(videoData?.commentCount || '0')}
                  </span>
                      <span className="flex items-center">
                    <Youtube className="w-4 h-4 mr-1" />
                        {formatCount(videoData?.viewCount || '0')} views
                  </span>
                    </div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button onClick={() => window.open(channelUrl, '_blank')} className="flex items-center">
                        <Youtube className="w-4 h-4 mr-2" />
                        Subscribe
                      </Button>
                    </motion.div>
                  </div>
                </>
            )}
          </div>
          <div className="mt-4 flex justify-end">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: videoData?.title || title,
                    text: videoData?.description || description,
                    url: `https://www.youtube.com/watch?v=${videoId}`,
                  });
                } else {
                  window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
                }
              }}>
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
  );
}
