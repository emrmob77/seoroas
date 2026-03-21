import { sanityFetch } from "../client";
import type { Post } from "@/types";

const listFields = `
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  mainImage,
  author
`;

const detailFields = `
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  seoTitle,
  seoDescription,
  mainImage,
  author,
  body,
  "readingTime": round(length(pt::text(body)) / 5 / 200)
`;

export async function getAllPosts(): Promise<Post[]> {
  return sanityFetch<Post[]>(
    `*[_type == "post"] | order(publishedAt desc) { ${listFields} }`
  );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return sanityFetch<Post | null>(
    `*[_type == "post" && slug.current == $slug][0] { ${detailFields} }`,
    { slug }
  );
}

export async function getRelatedPosts(currentId: string, limit = 3): Promise<Post[]> {
  return sanityFetch<Post[]>(
    `*[_type == "post" && _id != $currentId] | order(publishedAt desc)[0...$limit] { ${listFields} }`,
    { currentId, limit }
  );
}
