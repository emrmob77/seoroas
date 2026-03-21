import { sanityFetch } from "../client";
import type { CaseStudy } from "@/types";

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  return sanityFetch<CaseStudy[]>(
    `*[_type == "caseStudy"] | order(_createdAt desc) {
      _id, client, industry, result, mainImage, beforeAfter
    }`
  );
}

export async function getCaseStudyById(id: string): Promise<CaseStudy | null> {
  return sanityFetch<CaseStudy | null>(
    `*[_type == "caseStudy" && _id == $id][0] {
      _id, client, industry, result, body, mainImage, beforeAfter
    }`,
    { id }
  );
}
