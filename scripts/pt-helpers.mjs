// Portable Text yardımcıları — blog yazısı oluşturma scriptleri için ortak modül.
// Inline sözdizimi: **kalın**, *italik*, [metin](/href) iç/dış link.
import { createClient } from "@sanity/client";
import { config } from "dotenv";
config({ path: ".env.local" });

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "67vl8x07",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-03-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

let keyCounter = 0;
const key = () => `k${(++keyCounter).toString(36)}${Math.random().toString(36).slice(2, 7)}`;

// **bold**, *em*, [text](href) destekleyen inline parser
function spans(text) {
  const children = [];
  const markDefs = [];
  const re = /(\*\*([^*]+)\*\*)|(\*([^*]+)\*)|(\[([^\]]+)\]\(([^)]+)\))/g;
  let last = 0;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) {
      children.push({ _key: key(), _type: "span", marks: [], text: text.slice(last, m.index) });
    }
    if (m[1]) {
      children.push({ _key: key(), _type: "span", marks: ["strong"], text: m[2] });
    } else if (m[3]) {
      children.push({ _key: key(), _type: "span", marks: ["em"], text: m[4] });
    } else if (m[5]) {
      const linkKey = key();
      markDefs.push({ _key: linkKey, _type: "link", href: m[7] });
      children.push({ _key: key(), _type: "span", marks: [linkKey], text: m[6] });
    }
    last = re.lastIndex;
  }
  if (last < text.length) {
    children.push({ _key: key(), _type: "span", marks: [], text: text.slice(last) });
  }
  return { children, markDefs };
}

function block(style, text, extra = {}) {
  const { children, markDefs } = spans(text);
  return { _key: key(), _type: "block", style, markDefs, children, ...extra };
}

export const h2 = (t) => block("h2", t);
export const h3 = (t) => block("h3", t);
export const p = (t) => block("normal", t);
export const quote = (t) => block("blockquote", t);
export const li = (t, listItem = "bullet", level = 1) =>
  block("normal", t, { listItem, level });
export const ul = (items) => items.map((t) => li(t, "bullet"));
export const ol = (items) => items.map((t) => li(t, "number"));
export const cta = (title, description, buttonText = "Ücretsiz Analiz Al", href = "/iletisim") => ({
  _key: key(),
  _type: "ctaBox",
  title,
  description,
  buttonText,
  href,
});

// body: iç içe dizileri düzleştirir (ul/ol dizileri için)
export async function createPost({ slug, title, excerpt, seoTitle, seoDescription, focusKeyword, body, publishedAt }) {
  const existing = await client.fetch(`*[_type=="post" && slug.current==$slug][0]{_id}`, { slug });
  if (existing?._id) {
    console.error(`⚠️  ${slug} zaten var (${existing._id}) — üzerine yazılmadı.`);
    return null;
  }
  const doc = {
    _type: "post",
    title,
    slug: { _type: "slug", current: slug },
    author: "Emrah Tonlak",
    publishedAt: publishedAt || new Date().toISOString(),
    excerpt,
    seoTitle,
    seoDescription,
    seo: { focusKeyword, seoTitle, seoDescription },
    body: body.flat(),
  };
  const res = await client.create(doc);
  console.log(`✅ ${slug} oluşturuldu → ${res._id}`);
  return res;
}
