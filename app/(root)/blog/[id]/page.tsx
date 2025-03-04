import { notFound } from "next/navigation";
import Image from "next/image";

import { FaEthereum, FaShare, FaBookmark } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/types/blogData";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((post) => post.id === params.id);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  // Ensure the coverImage URL is absolute
  const imageUrl = new URL(post.coverImage, "https://naktech.pro").toString();

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

export default function BlogPost({ params }: Props) {
  const post = blogPosts.find((post) => post.id === params.id);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="px-4 md:px-16 py-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Link href="/blog" passHref>
        <Button
          variant="ghost"
          className="pb-8 text-gray-900 dark:text-gray-100 hover:text-blue-400 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blogs
        </Button>
      </Link>

      <div className="space-y-8">
        {/* Hero Section */}
        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              {post.title}
            </h1>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-4">
                <FaEthereum className="text-cyan-400" />
                <time
                  className="text-gray-500 dark:text-gray-300"
                  dateTime={post.date}
                >
                  {formattedDate}
                </time>
              </div>
              <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-300 mt-2 md:mt-0">
                <FaBookmark />
                <p>{post.readTime}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-[1fr_280px] gap-8">
          <article className="space-y-6">
            {/* Main Content */}
            <Card className="bg-gray-200 dark:bg-gray-800 shadow-md border border-gray-300 dark:border-gray-700">
              <CardContent className="p-4 md:p-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="my-8 border-l-4 border-cyan-400 pl-6">
                    <p className="text-gray-700 dark:text-gray-300 italic">
                      Web3 technologies are revolutionizing how we think about
                      digital ownership and interaction.
                    </p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    {post.content}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Engagement Section */}
            <div className="flex items-center justify-between py-6">
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-cyan-400 transition-colors">
                  <FaShare />
                  <span>Share</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-cyan-400 transition-colors">
                  <FaBookmark />
                  <span>Save</span>
                </button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Related Posts */}
            <Card className="bg-gray-200 dark:bg-gray-800 shadow-md border border-gray-300 dark:border-gray-700">
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Related Posts
                </h3>
                <div className="space-y-4">
                  {blogPosts
                    .filter((relatedPost) => relatedPost.id !== post.id)
                    .slice(0, 2)
                    .map((relatedPost) => (
                      <a
                        key={relatedPost.id}
                        href={`/blog/${relatedPost.id}`}
                        className="block group"
                      >
                        <h4 className="text-gray-700 dark:text-gray-300 group-hover:text-cyan-400 transition-colors">
                          {relatedPost.title}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {formattedDate}
                        </p>
                      </a>
                    ))}
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
