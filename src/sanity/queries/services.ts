import { sanityFetch } from "../client";
import type { Service } from "@/types";

export async function getAllServices(): Promise<Service[]> {
  return sanityFetch<Service[]>(
    `*[_type == "service"] | order(_createdAt asc) {
      _id, title, slug, shortDesc, icon, seoTitle, seoDescription,
      "faqs": faqs[]->{ _id, question, answer }
    }`
  );
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  return sanityFetch<Service | null>(
    `*[_type == "service" && slug.current == $slug][0] {
      _id, title, slug, shortDesc, body, icon, seoTitle, seoDescription,
      "faqs": faqs[]->{ _id, question, answer }
    }`,
    { slug }
  );
}
