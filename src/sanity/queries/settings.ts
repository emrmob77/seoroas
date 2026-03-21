import { sanityFetch } from "../client";
import type { SiteSettings } from "@/types";

export async function getSiteSettings(): Promise<SiteSettings> {
  return sanityFetch<SiteSettings>(
    `*[_type == "siteSettings"][0] {
      _id, title, description, phone, email, address
    }`
  );
}
