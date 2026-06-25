import { createClient } from "@sanity/client";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const client = createClient({
  projectId: "67vl8x07",
  dataset: "production",
  apiVersion: "2024-03-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const routes = new Set(["/"]);
function walk(d, b) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (!e.isDirectory()) continue;
    const n = e.name;
    if (["api", "studio"].includes(n) || n.startsWith("_")) continue;
    const p = path.join(d, n);
    const route = (b + "/" + n).replace(/\/+/g, "/");
    if (fs.existsSync(path.join(p, "page.tsx")) && !n.startsWith("[")) routes.add(route);
    walk(p, route);
  }
}
walk("src/app", "");

const slugs = await client.fetch(`*[_type=="post"].slug.current`);
for (const s of slugs) if (s) routes.add("/blog/" + s);

const reds = await client.fetch(`*[_type=="redirect" && isActive==true].source`);
for (const s of reds) if (s) routes.add(s.replace(/\/$/, ""));

const valid = new Set([...routes].map((r) => r.replace(/\/$/, "") || "/"));

// Tüm iç-path string literalleri ("/..."), hem href="..." hem href: "..." hem dizi verileri
const raw = execSync(`grep -rhoE '"/[a-zA-Z0-9/_-]+"' src/`).toString();
const IGNORE_PREFIX = ["/_next", "/api", "/studio", "/images", "/fonts"];
const refsMap = new Map();
for (const l of raw.split("\n")) {
  const m = l.match(/"(\/[a-zA-Z0-9/_-]+)"/);
  if (!m) continue;
  const r = m[1].replace(/\/$/, "") || "/";
  if (IGNORE_PREFIX.some((p) => r.startsWith(p))) continue;
  // sadece gerçek route benzeri (en az bir segment)
  if (!/^\/[a-z]/.test(r)) continue;
  refsMap.set(r, (refsMap.get(r) || 0) + 1);
}

const broken = [...refsMap.keys()]
  .filter((r) => r !== "/" && !valid.has(r))
  .sort();

console.log("Geçerli hedef (route+slug+redirect):", valid.size);
console.log("Benzersiz iç link:", refsMap.size);
console.log("\n🔴 KIRIK İÇ LİNKLER (hedefi yok → 404):");
if (!broken.length) console.log("  (yok)");
for (const b of broken) console.log(`  ${b}   (${refsMap.get(b)} yerde)`);

// hangi dosyalarda geçtiğini de göster
if (broken.length) {
  console.log("\n   Nerede geçiyor:");
  for (const b of broken) {
    try {
      const where = execSync(`grep -rln 'href="${b}"' src/ | sed 's#src/##'`).toString().trim().split("\n");
      console.log(`   ${b}: ${where.join(", ")}`);
    } catch {}
  }
}
