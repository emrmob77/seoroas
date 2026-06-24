import { createClient } from "@sanity/client";
import "dotenv/config";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "67vl8x07",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-03-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const slug = "shopify-hiz-optimizasyonu";

const query = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  _rev,
  title,
  slug,
  publishedAt,
  excerpt,
  body,
  keyPainPoints,
  appAudit,
  themeAdvice,
  commonMistakes,
  realResults,
  measurementNote
}`;

try {
  const doc = await client.fetch(query, { slug });
  if (doc) {
    console.log("✅ Post bulundu:", doc.title);
    console.log("ID:", doc._id);
    console.log("Rev:", doc._rev);
    console.log("\n--- Excerpt ---");
    console.log(doc.excerpt);
    console.log("\n--- Body blocks:", doc.body?.length || 0);
    if (doc.body?.[0]) {
      console.log("First block sample:", JSON.stringify(doc.body[0]).slice(0, 200));
    }
    console.log("\n--- Structured fields ---");
    console.log("keyPainPoints:", JSON.stringify(doc.keyPainPoints, null, 2));
    console.log("appAudit:", JSON.stringify(doc.appAudit, null, 2));
    console.log("themeAdvice:", JSON.stringify(doc.themeAdvice, null, 2));
    console.log("commonMistakes:", JSON.stringify(doc.commonMistakes, null, 2));
    console.log("realResults:", JSON.stringify(doc.realResults, null, 2));
    console.log("measurementNote:", doc.measurementNote);
  } else {
    console.log("❌ Post bulunamadı");
  }
} catch (err) {
  console.error("Hata:", err);
}
