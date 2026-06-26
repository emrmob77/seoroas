import { createClient } from "@sanity/client";
const client = createClient({ projectId: "67vl8x07", dataset: "production", apiVersion: "2024-03-01", token: process.env.SANITY_API_TOKEN, useCdn: false });

// İlk eşleşen normal blokta needle'lardan birini linke çevirir (tek sefer)
function linkifyOne(blocks, needles, href, markKey) {
  let done = false;
  return blocks.map((b) => {
    if (done || b._type !== "block" || b.style !== "normal") return b;
    const text = (b.children || []).map((c) => c.text).join("");
    const needle = needles.find((n) => text.includes(n));
    if (!needle) return b;
    const idx = text.indexOf(needle);
    done = true;
    const before = text.slice(0, idx), after = text.slice(idx + needle.length);
    const children = [];
    if (before) children.push({ _key: b._key + "p", _type: "span", marks: [], text: before });
    children.push({ _key: b._key + "q", _type: "span", marks: [markKey], text: needle });
    if (after) children.push({ _key: b._key + "r", _type: "span", marks: [], text: after });
    return { ...b, markDefs: [...(b.markDefs || []), { _key: markKey, _type: "link", href }], children };
  });
}

const targets = {
  "shopify-hiz-optimizasyonu": [
    [["Shopify SEO", "Shopify mağaza", "Shopify"], "/seo/shopify-seo", "shl1"],
    [["Core Web Vitals", "teknik"], "/blog/shopify-seo-rehberi", "shl2"],
  ],
  "shopify-seo-ayarlari": [
    [["Shopify SEO", "Shopify"], "/seo/shopify-seo", "shl1"],
    [["Search Console", "sitemap"], "/blog/search-console-nedir", "shl2"],
  ],
  "shopify-seo-checklist": [
    [["Shopify SEO", "Shopify"], "/seo/shopify-seo", "shl1"],
    [["backlink", "Backlink"], "/blog/backlink-nedir-seo-icin-onemi-ve-nasil-yapilir", "shl2"],
  ],
};

for (const [slug, links] of Object.entries(targets)) {
  const post = await client.fetch(`*[_type=="post" && slug.current==$s][0]{_id, body}`, { s: slug });
  let out = post.body;
  for (const [needles, href, mk] of links) out = linkifyOne(out, needles, href, mk);
  const nl = out.reduce((a, b) => a + ((b.markDefs || []).length), 0);
  await client.patch(post._id).set({ body: out }).commit();
  console.log(`✅ ${slug}: ${nl} iç link`);
}
