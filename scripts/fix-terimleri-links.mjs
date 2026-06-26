import { createClient } from "@sanity/client";
const client = createClient({ projectId: "67vl8x07", dataset: "production", apiVersion: "2024-03-01", token: process.env.SANITY_API_TOKEN, useCdn: false });

// h2 başlığındaki `needle`yi linke çevirir (başlık-içi link)
function linkHeading(b, needle, href, markKey) {
  const text = (b.children || []).map((c) => c.text).join("");
  const idx = text.indexOf(needle);
  if (idx === -1) return b;
  const before = text.slice(0, idx), after = text.slice(idx + needle.length);
  const children = [];
  if (before) children.push({ _key: b._key + "a", _type: "span", marks: [], text: before });
  children.push({ _key: b._key + "b", _type: "span", marks: [markKey], text: needle });
  if (after) children.push({ _key: b._key + "c", _type: "span", marks: [], text: after });
  return { ...b, markDefs: [{ _key: markKey, _type: "link", href }], children };
}

const map = {
  kq: ["Backlink", "/blog/backlink-nedir-seo-icin-onemi-ve-nasil-yapilir", "tlbl"],   // h2 "Backlink (Geri Bağlantı)"
  k1q: ["Google Analytics", "/blog/google-analytics-nedir", "tlga"],                  // h2 "Google Analytics"
  k1u: ["Google Search Console", "/blog/search-console-nedir", "tlgsc"],              // h2 "Google Search Console"
};

const post = await client.fetch(`*[_type=="post" && slug.current=="seo-terimleri"][0]{_id, body}`);
const out = post.body.map((b) => map[b._key] ? linkHeading(b, ...map[b._key]) : b);
await client.patch(post._id).set({ body: out }).commit();
const nl = out.reduce((a, b) => a + ((b.markDefs || []).length), 0);
console.log(`✅ seo-terimleri: ${nl} başlık-içi iç link eklendi (Backlink/GA/GSC → tam yazılar).`);
