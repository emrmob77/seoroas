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

const post = await client.fetch(`*[_type=="post" && slug.current=="seo-nasil-yapilir"][0]{_id, body}`);
let out = post.body.map((b) => {
  if (b._key === "k0") {
    return { ...b,
      markDefs: [{ _key: "sy1", _type: "link", href: "/blog/seo-nedir" }],
      children: [
        { _key: "k0a", _type: "span", marks: [], text: "SEO nasıl yapılır? Kısa cevap: doğru anahtar kelimeyi seç, sayfanı teknik ve içerik olarak ona göre kur, sonra otorite (backlink) ve ölçümle büyüt. Ama sıra önemli; yanlış sırayla başlarsan emeğin boşa gider. Bu rehberde SEO'yu adım adım, hangi işin önce geldiğini de göstererek anlatıyoruz. Temel kavramlar için önce " },
        { _key: "k0b", _type: "span", marks: ["sy1"], text: "SEO nedir" },
        { _key: "k0c", _type: "span", marks: [], text: " yazımıza göz atabilirsin." },
      ],
    };
  }
  // "günümüzde" (AVOID) düzeltmesi + mobile-first vurgusu
  if (b._key === "ko") {
    return { ...b, markDefs: [], children: [{ _key: "kos", _type: "span", marks: [], text: "Mobil uyumlu tasarım, sitenin telefon ve tablette sorunsuz açılması demektir. Mobil kullanım masaüstünü çoktan geçtiği için bu artık tercih değil, zorunluluk; üstelik Google sıralamayı çoğunlukla mobil sürüme göre yapıyor (mobile-first). Mobil uyumu zayıf bir site, üst sıraları daha baştan kaybeder." }] };
  }
  return b;
});
out = linkifyFirst(out, "Teknik SEO", "/seo/teknik-seo", "sytek");
out = linkifyFirst(out, "Backlink", "/blog/backlink-nedir-seo-icin-onemi-ve-nasil-yapilir", "sybl");

await client.patch(post._id).set({ body: out, "seo.focusKeyword": "seo nasıl yapılır", "seo.seoTitle": "SEO Nasıl Yapılır? Adım Adım Başlangıç Rehberi" }).commit();
console.log("✅ seo-nasil-yapilir: hook + odak kelime, 'günümüzde' düzeltildi, 3 iç link, meta set.");
