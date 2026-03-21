import { createClient } from "@sanity/client";
import { JSDOM } from "jsdom";
import { htmlToBlocks } from "@portabletext/block-tools";
import { Schema } from "@sanity/schema";
import dotenv from "dotenv";
import path from "path";
import { Readable } from "stream";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const WP_API = "https://www.seoroas.com/wp-json/wp/v2";

const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-03-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN!,
});

const defaultSchema = Schema.compile({
  name: "default",
  types: [
    {
      name: "post",
      type: "document",
      fields: [
        { name: "body", type: "array", of: [{ type: "block" }, { type: "image" }] },
      ],
    },
  ],
});

const blockContentType = defaultSchema
  .get("post")
  .fields.find((f: { name: string }) => f.name === "body").type;

interface WPPost {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  categories: number[];
  yoast_head_json?: {
    title?: string;
    description?: string;
    author?: string;
    og_image?: { url: string }[];
  };
}

interface WPMedia {
  id: number;
  source_url: string;
  alt_text: string;
  media_details?: { width: number; height: number };
}

interface WPCategory {
  id: number;
  name: string;
  slug: string;
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&hellip;/g, "...")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;|&#8221;/g, '"')
    .replace(/&nbsp;/g, " ")
    .replace(/\n+/g, " ")
    .trim();
}

function cleanWpHtml(html: string): string {
  let cleaned = html;

  // WordPress TOC plugin markup
  cleaned = cleaned.replace(/<div[^>]*class="[^"]*wp-block-yoast-seo[^"]*"[^>]*>[\s\S]*?<\/div>/gi, "");
  cleaned = cleaned.replace(/<div[^>]*class="[^"]*ez-toc[^"]*"[^>]*>[\s\S]*?<\/nav><\/div>/gi, "");
  cleaned = cleaned.replace(/<div[^>]*id="ez-toc-container"[^>]*>[\s\S]*?<\/nav><\/div>/gi, "");

  // Empty spans and divs
  cleaned = cleaned.replace(/<span[^>]*class="ez-toc[^"]*"[^>]*>[\s\S]*?<\/span>/gi, "");
  cleaned = cleaned.replace(/<span><\/span>/g, "");
  cleaned = cleaned.replace(/<div>\s*<\/div>/g, "");

  // WordPress specific attributes
  cleaned = cleaned.replace(/ class="[^"]*"/g, "");
  cleaned = cleaned.replace(/ id="[^"]*"/g, "");
  cleaned = cleaned.replace(/ data-[a-z-]*="[^"]*"/g, "");
  cleaned = cleaned.replace(/ style="[^"]*"/g, "");

  // Fix heading span wrappers that WP adds
  cleaned = cleaned.replace(/<h([2-4])>\s*<span>([\s\S]*?)<\/span>\s*<\/h\1>/gi, "<h$1>$2</h$1>");

  return cleaned;
}

function htmlToPortableText(html: string): unknown[] {
  const cleaned = cleanWpHtml(html);

  try {
    const blocks = htmlToBlocks(cleaned, blockContentType, {
      parseHtml: (htmlStr: string) => new JSDOM(htmlStr).window.document,
      rules: [
        {
          deserialize(el, next, block) {
            const tagName = (el as HTMLElement).tagName?.toLowerCase();
            if (tagName === "img") {
              const src = (el as HTMLElement).getAttribute("src");
              if (!src) return undefined;
              return block({
                _type: "image",
                _sanity_image_url: src,
                alt: (el as HTMLElement).getAttribute("alt") || "",
              });
            }
            if (tagName === "figure") {
              const img = (el as HTMLElement).querySelector("img");
              if (img) {
                const src = img.getAttribute("src");
                if (!src) return undefined;
                return block({
                  _type: "image",
                  _sanity_image_url: src,
                  alt: img.getAttribute("alt") || "",
                });
              }
            }
            return undefined;
          },
        },
      ],
    });

    return blocks.filter(
      (b: Record<string, unknown>) =>
        !(b._type === "block" && Array.isArray(b.children) && b.children.length === 1 && b.children[0].text === "")
    );
  } catch (err) {
    console.warn("  [WARN] htmlToBlocks failed:", (err as Error).message);
    return manualHtmlToBlocks(cleaned);
  }
}

function manualHtmlToBlocks(html: string): unknown[] {
  const dom = new JSDOM(`<!DOCTYPE html><body>${html}</body>`);
  const body = dom.window.document.body;
  const blocks: unknown[] = [];
  let keyCounter = 0;
  const key = () => `k${(keyCounter++).toString(36)}`;

  for (const node of Array.from(body.children)) {
    const tag = node.tagName.toLowerCase();
    const text = (node.textContent || "").trim();
    if (!text) continue;

    if (["h1", "h2", "h3", "h4"].includes(tag)) {
      blocks.push({
        _type: "block",
        _key: key(),
        style: tag,
        markDefs: [],
        children: [{ _type: "span", _key: key(), text, marks: [] }],
      });
    } else if (tag === "ul" || tag === "ol") {
      const listType = tag === "ul" ? "bullet" : "number";
      for (const li of Array.from(node.querySelectorAll("li"))) {
        const liText = (li.textContent || "").trim();
        if (!liText) continue;
        blocks.push({
          _type: "block",
          _key: key(),
          style: "normal",
          listItem: listType,
          level: 1,
          markDefs: [],
          children: [{ _type: "span", _key: key(), text: liText, marks: [] }],
        });
      }
    } else if (tag === "blockquote") {
      blocks.push({
        _type: "block",
        _key: key(),
        style: "blockquote",
        markDefs: [],
        children: [{ _type: "span", _key: key(), text, marks: [] }],
      });
    } else {
      blocks.push({
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs: [],
        children: parseInlineMarks(node, key),
      });
    }
  }

  return blocks.length > 0
    ? blocks
    : [
        {
          _type: "block",
          _key: key(),
          style: "normal",
          markDefs: [],
          children: [{ _type: "span", _key: key(), text: stripHtml(html), marks: [] }],
        },
      ];
}

