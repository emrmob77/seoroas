import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "67vl8x07", dataset: "production", apiVersion: "2024-03-01",
  token: process.env.SANITY_API_TOKEN, useCdn: false,
});

// Bir blok metnindeki `needle`yi link span'i yaparak yeniden kurar
function linkify(b, needle, href, markKey) {
  const text = (b.children || []).map((c) => c.text).join("");
  const idx = text.indexOf(needle);
  if (idx === -1) return b;
  const before = text.slice(0, idx);
  const after = text.slice(idx + needle.length);
  const children = [];
  if (before) children.push({ _key: b._key + "a", _type: "span", marks: [], text: before });
  children.push({ _key: b._key + "b", _type: "span", marks: [markKey], text: needle });
  if (after) children.push({ _key: b._key + "c", _type: "span", marks: [], text: after });
  return { ...b, markDefs: [{ _key: markKey, _type: "link", href }], children };
}

const post = await client.fetch(`*[_type=="post" && slug.current=="google-analytics-4-kurulum-rehberi"][0]{_id, body}`);
if (!post?._id) { console.error("Post yok"); process.exit(1); }

const out = post.body.map((b) => {
  // Giriş: hook + odak kelime + ic link
  if (b._key === "k2") {
    return {
      ...b,
      markDefs: [{ _key: "k2lnk", _type: "link", href: "/blog/google-analytics-nedir" }],
      children: [
        { _key: "k2a", _type: "span", marks: [], text: "GA4'ü kurmadan geçen her gün, geri gelmeyen veri demektir: kim nereden geldi, ne satın aldı, hangi reklam işe yaradı — hepsi kayıt dışı kalır. Bu Google Analytics 4 kurulum rehberinde, hesabı sıfırdan açmaktan etkinlik (event) takibine kadar her adımı sırayla gösteriyoruz. GA4'ün ne olduğunu merak ediyorsan önce " },
        { _key: "k2b", _type: "span", marks: ["k2lnk"], text: "Google Analytics nedir" },
        { _key: "k2c", _type: "span", marks: [], text: " yazımıza göz atabilirsin." },
      ],
    };
  }
  // "iki yol" paragrafinda Google Tag Manager -> hizmet sayfasi linki
  if (b._key === "k17") return linkify(b, "Google Tag Manager", "/hizmetler/google-tag-manager", "k17lnk");
  // CTA blockquote'lari (ust/alt) -> "Teklif AL" iletisim linki
  if (b._key === "k0") return linkify(b, "Teklif AL", "/iletisim", "k0lnk");
  if (b._key === "k40") return linkify(b, "Teklif AL", "/iletisim", "k40lnk");
  return b;
});

await client.patch(post._id).set({
  body: out,
  "seo.focusKeyword": "google analytics 4 kurulum",
  "seo.seoTitle": "Google Analytics 4 Kurulumu: Adım Adım Rehber",
}).commit();

console.log("✅ ga4-kurulum: giriş(hook+odak), GTM + GA-nedir + iletişim (x2) iç linkleri, meta set.");
