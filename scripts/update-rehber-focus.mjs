import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "67vl8x07",
  dataset: "production",
  apiVersion: "2024-03-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const NEW_K2 =
  "Shopify, mağaza açmayı kolaylaştırır; ama mağazanızı Google'da görünür kılmak tamamen size kalmıştır. Tema kurar, ürünleri girer ve yayına alırsınız; fakat aramalarda rakipleriniz üstte çıkıyorsa, sorun ürününüzde değil, mağazanızın arama motorlarına verdiği sinyallerdedir. Bu Shopify SEO rehberi, bir mağazayı sıfırdan organik trafiğe ve satışa taşıyan adımların tamamını gerçek örnekler ve platforma özgü ayrıntılarla anlatıyor.";

const post = await client.fetch(
  `*[_type=="post" && slug.current=="shopify-seo-rehberi"][0]{_id, body}`
);
if (!post?._id) {
  console.error("Post yok");
  process.exit(1);
}

const k2 = post.body.find((b) => b._key === "k2");
if (k2 && (k2.children || []).map((c) => c.text).join("").toLowerCase().includes("bu shopify seo rehberi")) {
  console.log("ℹ️ Odak kelime zaten girişte. Çıkılıyor.");
  process.exit(0);
}

const out = post.body.map((b) =>
  b._key === "k2"
    ? { ...b, children: [{ ...b.children[0], text: NEW_K2 }] }
    : b
);

await client.patch(post._id).set({ body: out }).commit();
console.log("✅ Odak kelime 'Shopify SEO rehberi' giriş paragrafına (k2) eklendi.");
