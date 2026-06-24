import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "67vl8x07",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-03-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const NEW_LINK = {
  title: "Shopify Danışmanlık",
  url: "/seo/shopify-danismanligi",
  icon: "ShoppingCart",
};

function randomKey() {
  return "k" + Math.random().toString(36).slice(2, 12);
}

async function run() {
  const doc = await client.fetch(`*[_type == "navigation"][0]{ _id, megaMenuGroups }`);

  if (!doc?._id) {
    console.error("❌ navigation dokümanı bulunamadı. Sanity Studio'da menü oluşturulmamış olabilir.");
    process.exit(1);
  }

  const groups = Array.isArray(doc.megaMenuGroups) ? doc.megaMenuGroups : [];

  // Zaten ekliyse çık (idempotent)
  const exists = groups.some((g) => (g.links || []).some((l) => l.url === NEW_LINK.url));
  if (exists) {
    console.log("ℹ️  Link zaten menüde mevcut, değişiklik yapılmadı.");
    return;
  }

  // SEO grubunu bul (yoksa Shopify SEO içeren grubu hedefle)
  let targetIndex = groups.findIndex((g) => (g.groupTitle || "").trim().toLowerCase() === "seo");
  if (targetIndex === -1) {
    targetIndex = groups.findIndex((g) => (g.links || []).some((l) => l.url === "/seo/shopify-seo"));
  }
  if (targetIndex === -1) {
    console.error("❌ SEO grubu / Shopify SEO linki bulunamadı. Mevcut gruplar:", groups.map((g) => g.groupTitle));
    process.exit(1);
  }

  const group = groups[targetIndex];
  const links = Array.isArray(group.links) ? [...group.links] : [];

  // Shopify SEO'dan hemen sonra ekle (yoksa sona)
  const shopifySeoIdx = links.findIndex((l) => l.url === "/seo/shopify-seo");
  const insertAt = shopifySeoIdx === -1 ? links.length : shopifySeoIdx + 1;
  links.splice(insertAt, 0, { _key: randomKey(), ...NEW_LINK });

  const newGroups = [...groups];
  newGroups[targetIndex] = { ...group, links };

  await client.patch(doc._id).set({ megaMenuGroups: newGroups }).commit();

  console.log(`✅ "${NEW_LINK.title}" linki "${group.groupTitle}" grubuna eklendi (pozisyon ${insertAt}).`);
  console.log("   Doc:", doc._id);
}

run().catch((err) => {
  console.error("❌ Hata:", err.message);
  process.exit(1);
});
