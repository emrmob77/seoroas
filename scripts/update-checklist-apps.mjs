import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "67vl8x07",
  dataset: "production",
  apiVersion: "2024-03-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

function setText(b, text) {
  return { ...b, children: [{ ...b.children[0], text }] };
}

// ---------- 1) shopify-seo-checklist ----------
{
  const post = await client.fetch(
    `*[_type=="post" && slug.current=="shopify-seo-checklist"][0]{_id, body}`
  );
  const introNew =
    "Bir Shopify mağazasının SEO'sunu baştan sona kontrol etmek istiyorsan, dağınık tavsiyeler yerine net bir liste şart. Ama gerçek hayatta en çok hangi adımlar atlanıyor ve neden can yakıyor? İşte 2026 için güncellenmiş Shopify SEO checklist'imiz; Reddit ve X'teki mağaza sahiplerinin yaşadığı acılardan ders alarak hazırladık.";

  // h2-oncelik + p5 (erken, tekrarlı "Hangi Adımdan Başlamalı" bölümü) çıkarılır;
  // h2-basla + p7 (CTA öncesi kapanış) korunur.
  const REMOVE = new Set(["h2-oncelik", "p5"]);
  const out = post.body
    .filter((b) => !REMOVE.has(b._key))
    .map((b) => (b._key === "intro" ? setText(b, introNew) : b));

  if (post.body.some((b) => REMOVE.has(b._key))) {
    await client.patch(post._id).set({ body: out }).commit();
    console.log(`✅ checklist: odak kelime eklendi + tekrarlı bölüm silindi (${post.body.length} → ${out.length} blok)`);
  } else {
    console.log("ℹ️ checklist: tekrarlı bölüm zaten yok; sadece intro kontrol edildi.");
    await client.patch(post._id).set({ body: out }).commit();
  }
}

// ---------- 2) shopify-seo-uygulamalari ----------
{
  const post = await client.fetch(
    `*[_type=="post" && slug.current=="shopify-seo-uygulamalari"][0]{_id, body}`
  );
  const s252New =
    "Shopify App Store'da yüzlerce SEO uygulaması var ve hepsi \"mağazanızı 1 numaraya taşıyacağını\" iddia ediyor. Gerçek şu: doğru uygulama belirli işleri kolaylaştırır, yanlış veya fazla uygulama ise mağazanızı yavaşlatıp zarar verebilir. Bu yazıda en iyi Shopify SEO uygulamalarını, hangi tür araçların gerçekten işe yaradığını ve mağazanıza uygun olanı nasıl seçeceğinizi anlatıyoruz.";

  const cur = post.body.find((b) => b._key === "s252");
  if (cur && (cur.children || []).map((c) => c.text).join("").toLowerCase().includes("en iyi shopify seo uygulamalar")) {
    console.log("ℹ️ uygulamalari: odak kelime zaten girişte.");
  } else {
    const out = post.body.map((b) => (b._key === "s252" ? setText(b, s252New) : b));
    await client.patch(post._id).set({ body: out }).commit();
    console.log("✅ uygulamalari: odak kelime 'Shopify SEO uygulamaları' giriş paragrafına eklendi.");
  }
}
