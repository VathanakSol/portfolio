import Link from "next/link"
import Image from "next/image"
import { Card, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { BlogPost, blogPosts } from "@/types/blogData"
import { FaBookmark, FaEthereum } from "react-icons/fa"

export default function BlogPage() {
    return (
        <div className="px-4 py-4 sm:px-6 sm:py-6 md:px-16 md:py-8 dark:bg-gray-900">
            <h1 className="text-xl sm:text-2xl md:text-4xl py-4 sm:py-6 text-center font-bold hover:text-cyan-400 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 transition-all ease-in-out duration-300 dark:bg-gradient-to-r dark:from-purple-300 dark:to-cyan-300 dark:hover:text-white">
                Dev Blogs
            </h1>
            <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post: BlogPost) => (
                    <Link key={post.id} href={`/blog/${post.id}`} className="block group">
                        <Card className="flex flex-col h-full bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800 dark:text-gray-200">
                            <div className="relative w-full pt-[56.25%]">
                                <Image
                                    src={post.coverImage}
                                    alt={post.title}
                                    fill
                                    className="absolute top-0 left-0 object-cover transition-transform duration-500"
                                    priority={true}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <CardContent className="flex flex-col flex-grow p-4 sm:p-6">
                                <div className="flex items-start justify-between gap-2 sm:gap-4 mb-3">
                                    <CardTitle className="text-sm sm:text-lg md:text-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent truncate dark:from-cyan-300 dark:to-blue-400">
                                        {post.title}
                                    </CardTitle>
                                    <FaEthereum className="text-base sm:text-xl md:text-2xl flex-shrink-0" />
                                </div>
                                <CardDescription className="text-gray-600 mb-4 dark:text-gray-400">
                                    <div className="line-clamp-2 text-sm sm:text-base">
                                        {post.excerpt}
                                    </div>
                                </CardDescription>
                                <div className="mt-4">
                                    <div className="flex justify-between items-center text-xs sm:text-sm text-gray-500 mb-4 dark:text-gray-400">
                                        <time dateTime={post.date}>
                                            {new Date(post.date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </time>
                                        <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                                            <FaBookmark />
                                            <p>{post.readTime}</p>
                                        </div>
                                    </div>
                                    <div className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg font-medium text-center group-hover:opacity-90 transition-all duration-300 dark:from-purple-400 dark:to-pink-400">
                                        Read More
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}