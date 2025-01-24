// src/app/blog/[slug].tsx
import { getPostBySlug } from "../../../sanity/SanityQueries";
import { Metadata } from "next";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

// Dynamic metadata for each blog post
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

// Blog Post Page Component
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
    <article className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-8 relative aspect-video">
        <Image
          src={post.mainImageUrl}
          alt={post.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      <div className="prose prose-invert max-w-none">
        <PortableText value={post.body} />
      </div>

      <div className="mt-8 text-gray-400">
        Published by {post.authorName} on{" "}
        {new Date(post.publishedAt).toLocaleDateString()}
      </div>
    </article>
  );
}
