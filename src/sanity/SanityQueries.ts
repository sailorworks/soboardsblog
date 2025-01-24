// src/sanity/sanity-queries.ts
import { groq } from "next-sanity";
import { client } from "./lib/client";

// Query to fetch all blog posts
export const getAllPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    "mainImageUrl": mainImage.asset->url,
    publishedAt,
    "excerpt": body[0].children[0].text
  }
`;

// Query to fetch a single post by slug
export const getPostBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    "mainImageUrl": mainImage.asset->url,
    publishedAt,
    body,
    "authorName": author->name
  }
`;

// Function to fetch all posts
export async function getAllPosts() {
  return await client.fetch(getAllPostsQuery);
}

// Function to fetch a single post by slug
export async function getPostBySlug(slug: string) {
  return await client.fetch(getPostBySlugQuery, { slug });
}
