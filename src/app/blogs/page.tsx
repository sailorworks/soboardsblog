import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "../../sanity/SanityQueries";
import BackgroundPattern from "../../app/components/BackgroundPattern";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  mainImageUrl: string;
  publishedAt: string;
  excerpt: string;
}

export default async function BlogsPage() {
  const posts: BlogPost[] = await getAllPosts();

  const sortedPosts = [...posts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <main className="relative min-h-screen bg-black">
      <BackgroundPattern />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-serif mb-12 text-center text-white">
          All Blogs
        </h1>

        <div className="space-y-6">
          {sortedPosts.map((blog: BlogPost, index: number) => (
            <Link
              key={blog._id}
              href={`/blog/${blog.slug}`}
              className="block group"
            >
              <article className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden hover:bg-gray-900/50 transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6">
                  {/* Image Container */}
                  <div className="md:col-span-4 lg:col-span-3">
                    <div className="aspect-[16/9] md:aspect-[4/3] rounded-lg overflow-hidden relative">
                      <Image
                        src={blog.mainImageUrl}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="md:col-span-8 lg:col-span-9 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        {index === 0 && (
                          <div className="px-3 py-1 bg-purple-500 text-white text-sm rounded">
                            Latest Post
                          </div>
                        )}
                        <div className="px-3 py-1 bg-[#E5FFA8] text-black text-sm rounded">
                          {new Date(blog.publishedAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </div>
                      </div>

                      <h2 className="text-2xl md:text-3xl text-white font-medium group-hover:text-purple-300 transition-colors">
                        {blog.title}
                      </h2>

                      <p className="text-gray-400 line-clamp-2 md:line-clamp-3">
                        {blog.excerpt}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center text-purple-300 group-hover:text-purple-200">
                      <span className="text-sm">Read More</span>
                      <svg
                        className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
