import { createClient, type SanityClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const isConfigured = /^[a-z0-9-]+$/.test(projectId) && projectId !== "your_project_id";

export const sanityClient: SanityClient | null = isConfigured
  ? createClient({
      projectId,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
      apiVersion: "2024-03-01",
      useCdn: true,
    })
  : null;

export async function sanityFetch<T>(query: string, params?: Record<string, unknown>): Promise<T> {
  if (!sanityClient) {
    return [] as unknown as T;
  }
  return sanityClient.fetch<T>(query, params ?? {});
}
