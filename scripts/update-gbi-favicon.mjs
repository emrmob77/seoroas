import { createClient } from "@sanity/client";
const client = createClient({ projectId: "67vl8x07", dataset: "production", apiVersion: "2024-03-01", token: process.env.SANITY_API_TOKEN, useCdn: false });

// ---------- google-benim-isletmem-rehberi ----------
{
  const post = await client.fetch(`*[_type=="post" && slug.current=="google-benim-isletmem-rehberi"][0]{_id, body}`);
  const out = post.body.map((b) => b._key === "k0" ? ({
    ...b,
    markDefs: [{ _key: "gbi1", _type: "link", href: "/seo/lokal-seo" }],
    children: [
      { _key: "k0a", _type: "span", marks: [], text: "Telefonuna \"yakınımdaki [meslek]\" yazıp arayanlar senin işletmeni mi yoksa rakibini mi görüyor? Google Benim İşletmem (yeni adıyla Google İşletme Profili), Google Arama ve Haritalar'da ücretsiz görünmeni sağlayan profildir; yerel müşteri kazanmanın en hızlı yolu. Bu rehberde profili sıfırdan oluşturmayı, doğrulamayı ve üst sıraya taşıyacak şekilde optimize etmeyi adım adım anlatıyoruz. Profili güçlü bir " },
      { _key: "k0b", _type: "span", marks: ["gbi1"], text: "lokal SEO" },
      { _key: "k0c", _type: "span", marks: [], text: " çalışmasıyla birleştirince etkisi katlanır." },
    ],
  }) : b);
  await client.patch(post._id).set({ body: out, "seo.focusKeyword": "google benim işletmem", "seo.seoTitle": "Google Benim İşletmem: Profil Oluşturma ve Optimize Etme" }).commit();
  console.log("✅ google-benim-isletmem: hook + odak kelime + 'günümüz' fix + lokal-seo linki, meta set.");
}

// ---------- favicon-nedir ----------
{
  const post = await client.fetch(`*[_type=="post" && slug.current=="favicon-nedir"][0]{_id, body}`);
  const out = post.body.map((b) => {
    if (b._key === "k0") {
      return {
        ...b,
        markDefs: [{ _key: "fav1", _type: "link", href: "/seo/teknik-seo" }],
        children: [
          { _key: "k0a", _type: "span", marks: [], text: "Favicon nedir? Tarayıcı sekmesinde, yer imlerinde ve arama sonuçlarında sitenin yanında beliren o minik ikon. Küçük görünür ama işi büyük: 20 sekme açık bir kullanıcı seni logondan tanıyıp geri döner. Bu yazıda faviconun ne olduğunu, neden önemli olduğunu, doğru boyutunu ve siteye nasıl ekleneceğini anlatıyoruz. Çoğu zaman atlanır ama favicon, sağlam bir " },
          { _key: "k0b", _type: "span", marks: ["fav1"], text: "teknik SEO" },
          { _key: "k0c", _type: "span", marks: [], text: "'nun küçük ama anlamlı parçalarından biridir." },
        ],
      };
    }
    // ki: "günümüz" AVOID temizliği (boyut bölümü)
    if (b._key === "ki") {
      const text = (b.children || []).map((c) => c.text).join("").replace(/günümüzde/gi, "bugün").replace(/günümüz/gi, "bugünün");
      return { ...b, markDefs: [], children: [{ _key: "kis", _type: "span", marks: [], text }] };
    }
    return b;
  });
  await client.patch(post._id).set({ body: out, "seo.focusKeyword": "favicon nedir", "seo.seoTitle": "Favicon Nedir? Boyutu ve Siteye Nasıl Eklenir?" }).commit();
  console.log("✅ favicon-nedir: hook + odak kelime + 'günümüz' fix + teknik-seo linki, meta set.");
}
