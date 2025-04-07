"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { BlogPost, blogPosts as allBlogPosts } from "@/types/blogData";
import { FaBookmark, FaEthereum } from "react-icons/fa";
import { Skeleton } from "@/components/ui/skeleton";

const PAGE_SIZE = 6; // Number of posts to load at a time

export default function BlogPage() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(0); // Changed initial page to 0
    // const observer = useRef<IntersectionObserver | null>(null);
    const initialized = useRef(false); // Track if initial load has happened
    
    // Load initial posts
    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true;
            loadMorePosts();
        }
    }, []);

    const loadMorePosts = useCallback(() => {
        if (loading || !hasMore) return;
        
        setLoading(true);
        
        // Simulate API call with timeout
        setTimeout(() => {
            const startIndex = page * PAGE_SIZE;
            const endIndex = startIndex + PAGE_SIZE;
            const newPosts = allBlogPosts.slice(startIndex, endIndex);
            
            setPosts(prev => [...prev, ...newPosts]);
            setLoading(false);
            
            if (endIndex >= allBlogPosts.length) {
                setHasMore(false);
            } else {
                setPage(prev => prev + 1);
            }
        }, 800); // Simulate network delay
    }, [page, loading, hasMore]);

    // // Infinite scroll observer
    // const lastPostRef = useCallback((node: HTMLDivElement | null) => {
    //     if (loading) return;
    //     if (observer.current) observer.current.disconnect();
        
    //     observer.current = new IntersectionObserver(entries => {
    //         if (entries[0].isIntersecting && hasMore) {
    //             loadMorePosts();
    //         }
    //     });
        
    //     if (node) observer.current.observe(node);
    // }, [loading, hasMore, loadMorePosts]);

    return (
        <div className="px-4 py-4 sm:px-6 sm:py-6 md:px-16 md:py-8 bg-gradient-to-b from-gray-100 via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-black">
            <h1 className="text-xl sm:text-2xl md:text-4xl py-4 sm:py-6 text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 transition-all ease-in-out duration-300">
                Dev Blogs
            </h1>
            
            <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post: BlogPost, index) => (
                    <Link 
                        key={post.id} 
                        href={`/blog/${post.id}`} 
                        className="block group"
                        // ref={index === posts.length - 1 ? lastPostRef : null}
                    >
                        <Card className="flex flex-col h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 shadow-lg rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                            <div className="relative w-full pt-[56.25%]">
                                <Image
                                    src={post.coverImage}
                                    alt={post.title}
                                    fill
                                    className="absolute top-0 left-0 object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-110"
                                    priority={index < 3} // Only prioritize first few images
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg" />
                            </div>
                            <CardContent className="flex flex-col flex-grow p-4 sm:p-6">
                                <div className="flex items-start justify-between gap-2 sm:gap-4 mb-3">
                                    <CardTitle className="text-sm sm:text-lg md:text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent truncate">
                                        {post.title}
                                    </CardTitle>
                                    <FaEthereum className="text-base sm:text-xl md:text-2xl text-blue-500 flex-shrink-0" />
                                </div>
                                <CardDescription className="text-gray-600 dark:text-gray-400 mb-4">
                                    <div className="line-clamp-2 text-sm sm:text-base">
                                        {post.excerpt}
                                    </div>
                                </CardDescription>
                                <div className="mt-4">
                                    <div className="flex justify-between items-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-4">
                                        <time dateTime={post.date}>
                                            {new Date(post.date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </time>
                                        <div className="flex items-center space-x-2">
                                            <FaBookmark />
                                            <p>{post.readTime}</p>
                                        </div>
                                    </div>
                                    <div className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 rounded-lg font-medium text-center group-hover:opacity-90 transition-all duration-300">
                                        Read More
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
                
                {loading && (
                    <>
                        {[...Array(3)].map((_, i) => (
                            <div key={`skeleton-${i}`} className="flex flex-col space-y-3">
                                <Skeleton className="h-[200px] w-full rounded-xl" />
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-[200px]" />
                                    <Skeleton className="h-4 w-[150px]" />
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
            
            {!hasMore && posts.length > 0 && (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                    You have reached the end of the blog posts
                </div>
            )}
        </div>
    );
}