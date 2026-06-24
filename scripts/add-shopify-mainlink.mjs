import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "67vl8x07",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-03-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const NEW_LINK = { title: "Shopify Danışmanlık", url: "/seo/shopify-danismanligi" };

function randomKey() {
  return "k" + Math.random().toString(36).slice(2, 12);
}

async function run() {
  const doc = await client.fetch(`*[_type == "navigation"][0]{ _id, mainLinks }`);
  if (!doc?._id) {
    console.error("❌ navigation dokümanı yok.");
    process.exit(1);
  }
  const links = Array.isArray(doc.mainLinks) ? [...doc.mainLinks] : [];

  if (links.some((l) => l.url === NEW_LINK.url)) {
    console.log("ℹ️  Üst menüde zaten mevcut, değişiklik yok.");
    return;
  }

  // "Danışmanlık" (/seo-danismanligi) linkinden hemen sonra ekle, yoksa başa
  const idx = links.findIndex((l) => l.url === "/seo-danismanligi");
  const insertAt = idx === -1 ? 0 : idx + 1;
  links.splice(insertAt, 0, { _key: randomKey(), ...NEW_LINK });

  await client.patch(doc._id).set({ mainLinks: links }).commit();
  console.log(`✅ "${NEW_LINK.title}" üst menüye eklendi (pozisyon ${insertAt + 1}).`);
  console.log("   Üst menü:", links.map((l) => l.title).join(" | "));
}

run().catch((err) => {
  console.error("❌ Hata:", err.message);
  process.exit(1);
});