function parseInlineMarks(el: Element, key: () => string): unknown[] {
  const children: unknown[] = [];
  for (const node of Array.from(el.childNodes)) {
    if (node.nodeType === 3) {
      const text = node.textContent || "";
      if (text.trim()) children.push({ _type: "span", _key: key(), text, marks: [] });
    } else if (node.nodeType === 1) {
      const tag = (node as Element).tagName.toLowerCase();
      const text = (node.textContent || "").trim();
      if (!text) continue;
      const marks: string[] = [];
      if (tag === "strong" || tag === "b") marks.push("strong");
      if (tag === "em" || tag === "i") marks.push("em");
      if (tag === "code") marks.push("code");
      children.push({ _type: "span", _key: key(), text, marks });
    }
  }
  return children.length > 0
    ? children
    : [{ _type: "span", _key: key(), text: el.textContent || "", marks: [] }];
}

async function fetchAllPosts(): Promise<WPPost[]> {
  const url = `${WP_API}/posts?per_page=100&_fields=id,slug,date,title,content,excerpt,featured_media,categories,yoast_head_json`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`WP API error: ${res.status}`);
  return res.json();
}

async function fetchMedia(mediaId: number): Promise<WPMedia | null> {
  if (!mediaId) return null;
  try {
    const res = await fetch(`${WP_API}/media/${mediaId}?_fields=id,source_url,alt_text,media_details`);
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

async function fetchCategories(): Promise<Map<number, WPCategory>> {
  const res = await fetch(`${WP_API}/categories?per_page=100&_fields=id,name,slug`);
  const cats: WPCategory[] = await res.json();
  return new Map(cats.map((c) => [c.id, c]));
}

async function uploadImageToSanity(imageUrl: string, altText: string) {
  try {
    const res = await fetch(imageUrl);
    if (!res.ok) throw new Error(`Image fetch failed: ${res.status}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    const stream = Readable.from(buffer);

    const filename = imageUrl.split("/").pop()?.split("?")[0] || "image.webp";
    const asset = await sanity.assets.upload("image", stream, {
      filename,
      contentType: res.headers.get("content-type") || "image/webp",
    });

    return {
      _type: "image" as const,
      asset: { _type: "reference" as const, _ref: asset._id },
      alt: altText,
    };
  } catch (err) {
    console.warn(`  [WARN] Image upload failed for ${imageUrl}:`, (err as Error).message);
    return null;
  }
}

async function checkExisting(slug: string): Promise<boolean> {
  const result = await sanity.fetch(
    `count(*[_type == "post" && slug.current == $slug])`,
    { slug }
  );
  return result > 0;
}

async function migrate() {
  console.log("=== WordPress -> Sanity Migration ===\n");

  console.log("[1/4] WordPress'ten yazılar çekiliyor...");
  const posts = await fetchAllPosts();
  console.log(`  ${posts.length} yazı bulundu.\n`);

  console.log("[2/4] Kategoriler çekiliyor...");
  const categories = await fetchCategories();
  console.log(`  ${categories.size} kategori bulundu.\n`);

  console.log("[3/4] Yazılar Sanity'ye aktarılıyor...\n");

  let success = 0;
  let skipped = 0;

  for (const post of posts) {
    const slug = post.slug;
    const title = stripHtml(post.title.rendered);

    const exists = await checkExisting(slug);
    if (exists) {
      console.log(`  [SKIP] "${title}" — zaten mevcut`);
      skipped++;
      continue;
    }

    console.log(`  [PROCESSING] "${title}"`);

    // Featured image
    let mainImage = null;
    if (post.featured_media) {
      const media = await fetchMedia(post.featured_media);
      if (media?.source_url) {
        console.log(`    -> Görsel yükleniyor: ${media.source_url.split("/").pop()}`);
        mainImage = await uploadImageToSanity(media.source_url, media.alt_text || title);
      }
    }

    // HTML -> Portable Text
    const body = htmlToPortableText(post.content.rendered);

    // Yoast SEO data
    const yoast = post.yoast_head_json;
    const seoTitle = yoast?.title?.replace(/ - SEOROAS$/, "") || title;
    const seoDescription = yoast?.description || stripHtml(post.excerpt.rendered).slice(0, 160);
    const author = yoast?.author || "SEOROAS";

    // Category names
    const catNames = post.categories
      .map((cid) => categories.get(cid)?.name)
      .filter(Boolean);

    // Excerpt
    const excerpt = stripHtml(post.excerpt.rendered).slice(0, 300);

    // Create Sanity document
    const doc = {
      _type: "post",
      title,
      slug: { _type: "slug", current: slug },
      publishedAt: new Date(post.date).toISOString(),
      excerpt,
      body,
      author,
      seoTitle: seoTitle.slice(0, 60),
      seoDescription: seoDescription.slice(0, 160),
      ...(mainImage && { mainImage }),
    };

    try {
      await sanity.create(doc);
      console.log(`    -> OK (kategoriler: ${catNames.join(", ") || "—"})`);
      success++;
    } catch (err) {
      console.error(`    -> HATA:`, (err as Error).message);
    }
  }

  console.log(`\n[4/4] Tamamlandı!`);
  console.log(`  Başarılı: ${success}`);
  console.log(`  Atlanan: ${skipped}`);
  console.log(`  Toplam: ${posts.length}`);
}

migrate().catch((err) => {
  console.error("Migration hatası:", err);
  process.exit(1);
});
