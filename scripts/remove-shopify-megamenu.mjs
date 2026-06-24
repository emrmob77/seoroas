import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "67vl8x07",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-03-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const TARGET_URL = "/seo/shopify-danismanligi";

async function run() {
  const doc = await client.fetch(`*[_type == "navigation"][0]{ _id, megaMenuGroups }`);
  if (!doc?._id) {
    console.error("❌ navigation dokümanı yok.");
    process.exit(1);
  }

  const groups = (doc.megaMenuGroups || []).map((g) => ({
    ...g,
    links: (g.links || []).filter((l) => l.url !== TARGET_URL),
  }));

  await client.patch(doc._id).set({ megaMenuGroups: groups }).commit();
  console.log(`✅ "${TARGET_URL}" mega menüden (Çözümler) kaldırıldı.`);
  const seo = groups.find((g) => (g.groupTitle || "").toLowerCase() === "seo");
  console.log("   SEO grubu:", (seo?.links || []).map((l) => l.title).join(" | "));
}

run().catch((err) => {
  console.error("❌ Hata:", err.message);
  process.exit(1);
});
