import { NextRequest, NextResponse } from "next/server";

interface RedirectEntry {
  source: string;
  destination: string;
  statusCode: number;
}

let cachedRedirects: RedirectEntry[] | null = null;
let cacheTimestamp = 0;
const CACHE_TTL = 5 * 60 * 1000;

async function getRedirects(): Promise<RedirectEntry[]> {
  const now = Date.now();
  if (cachedRedirects && now - cacheTimestamp < CACHE_TTL) {
    return cachedRedirects;
  }

  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

  if (!projectId || !/^[a-z0-9-]+$/.test(projectId)) {
    return [];
  }

  try {
    const query = encodeURIComponent(
      '*[_type == "redirect" && isActive == true]{ source, destination, statusCode }'
    );
    const url = `https://${projectId}.api.sanity.io/v2024-03-01/data/query/${dataset}?query=${query}`;

    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) return cachedRedirects || [];

    const data = await res.json();
    cachedRedirects = (data.result || []) as RedirectEntry[];
    cacheTimestamp = now;
    return cachedRedirects;
  } catch {
    return cachedRedirects || [];
  }
}

function normalizePath(path: string): string {
  if (path === "/") return "/";
  return path.replace(/\/+$/, "");
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const host = request.headers.get("host") || "";

  if (
    pathname.startsWith("/studio") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // www → non-www (tek 301 ile)
  if (host.startsWith("www.")) {
    const nonWww = host.replace(/^www\./, "");
    const normalized = normalizePath(pathname);
    const redirects = await getRedirects();
    const existingPages = new Set(["/seo", "/hizmetler"]);
    const match = redirects.find(
      (r) => normalizePath(r.source) === normalized && !existingPages.has(normalized)
    );
    const finalPath = match ? match.destination : normalized;
    const dest = finalPath.startsWith("http")
      ? finalPath
      : `${request.nextUrl.protocol}//${nonWww}${finalPath}`;
    return NextResponse.redirect(dest, 301);
  }

  const normalized = normalizePath(pathname);

  // Trailing slash + Sanity redirect'i tek adımda çöz
  const redirects = await getRedirects();
  const existingPages = new Set(["/seo", "/hizmetler"]);
  const match = redirects.find(
    (r) => normalizePath(r.source) === normalized && !existingPages.has(normalized)
  );

  if (match) {
    if (match.statusCode === 410) {
      return new NextResponse("Gone", { status: 410 });
    }

    const destination = match.destination.startsWith("http")
      ? match.destination
      : `${request.nextUrl.origin}${match.destination}`;

    return NextResponse.redirect(destination, match.statusCode || 301);
  }

  // Sadece trailing slash kaldırma (Sanity redirect yoksa)
  if (normalized !== pathname) {
    const url = request.nextUrl.clone();
    url.pathname = normalized;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
