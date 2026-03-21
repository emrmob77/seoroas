import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./client";

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  if (!builder) {
    return { width: () => ({ height: () => ({ format: () => ({ url: () => "" }), url: () => "" }) }) };
  }
  return builder.image(source);
}
