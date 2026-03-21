import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { getAllPosts } from "@/sanity/queries/posts";
import { urlFor } from "@/sanity/image";
import type { Post } from "@/types";

export const dynamic = "force-dynamic";

export const metadata: Metadata = generateSeoMetadata({
  title: "SEO Blog — Rehberler, Stratejiler ve Güncel İçgörüler",
  description:
    "SEO dünyasındaki son gelişmeler, uzman rehberleri ve kanıtlanmış stratejiler. Organik büyüme için bilgiyle donanın.",
  path: "/blog",
});

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
          className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
          style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.8, 0.2, 1)" }}
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
      <main className="pt-32 pb-40">
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

      <main className="pt-32">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-5 md:px-8 mb-12 md:mb-24">
          <div className="flex flex-col gap-4 mb-8">
            <Breadcrumb items={[{ name: "Insights & Blog", url: "/blog" }]} />
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold text-on-surface tight-tracking max-w-4xl">
              SEO Blog: Güncel Bilgi,{" "}
              <span className="text-primary italic">Uzman İçerik.</span>
            </h1>
          </div>
        </section>

        {/* Category Filter */}
        <section className="max-w-7xl mx-auto px-5 md:px-8 mb-10 md:mb-20 overflow-x-auto">
          <div className="flex items-center gap-4 min-w-max pb-4">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-y-24 gap-x-6 md:gap-x-12">
            {/* Featured Post — spans 2 columns */}
            {featured && (
              <article className="md:col-span-2 group flex flex-col gap-8">
                <Link href={`/blog/${featured.slug.current}`}>
                  <div className="relative">
                    <PostImage post={featured} aspect="wide" priority />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-primary shadow-sm">
                        Trend
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="flex flex-col gap-4 max-w-2xl">
                  <div className="flex items-center gap-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">
                    <span>SEO</span>
                    <span className="w-1 h-1 bg-outline-variant rounded-full" />
                    <span>{formatDate(featured.publishedAt)}</span>
                  </div>
                  <Link href={`/blog/${featured.slug.current}`}>
                    <h2 className="text-2xl md:text-4xl font-extrabold text-on-surface tight-tracking group-hover:text-primary transition-colors cursor-pointer">
                      {featured.title}
                    </h2>
                  </Link>
                  <p className="text-on-surface-variant leading-relaxed text-lg">
                    {featured.excerpt}
                  </p>
                  <Link
                    href={`/blog/${featured.slug.current}`}
                    className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mt-2 group/link"
                  >
                    Okumaya Devam Et
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </article>
            )}

            {/* Secondary Post */}
            {secondary && (
              <article className="group flex flex-col gap-6">
                <Link href={`/blog/${secondary.slug.current}`}>
                  <PostImage post={secondary} />
                </Link>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">
                    <span>SEO</span>
                    <span className="w-1 h-1 bg-outline-variant rounded-full" />
                    <span>{formatDate(secondary.publishedAt)}</span>
                  </div>
                  <Link href={`/blog/${secondary.slug.current}`}>
                    <h3 className="text-2xl font-bold text-on-surface tight-tracking group-hover:text-primary transition-colors">
                      {secondary.title}
                    </h3>
                  </Link>
                  <p className="text-on-surface-variant leading-relaxed text-sm line-clamp-3">
                    {secondary.excerpt}
                  </p>
                </div>
              </article>
            )}

            {/* Grid Posts */}
            {grid.map((post) => (
              <article key={post._id} className="group flex flex-col gap-6">
                <Link href={`/blog/${post.slug.current}`}>
                  <PostImage post={post} />
                </Link>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">
                    <span>SEO</span>
                    <span className="w-1 h-1 bg-outline-variant rounded-full" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <Link href={`/blog/${post.slug.current}`}>
                    <h3 className="text-2xl font-bold text-on-surface tight-tracking group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-on-surface-variant leading-relaxed text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="max-w-7xl mx-auto px-5 md:px-8 mb-20 md:mb-40">
          <div className="bg-surface-container-low rounded-[2rem] p-8 md:p-12 lg:p-24 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
            <div className="flex flex-col gap-6 max-w-lg z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface tight-tracking leading-tight">
                SEO Dünyasından Haftalık Güncellemeler
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                En yeni SEO trendlerini, algoritma değişikliklerini ve özel
                vaka analizlerini her Salı sabahı kutunuza gönderiyoruz.
              </p>
            </div>
            <div className="w-full max-w-md z-10">
              <form className="flex flex-col gap-4">
                <input
                  className="w-full bg-surface-container-lowest border-none px-6 py-5 rounded-xl text-on-surface placeholder:text-on-surface-variant/50 focus:ring-2 focus:ring-primary/10 transition-all outline-none"
                  placeholder="E-posta adresiniz"
                  type="email"
                />
                <button
                  type="submit"
                  className="w-full bg-primary text-on-primary font-bold py-5 rounded-xl hover:bg-primary-dim transition-all shadow-xl shadow-primary/20 tracking-widest uppercase text-xs"
                >
                  Abone Ol
                </button>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest text-center opacity-60">
                  İstediğiniz zaman abonelikten çıkabilirsiniz.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
