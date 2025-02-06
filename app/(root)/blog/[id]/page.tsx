import { notFound } from "next/navigation"
import Image from "next/image"

import { FaEthereum, FaShare, FaBookmark, FaTwitter, FaLinkedin } from "react-icons/fa"
import { Card, CardContent } from "@/components/ui/card"
import { blogPosts } from "@/types/blogData"

export default function BlogPost({ params }: { params: { id: string } }) {
    const post = blogPosts.find((post) => post.id === params.id)

    if (!post) {
        notFound()
    }

    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return (
        <div className="px-16 py-8">
            <div className="space-y-8">
                {/* Hero Section */}
                <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                            {post.title}
                        </h1>
                        <div className="flex items-center space-x-4 text-gray-700">
                            <FaEthereum className="text-cyan-400" />
                            <time className="text-gray-400" dateTime={post.date}>{formattedDate}</time>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="grid md:grid-cols-[1fr_280px] gap-8">
                    <article className="space-y-6">
                        {/* Main Content */}
                        <Card className="bg-white shadow-md border border-gray-200">
                            <CardContent className="p-6">
                                <div className="prose max-w-none">
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <div className="my-8 border-l-4 border-cyan-400 pl-6">
                                        <p className="text-gray-700 italic">
                                            Web3 technologies are revolutionizing how we think about digital ownership and interaction.
                                        </p>
                                    </div>
                                    <p className="text-gray-700">
                                        {post.content}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Engagement Section */}
                        <div className="flex items-center justify-between py-6">
                            <div className="flex space-x-4">
                                <button className="flex items-center space-x-2 text-gray-500 hover:text-cyan-400 transition-colors">
                                    <FaShare />
                                    <span>Share</span>
                                </button>
                                <button className="flex items-center space-x-2 text-gray-500 hover:text-cyan-400 transition-colors">
                                    <FaBookmark />
                                    <span>Save</span>
                                </button>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="space-y-6">
                        {/* Author Card */}
                        <Card className="bg-white shadow-md border border-gray-200">
                            <CardContent className="p-6">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                        <Image
                                            src="/api/placeholder/64/64"
                                            alt="Author"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">Web3 Expert</h3>
                                        <p className="text-gray-500">Blockchain Developer</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-sm">
                                    Passionate about blockchain technology and its potential to transform the digital landscape.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Share Links */}
                        <Card className="bg-white shadow-md border border-gray-200">
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Share</h3>
                                <div className="flex space-x-4">
                                    <button className="p-2 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-500 transition-colors">
                                        <FaTwitter className="w-5 h-5" />
                                    </button>
                                    <button className="p-2 rounded-full bg-blue-600/10 hover:bg-blue-600/20 text-blue-600 transition-colors">
                                        <FaLinkedin className="w-5 h-5" />
                                    </button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Related Posts */}
                        <Card className="bg-white shadow-md border border-gray-200">
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Posts</h3>
                                <div className="space-y-4">
                                    {blogPosts
                                        .filter(relatedPost => relatedPost.id !== post.id)
                                        .slice(0, 2)
                                        .map(relatedPost => (
                                            <a
                                                key={relatedPost.id}
                                                href={`/blog/${relatedPost.id}`}
                                                className="block group"
                                            >
                                                <h4 className="text-gray-700 group-hover:text-cyan-400 transition-colors">
                                                    {relatedPost.title}
                                                </h4>
                                                <p className="text-sm text-gray-500 mt-1">{formattedDate}</p>
                                            </a>
                                        ))}
                                </div>
                            </CardContent>
                        </Card>
                    </aside>
                </div>
            </div>
        </div>
    )
}