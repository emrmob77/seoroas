import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "67vl8x07",
  dataset: "production",
  apiVersion: "2024-03-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const redirects = [
  { source: "/blog/kurumsal-seo", destination: "/seo/kurumsal-seo" },
  { source: "/blog/seo-ajansi", destination: "/seo/seo-ajansi" },
  { source: "/blog/seo-danismani", destination: "/seo-danismanligi" },
  { source: "/blog/shopify-seo", destination: "/seo/shopify-seo" },
  { source: "/blog/wordpress-seo", destination: "/seo/wordpress-seo" },
];

async function seed() {
  const tx = client.transaction();

  for (const r of redirects) {
    const id = "redirect-" + r.source.replace(/\//g, "-").replace(/^-/, "");
    tx.createOrReplace({
      _id: id,
      _type: "redirect",
      source: r.source,
      destination: r.destination,
      statusCode: 301,
      isActive: true,
    });
  }

  const result = await tx.commit();
  console.log(`✅ ${redirects.length} redirect oluşturuldu.`);
  console.log(`   Transaction ID: ${result.transactionId}`);
}

seed().catch((err) => {
  console.error("❌ Hata:", err.message);
  process.exit(1);
});
