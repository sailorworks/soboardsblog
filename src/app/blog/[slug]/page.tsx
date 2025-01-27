import { getPostBySlug } from "../../../sanity/SanityQueries";
import { Metadata } from "next";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import BackgroundPattern from "../../../app/components/BackgroundPattern";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found",
    };
  }
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-black text-white">
      <BackgroundPattern />

      <article className="relative z-10 max-w-4xl mx-auto px-4 py-16">
        {/* Header Section */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">{post.title}</h1>

          <div className="flex items-center justify-center gap-4 text-sm text-gray-300">
            <div className="flex items-center">
              <span className="mr-2">By</span>
              <span className="text-[#E5FFA8]">{post.authorName}</span>
            </div>
            <span>•</span>
            <time dateTime={post.publishedAt} className="text-gray-300">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12">
          <div className="aspect-[16/9] relative rounded-xl overflow-hidden">
            <Image
              src={post.mainImageUrl}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Article Content */}
        <div
          className="prose prose-invert max-w-none 
          prose-headings:font-serif prose-h1 prose-h2 prose-h3
          prose-p prose-a:text-[#E5FFA8] prose-a:no-underline hover:prose-a:underline
          prose-strong prose-em:text-gray-300 prose-blockquote prose-ul prose-ol prose-li
          prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800 prose-code
          prose-img:rounded-xl"
        >
          <PortableText value={post.body} />
        </div>

        {/* Footer Section */}
        <footer className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex items-center justify-between text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <span>Published by</span>
              <span className="text-[#E5FFA8]">{post.authorName}</span>
            </div>
            <time dateTime={post.publishedAt} className="text-gray-300">
              {new Date(post.publishedAt).toLocaleDateString()}
            </time>
          </div>
        </footer>
      </article>
    </main>
  );
}
