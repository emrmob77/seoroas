// Google Indexing API — URL bildirimi gönderir (URL_UPDATED).
// Kullanım:
//   node scripts/request-indexing.mjs                        → 5 yeni blog yazısını bildirir
//   node scripts/request-indexing.mjs https://... https://...→ verilen URL'leri bildirir
// Anahtar: GSC_KEY_FILE env değişkeni ya da proje kökünde gsc-indexing-key.json
// Not: Service account e-postası Search Console'da property'ye SAHİP (Owner) olarak ekli olmalı.

import { readFileSync } from "node:fs";
import { createSign } from "node:crypto";

const KEY_FILE = process.env.GSC_KEY_FILE || new URL("../gsc-indexing-key.json", import.meta.url).pathname;

const DEFAULT_URLS = [
  "https://seoroas.com/blog/perplexity-nedir",
  "https://seoroas.com/blog/anahtar-kelime-arastirmasi-nasil-yapilir",
  "https://seoroas.com/blog/seo-analizi-nasil-yapilir",
  "https://seoroas.com/blog/sem-nedir",
  "https://seoroas.com/blog/google-ads-nedir",
];

const urls = process.argv.slice(2).length ? process.argv.slice(2) : DEFAULT_URLS;

let key;
try {
  key = JSON.parse(readFileSync(KEY_FILE, "utf8"));
} catch {
  console.error(`❌ Anahtar dosyası okunamadı: ${KEY_FILE}`);
  console.error("   JSON key'i bu yola koy ya da GSC_KEY_FILE env değişkenini ayarla.");
  process.exit(1);
}

const b64url = (obj) => Buffer.from(JSON.stringify(obj)).toString("base64url");

async function getAccessToken() {
  const now = Math.floor(Date.now() / 1000);
  const unsigned =
    b64url({ alg: "RS256", typ: "JWT" }) +
    "." +
    b64url({
      iss: key.client_email,
      scope: "https://www.googleapis.com/auth/indexing",
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    });
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
  if (!data.access_token) {
    console.error("❌ Token alınamadı:", JSON.stringify(data));
    process.exit(1);
  }
  return data.access_token;
}

const token = await getAccessToken();
let ok = 0;

for (const url of urls) {
  const res = await fetch("https://indexing.googleapis.com/v3/urlNotifications:publish", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ url, type: "URL_UPDATED" }),
  });
  const data = await res.json();
  if (res.ok) {
    ok++;
    console.log(`✅ ${url}`);
  } else {
    console.error(`❌ ${url} → ${res.status}: ${data.error?.message || JSON.stringify(data)}`);
  }
}

console.log(`\n${ok}/${urls.length} bildirim gönderildi.`);
