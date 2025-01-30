import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";

import { getPostBySlug } from "../../../sanity/SanityQueries";
import BackgroundPattern from "../../../app/components/BackgroundPattern";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
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

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const styles = {
  main: "relative min-h-screen bg-black text-white",
  article: "relative z-10 max-w-3xl mx-auto px-6 py-12", // Reduced max-width and padding
  header: {
    wrapper: "mb-12", // Reduced margin
    title: "text-4xl font-serif mb-4 leading-tight tracking-wide", // Reduced text size and margin
    meta: {
      wrapper: "flex items-center justify-center gap-4 text-sm text-gray-300", // Reduced gap
      author: "flex items-center",
      authorName: "text-[#E5FFA8]",
      separator: "•",
      date: "text-gray-300",
    },
  },
  image: {
    wrapper: "mb-8", // Reduced margin
    container:
      "aspect-[16/9] relative rounded-xl overflow-hidden max-h-[400px]", // Added max-height
    style: "object-cover",
  },
  content: `
    prose prose-invert max-w-none
    prose-headings:font-serif 
    prose-h1:text-2xl prose-h1:font-semibold prose-h1:leading-relaxed prose-h1:tracking-wide
    prose-h2:text-xl prose-h2:font-semibold prose-h2:leading-relaxed prose-h2:tracking-wide 
    prose-h3:text-lg prose-h3:font-semibold
    prose-p:text-base prose-p:leading-relaxed prose-p:tracking-wide prose-p:mb-6
    prose-a:text-[#E5FFA8] prose-a:no-underline hover:prose-a:underline
    prose-em:text-gray-300
    prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800
    prose-img:rounded-xl prose-img:max-h-[400px]
  `.trim(),
  footer: {
    wrapper: "mt-12 pt-6 border-t border-gray-800", // Reduced margins and padding
    content: "flex items-center justify-between text-sm text-gray-300",
    author: "flex items-center gap-2",
    authorName: "text-[#E5FFA8]",
    date: "text-gray-300",
  },
};

export default async function BlogPost({ params }: BlogPostProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <BackgroundPattern />

      <article className={styles.article}>
        <header className={styles.header.wrapper}>
          <h1 className={styles.header.title}>{post.title}</h1>

          <div className={styles.header.meta.wrapper}>
            <div className={styles.header.meta.author}>
              <span className="mr-2">By</span>
              <span className={styles.header.meta.authorName}>
                {post.authorName}
              </span>
            </div>
            <span className={styles.header.meta.separator}>•</span>
            <time
              dateTime={post.publishedAt}
              className={styles.header.meta.date}
            >
              {formatDate(post.publishedAt)}
            </time>
          </div>
        </header>

        <section className={styles.image.wrapper}>
          <div className={styles.image.container}>
            <Image
              src={post.mainImageUrl}
              alt={post.title}
              fill
              priority
              className={styles.image.style}
            />
          </div>
        </section>

        <section>
          <div className={styles.content}>
            <PortableText value={post.body} />
          </div>
        </section>

        <footer className={styles.footer.wrapper}>
          <div className={styles.footer.content}>
            <div className={styles.footer.author}>
              <span>Published by</span>
              <span className={styles.footer.authorName}>
                {post.authorName}
              </span>
            </div>
            <time dateTime={post.publishedAt} className={styles.footer.date}>
              {formatDate(post.publishedAt)}
            </time>
          </div>
        </footer>
      </article>
    </main>
  );
}
