import React from "react";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  featured?: boolean;
  imageUrl: string;
}

const BlogSection = () => {
  // Sample data - replace with your actual data
  const blogs: BlogPost[] = [
    {
      id: 1,
      title: "How to Boost Your SEO in 2024",
      excerpt:
        "Stay ahead in search rankings with essential SEO strategies. Discover effective methods to optimize your content, improve site performance, and increase organic traffic for a competitive edge.",
      featured: true,
      imageUrl: "/api/placeholder/800/600",
    },
    {
      id: 2,
      title: "Top UI/UX Design Principles",
      excerpt: "Creating user-friendly designs.",
      imageUrl: "/api/placeholder/400/300",
    },
    {
      id: 3,
      title: "The Future of AI in Marketing",
      excerpt: "Explore how AI is revolutionizing marketing.",
      imageUrl: "/api/placeholder/400/300",
    },
    {
      id: 4,
      title: "Essential Tips for Startups",
      excerpt: "Build a solid foundation early.",
      imageUrl: "/api/placeholder/400/300",
    },
  ];

  const featuredPost = blogs.find((blog) => blog.featured);
  const regularPosts = blogs.filter((blog) => !blog.featured);

  return (
    <section id="blog" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-serif mb-12 text-center">Blogs</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Post (Left Side) */}
          {featuredPost && (
            <Link href={`/blog/${featuredPost.id}`} className="block group">
              <article className="h-full">
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <img
                    src={featuredPost.imageUrl}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
            {regularPosts.map((blog) => (
              <Link
                key={blog.id}
                href={`/blog/${blog.id}`}
                className="block group"
              >
                <article className="grid grid-cols-3 gap-4">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src={blog.imageUrl}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
};

export default BlogSection;
