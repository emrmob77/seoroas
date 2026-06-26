import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "67vl8x07", dataset: "production", apiVersion: "2024-03-01",
  token: process.env.SANITY_API_TOKEN, useCdn: false,
});

// İlk eşleşen NORMAL blokta needle'ı linke çevirir (tek sefer)
function linkifyFirst(blocks, needle, href, markKey) {
  let done = false;
  return blocks.map((b) => {
    if (done || b._type !== "block" || b.style !== "normal") return b;
    const text = (b.children || []).map((c) => c.text).join("");
    const idx = text.indexOf(needle);
    if (idx === -1) return b;
    done = true;
    const before = text.slice(0, idx), after = text.slice(idx + needle.length);
    const children = [];
    if (before) children.push({ _key: b._key + "x", _type: "span", marks: [], text: before });
    children.push({ _key: b._key + "y", _type: "span", marks: [markKey], text: needle });
    if (after) children.push({ _key: b._key + "z", _type: "span", marks: [], text: after });
    return { ...b, markDefs: [...(b.markDefs || []), { _key: markKey, _type: "link", href }], children };
  });
}

const post = await client.fetch(`*[_type=="post" && slug.current=="seo-nedir"][0]{_id, body}`);
if (!post?._id) { console.error("Post yok"); process.exit(1); }

let out = post.body.map((b) => {
  if (b._key !== "k2") return b;
  return {
    ...b,
    markDefs: [
      { _key: "sn1", _type: "link", href: "/seo/teknik-seo" },
      { _key: "sn2", _type: "link", href: "/seo/on-page-seo" },
      { _key: "sn3", _type: "link", href: "/seo/link-building" },
    ],
    children: [
      { _key: "k2a", _type: "span", marks: [], text: "\"SEO nedir?\" sorusunun kısa cevabı: arama motoru optimizasyonu, yani sitenin Google'da üst sıralara çıkması için yapılan teknik ve içerik çalışmalarının tamamı. Asıl mesele şu: ilk sayfaya çıkamayan bir site müşterisini ancak reklamla bulabilir; organik sıralama ise bir kez kazanıldığında aylarca ücretsiz trafik getirir. SEO üç ayak üzerinde durur: " },
      { _key: "k2b", _type: "span", marks: ["sn1"], text: "teknik SEO" },
      { _key: "k2c", _type: "span", marks: [], text: ", " },
      { _key: "k2d", _type: "span", marks: ["sn2"], text: "on-page (içerik) SEO" },
      { _key: "k2e", _type: "span", marks: [], text: " ve " },
      { _key: "k2f", _type: "span", marks: ["sn3"], text: "link building" },
      { _key: "k2g", _type: "span", marks: [], text: ". Bu rehberde her birini sırayla, örneklerle açıklıyoruz." },
    ],
  };
});

// Derin link: backlink bölümünde "backlink" -> blog/backlink-nedir
out = linkifyFirst(out, "backlink", "/blog/backlink-nedir-seo-icin-onemi-ve-nasil-yapilir", "snbl");

await client.patch(post._id).set({
  body: out,
  "seo.focusKeyword": "seo nedir",
  "seo.seoTitle": "SEO Nedir? Nasıl Çalışır ve Neden Önemli?",
}).commit();

console.log("✅ seo-nedir: hook giriş + odak kelime + 4 iç link (teknik/on-page/link-building/backlink), meta set.");
