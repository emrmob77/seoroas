import { sanityFetch } from "../client";
import type { LocalPage } from "@/types";

export async function getAllLocalPages(): Promise<LocalPage[]> {
  return sanityFetch<LocalPage[]>(
    `*[_type == "localPage"] | order(city asc) {
      _id, city, slug, title, seoTitle, seoDescription,
      "faqs": faqs[]->{ _id, question, answer }
    }`
  );
}

export async function getLocalPageBySlug(slug: string): Promise<LocalPage | null> {
  return sanityFetch<LocalPage | null>(
    `*[_type == "localPage" && slug.current == $slug][0] {
      _id, city, slug, title, body, seoTitle, seoDescription,
      "faqs": faqs[]->{ _id, question, answer }
    }`,
    { slug }
  );
}
