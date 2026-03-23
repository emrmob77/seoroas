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
  const origin = request.nextUrl.origin;
  const search = request.nextUrl.search;

  if (
    pathname.startsWith("/studio") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const normalized = normalizePath(pathname);
  const redirects = await getRedirects();
  const protectedPaths = new Set(["/seo", "/hizmetler"]);

  function findRedirect(path: string) {
    return redirects.find(
      (r) => normalizePath(r.source) === path && !protectedPaths.has(path)
    );
  }

  // www → non-www (tek 301 ile, trailing slash + Sanity redirect dahil)
  if (host.startsWith("www.")) {
    const nonWww = host.replace(/^www\./, "");
    const match = findRedirect(normalized);
    const finalPath = match?.destination || normalized;
    const dest = finalPath.startsWith("http")
      ? finalPath
      : `${request.nextUrl.protocol}//${nonWww}${finalPath}${search}`;
    return NextResponse.redirect(dest, 301);
  }

  // Sanity redirect kontrolü
  const match = findRedirect(normalized);

  if (match) {
    if (match.statusCode === 410) {
      return new NextResponse("Gone", { status: 410 });
    }
    const destination = match.destination.startsWith("http")
      ? match.destination
      : `${origin}${match.destination}`;
    return NextResponse.redirect(destination, match.statusCode || 301);
  }

  // Trailing slash kaldırma (string URL ile — NextURL.clone() loop'u önler)
  if (normalized !== pathname) {
    return NextResponse.redirect(`${origin}${normalized}${search}`, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
