// src/app/components/BlogSection.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "../../sanity/SanityQueries";

// Define the BlogPost interface
interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  mainImageUrl: string;
  publishedAt: string;
  excerpt: string;
}

export async function BlogSection() {
  const posts: BlogPost[] = await getAllPosts(); // Type the posts as BlogPost[]
  const featuredPost = posts[0]; // Consider the most recent post as featured
  const regularPosts = posts.slice(1);

  return (
    <section id="blog" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-serif mb-12 text-center">Blogs</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Post (Left Side) */}
          {featuredPost && (
            <Link href={`/blog/${featuredPost.slug}`} className="block group">
              <article className="h-full">
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4 relative">
                  <Image
                    src={featuredPost.mainImageUrl}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3">
                  <div className="inline-block px-3 py-1 bg-[#E5FFA8] text-black text-sm rounded">
                    Latest
                  </div>
                  <h3 className="text-3xl text-white font-medium group-hover:text-purple-300 transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-400 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                </div>
              </article>
            </Link>
          )}

          {/* Regular Posts (Right Side) */}
          <div className="space-y-8">
            {regularPosts.map((blog: BlogPost) => (
              <Link
                key={blog._id}
                href={`/blog/${blog.slug}`}
                className="block group"
              >
                <article className="grid grid-cols-3 gap-4">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg relative">
                    <Image
                      src={blog.mainImageUrl}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="col-span-2 space-y-3">
                    <div className="inline-block px-3 py-1 bg-[#E5FFA8] text-black text-sm rounded">
                      Latest
                    </div>
                    <h3 className="text-xl text-white font-medium group-hover:text-purple-300 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-400 line-clamp-2">{blog.excerpt}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
