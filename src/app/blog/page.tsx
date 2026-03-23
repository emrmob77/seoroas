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

const categories = [
  "Tümü",
  "Teknik SEO",
  "İçerik SEO",
  "E-Ticaret SEO",
  "Link Building",
  "SEO Araçları",
  "Yerel SEO",
  "AI & SEO",
];


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

export default async function BlogPage() {
  const posts = await getAllPosts();

  if (!Array.isArray(posts) || posts.length === 0) {
    return (
      <main className="pt-24 pb-40">
        <section className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-extrabold text-on-surface tight-tracking mb-6">Blog</h1>
          <p className="text-on-surface-variant text-lg">Henüz yazı bulunmuyor. Yakında burada olacak.</p>
        </section>
      </main>
    );
  }

  const featured = posts[0];
  const secondary = posts[1];
  const grid = posts.slice(2);

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
        <section className="max-w-7xl mx-auto px-5 md:px-8 mb-10 md:mb-16">
          <Breadcrumb items={[{ name: "Insights & Blog", url: "/blog" }]} />
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-extrabold text-on-surface tracking-[-0.04em] leading-[0.95] max-w-4xl">
            SEO Blog: Güncel Bilgi,
            <br />
            <span className="text-primary italic">Uzman İçerik.</span>
          </h1>
        </section>

        {/* Category Filter */}
        <section className="max-w-7xl mx-auto px-5 md:px-8 mb-10 md:mb-16 overflow-x-auto">
          <div className="flex items-center gap-3 min-w-max pb-4">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  i === 0
                    ? "bg-primary text-on-primary shadow-md shadow-primary/20"
                    : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container"
                }`}
              >
                {cat}
              </button>
            ))}
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
                  <span>SEO</span>
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
                    <span>SEO</span>
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
                  <span>SEO</span>
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
