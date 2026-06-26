import { createClient } from "@sanity/client";
const client = createClient({ projectId: "67vl8x07", dataset: "production", apiVersion: "2024-03-01", token: process.env.SANITY_API_TOKEN, useCdn: false });

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

// ---------- icerik-pazarlamasi-nedir ----------
{
  const post = await client.fetch(`*[_type=="post" && slug.current=="icerik-pazarlamasi-nedir"][0]{_id, body}`);
  const out = post.body.map((b) => b._key === "k0" ? ({
    ...b,
    markDefs: [{ _key: "ip1", _type: "link", href: "/seo/icerik-seo" }, { _key: "ip2", _type: "link", href: "/blog/seo-nedir" }],
    children: [
      { _key: "k0a", _type: "span", marks: [], text: "İçerik pazarlaması nedir? En yalın haliyle: ürününü doğrudan satmaya çalışmak yerine, müşterinin işine yarayan içerik üretip güvenini kazanmak. Reklam \"bizden al\" der; içerik pazarlaması \"şu sorununu şöyle çöz\" der ve satış kendiliğinden gelir. Bu yazıda içerik pazarlamasının ne olduğunu, neden işe yaradığını ve nasıl yapıldığını anlatıyoruz. SEO tarafıyla nasıl birleştiğini " },
      { _key: "k0b", _type: "span", marks: ["ip1"], text: "içerik SEO" },
      { _key: "k0c", _type: "span", marks: [], text: " hizmetimizde, temel kavramları ise " },
      { _key: "k0d", _type: "span", marks: ["ip2"], text: "SEO nedir" },
      { _key: "k0e", _type: "span", marks: [], text: " yazımızda bulabilirsin." },
    ],
  }) : b);
  await client.patch(post._id).set({ body: out, "seo.focusKeyword": "içerik pazarlaması nedir", "seo.seoTitle": "İçerik Pazarlaması Nedir? Faydaları ve Nasıl Yapılır" }).commit();
  console.log("✅ icerik-pazarlamasi-nedir: hook + odak kelime + 2 iç link, meta set.");
}

// ---------- seo-terimleri ----------
{
  const post = await client.fetch(`*[_type=="post" && slug.current=="seo-terimleri"][0]{_id, body}`);
  let out = post.body.map((b) => b._key === "k0" ? ({
    ...b, markDefs: [], children: [{ _key: "k0s", _type: "span", marks: [], text: "SEO öğrenirken karşına çıkan terimler ilk başta yabancı gelebilir. Bu SEO terimleri sözlüğünde en sık kullanılan kavramları sade tanımlar ve örneklerle topladık; bir kelimeyi anlamadığında buraya dönebilirsin." }] }) : b);
  // Sözlük terimlerini ilgili tam yazılara linkle (küme içi linkleme)
  out = linkifyFirst(out, "Backlink", "/blog/backlink-nedir-seo-icin-onemi-ve-nasil-yapilir", "stbl");
  out = linkifyFirst(out, "Google Analytics", "/blog/google-analytics-nedir", "stga");
  out = linkifyFirst(out, "Google Search Console", "/blog/search-console-nedir", "stgsc");
  await client.patch(post._id).set({ body: out, "seo.focusKeyword": "seo terimleri", "seo.seoTitle": "SEO Terimleri Sözlüğü: Temel Kavramlar ve Anlamları" }).commit();
  console.log("✅ seo-terimleri: giriş + odak kelime + 3 iç link (backlink/GA/GSC), meta set.");
}
