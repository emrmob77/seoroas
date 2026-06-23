import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { generateDynamicSeoMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { getAllPosts } from "@/sanity/queries/posts";
import { urlFor } from "@/sanity/image";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import type { Post } from "@/types";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return generateDynamicSeoMetadata({
    title: "SEO Blog — Güncel Rehberler & Stratejiler",
    description:
      "SEO trendleri, teknik rehberler ve kanıtlanmış organik büyüme stratejileri. Uzman içgörüleri ile dijital pazarlama bilginizi güncel tutun.",
    path: "/blog",
  });
}

const CATEGORY_ORDER = [
  "Teknik SEO",
  "İçerik SEO",
  "E-Ticaret SEO",
  "Link Building",
  "SEO Araçları",
  "Yerel SEO",
  "AI & SEO",
  "Genel SEO",
];

function deriveCategory(post: Post): string {
  const t = `${post.title} ${post.slug?.current ?? ""}`.toLocaleLowerCase("tr");
  if (/(shopify|e-?ticaret|ürün|mağaza|magaza|koleksiyon)/.test(t)) return "E-Ticaret SEO";
  if (/(backlink|link\s?build|link)/.test(t)) return "Link Building";
  if (/(analytics|analitik|search console|tag manager|roas|araç|favicon|pixel)/.test(t)) return "SEO Araçları";
  if (/(yapay zeka|geo|chatgpt|gemini|\bai\b)/.test(t)) return "AI & SEO";
  if (/(işletme|yerel|harita|business|google benim)/.test(t)) return "Yerel SEO";
  if (/(teknik|hız|sitemap|şema|schema|core web|robots|canonical)/.test(t)) return "Teknik SEO";
  if (/(içerik|pazarlama|blog)/.test(t)) return "İçerik SEO";
  return "Genel SEO";
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function PostImage({ post, aspect = "square", priority = false }: { post: Post; aspect?: "wide" | "square"; priority?: boolean }) {
  const aspectClass = aspect === "wide" ? "aspect-[16/9]" : "aspect-square";
  if (post.mainImage) {
    const dim = aspect === "wide" ? { w: 900, h: 506 } : { w: 600, h: 600 };
    const imgUrl = urlFor(post.mainImage).width(dim.w).height(dim.h).format("webp").url();
    return (
      <div className={`${aspectClass} overflow-hidden rounded-xl bg-surface-container-high relative`}>
        <Image
          src={imgUrl}
          alt={post.mainImage.alt || post.title}
          width={dim.w}
          height={dim.h}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          priority={priority}
          sizes={aspect === "wide" ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
        />
      </div>
    );
  }
  return (
    <div className={`${aspectClass} overflow-hidden rounded-xl bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low`} />
  );
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ k?: string }>;
}) {
  const sp = await searchParams;
  const rawPosts = await getAllPosts();

  if (!Array.isArray(rawPosts) || rawPosts.length === 0) {
    return (
      <main className="pt-24 pb-40">
        <section className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-extrabold text-on-surface tight-tracking mb-6">Blog</h1>
          <p className="text-on-surface-variant text-lg">Henüz yazı bulunmuyor. Yakında burada olacak.</p>
        </section>
      </main>
    );
  }

  const posts = rawPosts.map((p) => ({ ...p, category: deriveCategory(p) }));
  const present = new Set(posts.map((p) => p.category));
  const categories = ["Tümü", ...CATEGORY_ORDER.filter((c) => present.has(c))];
  const active = sp?.k && categories.includes(sp.k) ? sp.k : "Tümü";
  const filtered = active === "Tümü" ? posts : posts.filter((p) => p.category === active);

  const featured = filtered[0];
  const secondary = filtered[1];
  const grid = filtered.slice(2);

  return (
    <>
      <SchemaOrg
        schema={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "SEOROAS Blog",
          url: "https://seoroas.com/blog",
          description:
            "SEO dünyasındaki son gelişmeler, uzman rehberleri ve kanıtlanmış stratejiler.",
        }}
      />

      <main className="pt-24">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-5 md:px-8 pt-2 pb-8 md:pb-12">
          <Breadcrumb items={[{ name: "Blog", url: "/blog" }]} />
          <div className="mt-8 md:mt-10 flex flex-col gap-5 max-w-3xl">
            <span className="inline-flex items-center gap-2 self-start bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              İçgörüler &amp; Blog
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-on-surface tracking-[-0.04em] leading-[0.95]">
              SEO Blog: Güncel Bilgi,{" "}
              <span className="text-primary italic">Uzman İçerik.</span>
            </h1>
            <p className="text-base md:text-lg text-on-surface-variant font-light max-w-2xl leading-relaxed">
              SEO trendleri, teknik rehberler ve kanıtlanmış organik büyüme
              stratejileri — uzman içgörüleriyle dijital pazarlama bilginizi
              güncel tutun.
            </p>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-on-surface-variant/60">
              {posts.length} yazı
              {active !== "Tümü" && (
                <span className="text-primary"> · {active} ({filtered.length})</span>
              )}
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="max-w-7xl mx-auto px-5 md:px-8 mb-12 md:mb-20">
          <div className="flex items-center gap-2.5 overflow-x-auto pb-3 border-b border-outline-variant/10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((cat) => {
              const isActive = cat === active;
              const href = cat === "Tümü" ? "/blog" : `/blog?k=${encodeURIComponent(cat)}`;
              return (
                <Link
                  key={cat}
                  href={href}
                  scroll={false}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap border ${
                    isActive
                      ? "bg-primary text-on-primary border-primary shadow-md shadow-primary/20"
                      : "bg-transparent text-on-surface-variant border-outline-variant/20 hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {cat}
                </Link>
              );
            })}
          </div>
        </section>

        {/* Blog Grid */}
        <section className="max-w-7xl mx-auto px-5 md:px-8 mb-20 md:mb-40">
          {/* Featured row: large left + small right */}
          {featured && (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 mb-16 md:mb-24">
              <article className="md:col-span-3 group">
                <Link href={`/blog/${featured.slug.current}`} className="block mb-6">
                  <div className="relative">
                    <PostImage post={featured} aspect="wide" priority />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-primary">
                        Trend
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="flex items-center gap-3 text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-3">
                  <span className="text-primary">{featured.category}</span>
                  <span className="w-1 h-1 bg-outline-variant rounded-full" />
                  <span>{formatDate(featured.publishedAt)}</span>
                </div>
                <Link href={`/blog/${featured.slug.current}`}>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-on-surface tracking-[-0.02em] group-hover:text-primary transition-colors mb-4">
                    {featured.title}
                  </h2>
                </Link>
                <p className="text-on-surface-variant leading-relaxed mb-4 line-clamp-3">
                  {featured.excerpt}
                </p>
                <Link
                  href={`/blog/${featured.slug.current}`}
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest group/link"
                >
                  Okumaya Devam Et
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </article>

              {secondary && (
                <article className="md:col-span-2 group">
                  <Link href={`/blog/${secondary.slug.current}`} className="block mb-6">
                    <PostImage post={secondary} aspect="square" />
                  </Link>
                  <div className="flex items-center gap-3 text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-3">
                    <span className="text-primary">{secondary.category}</span>
                    <span className="w-1 h-1 bg-outline-variant rounded-full" />
                    <span>{formatDate(secondary.publishedAt)}</span>
                  </div>
                  <Link href={`/blog/${secondary.slug.current}`}>
                    <h3 className="text-xl font-bold text-on-surface tracking-[-0.02em] group-hover:text-primary transition-colors mb-3">
                      {secondary.title}
                    </h3>
                  </Link>
                  <p className="text-on-surface-variant leading-relaxed text-sm line-clamp-3">
                    {secondary.excerpt}
                  </p>
                </article>
              )}
            </div>
          )}

          {/* Grid Posts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {grid.map((post) => (
              <article key={post._id} className="group">
                <Link href={`/blog/${post.slug.current}`} className="block mb-5">
                  <PostImage post={post} aspect="square" />
                </Link>
                <div className="flex items-center gap-3 text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-3">
                  <span className="text-primary">{post.category}</span>
                  <span className="w-1 h-1 bg-outline-variant rounded-full" />
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
                <Link href={`/blog/${post.slug.current}`}>
                  <h3 className="text-xl font-bold text-on-surface tracking-[-0.02em] group-hover:text-primary transition-colors mb-3">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-on-surface-variant leading-relaxed text-sm line-clamp-3">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="max-w-7xl mx-auto px-5 md:px-8 mb-20 md:mb-40">
          <div className="bg-on-background rounded-[2rem] p-8 md:p-12 lg:p-20 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
            <div className="flex flex-col gap-5 max-w-lg">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-[-0.02em] leading-tight">
                SEO Dünyasından Haftalık Güncellemeler
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                En yeni SEO trendlerini, algoritma değişikliklerini ve özel
                vaka analizlerini her Salı sabahı kutunuza gönderiyoruz.
              </p>
            </div>
            <div className="w-full max-w-sm">
              <NewsletterForm variant="dark" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
