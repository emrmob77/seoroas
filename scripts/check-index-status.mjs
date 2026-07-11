// Search Console URL Inspection API — sitemap'teki tüm URL'lerin index durumunu raporlar.
// Kullanım:
//   node scripts/check-index-status.mjs              → canlı sitemap'teki tüm URL'ler
//   node scripts/check-index-status.mjs https://...  → sadece verilen URL'ler
// Anahtar: GSC_KEY_FILE env ya da proje kökünde gsc-indexing-key.json (Indexing API ile aynı hesap)

import { readFileSync } from "node:fs";
import { createSign } from "node:crypto";

const KEY_FILE = process.env.GSC_KEY_FILE || new URL("../gsc-indexing-key.json", import.meta.url).pathname;
const SITEMAP_URL = "https://seoroas.com/sitemap.xml";

const key = JSON.parse(readFileSync(KEY_FILE, "utf8"));
const b64url = (obj) => Buffer.from(JSON.stringify(obj)).toString("base64url");

async function getAccessToken(scope) {
  const now = Math.floor(Date.now() / 1000);
  const unsigned =
    b64url({ alg: "RS256", typ: "JWT" }) +
    "." +
    b64url({ iss: key.client_email, scope, aud: "https://oauth2.googleapis.com/token", iat: now, exp: now + 3600 });
  const signature = createSign("RSA-SHA256").update(unsigned).sign(key.private_key, "base64url");
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${unsigned}.${signature}`,
    }),
  });
  const data = await res.json();
  if (!data.access_token) throw new Error(`Token alınamadı: ${JSON.stringify(data)}`);
  return data.access_token;
}

const token = await getAccessToken("https://www.googleapis.com/auth/webmasters.readonly");
const auth = { Authorization: `Bearer ${token}`, "Content-Type": "application/json" };

// Service account'un erişebildiği property'yi bul (sc-domain: mi URL-prefix mi)
const sitesRes = await fetch("https://www.googleapis.com/webmasters/v3/sites", { headers: auth });
const sites = (await sitesRes.json()).siteEntry || [];
const property = sites.find((s) => s.siteUrl.includes("seoroas"))?.siteUrl;
if (!property) {
  console.error("❌ Service account hiçbir seoroas property'sine erişemiyor. Search Console'daki izinleri kontrol et.");
  console.error("   Görünen property'ler:", JSON.stringify(sites));
  process.exit(1);
}
console.log(`Property: ${property}\n`);

let urls = process.argv.slice(2);
if (!urls.length) {
  const xml = await (await fetch(SITEMAP_URL)).text();
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const rows = [];
for (const url of urls) {
  const res = await fetch("https://searchconsole.googleapis.com/v1/urlInspection/index:inspect", {
    method: "POST",
    headers: auth,
    body: JSON.stringify({ inspectionUrl: url, siteUrl: property }),
  });
  const data = await res.json();
  if (!res.ok) {
    rows.push({ url, verdict: "HATA", coverage: data.error?.message || res.status });
    continue;
  }
  const r = data.inspectionResult?.indexStatusResult || {};
  rows.push({
    url,
    verdict: r.verdict || "?",
    coverage: r.coverageState || "?",
    lastCrawl: r.lastCrawlTime ? r.lastCrawlTime.slice(0, 10) : "-",
  });
  process.stderr.write(".");
}
process.stderr.write("\n\n");

const indexed = rows.filter((r) => r.verdict === "PASS");
const notIndexed = rows.filter((r) => r.verdict !== "PASS");

console.log(`✅ INDEX'TE (${indexed.length}):`);
for (const r of indexed) console.log(`   ${r.url}`);

console.log(`\n❌ INDEX'TE DEĞİL (${notIndexed.length}):`);
for (const r of notIndexed) console.log(`   ${r.url}\n      → ${r.coverage} (son tarama: ${r.lastCrawl ?? "-"})`);
