import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { getAllPosts } from "@/sanity/queries/posts";
import { urlFor } from "@/sanity/image";

export const dynamic = "force-dynamic";

export const metadata: Metadata = generateSeoMetadata({
  title: "SEO Blog — Rehberler, Stratejiler ve Güncel İçgörüler",
  description:
    "SEO dünyasındaki son gelişmeler, uzman rehberleri ve kanıtlanmış stratejiler. Organik büyüme için bilgiyle donanın.",
  path: "/blog",
});

export default async function BlogPage() {
  const posts = await getAllPosts();

  const featured = posts[0];
  const rest = posts.slice(1);

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

      <div className="pt-36 pb-32 px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ name: "Blog", url: "/blog" }]} />

          {/* Header */}
          <div className="mt-8 mb-20 max-w-3xl space-y-6">
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.3em]">
              Insights & Guides
            </span>
            <h1 className="text-5xl md:text-[4.5rem] font-extrabold tracking-[-0.06em] leading-[0.95] text-on-surface">
              Bilgiyle{" "}
              <span className="text-primary italic">Güçlenin.</span>
            </h1>
            <p className="text-xl text-on-surface-variant font-light leading-relaxed">
              SEO stratejileri, teknik rehberler ve sektör analizleri ile
              organik büyüme yolculuğunuza rehberlik ediyoruz.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-32">
              <p className="text-on-surface-variant text-lg font-light">
                Henüz yayınlanmış yazı bulunmuyor. Yakında burada olacak.
              </p>
            </div>
          ) : (
            <>
              {/* Featured Post */}
              {featured && (
                <Link
                  href={`/blog/${featured.slug.current}`}
                  className="group block bg-surface-container-lowest rounded-[2rem] border-[0.5px] border-outline-variant/10 overflow-hidden hover:shadow-2xl transition-all duration-700 mb-16"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-primary/10 via-primary/5 to-surface-container-low relative">
                      {featured.mainImage && (
                        <img
                          src={urlFor(featured.mainImage)
                            .width(800)
                            .height(500)
                            .format("webp")
                            .url()}
                          alt={featured.mainImage.alt || featured.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div className="p-10 lg:p-16 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary bg-primary/5 px-3 py-1 rounded-full">
                          Öne Çıkan
                        </span>
                        {featured.readingTime && (
                          <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">
                            {featured.readingTime} dk okuma
                          </span>
                        )}
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-on-background mb-4 group-hover:text-primary transition-colors duration-500">
                        {featured.title}
                      </h2>
                      <p className="text-on-surface-variant font-light leading-relaxed mb-6">
                        {featured.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] uppercase tracking-widest text-on-surface-variant">
                          {new Date(featured.publishedAt).toLocaleDateString(
                            "tr-TR",
                            { year: "numeric", month: "long", day: "numeric" }
                          )}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-primary group-hover:gap-2 transition-all">
                          Devamını Oku
                          <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              {/* Grid */}
              {rest.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {rest.map((post) => (
                    <Link
                      key={post._id}
                      href={`/blog/${post.slug.current}`}
                      className="group bg-surface-container-lowest rounded-2xl border-[0.5px] border-outline-variant/10 overflow-hidden hover:shadow-2xl transition-all duration-700"
                    >
                      <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 via-primary/5 to-surface-container-low relative overflow-hidden">
                        {post.mainImage && (
                          <img
                            src={urlFor(post.mainImage)
                              .width(600)
                              .height(375)
                              .format("webp")
                              .url()}
                            alt={post.mainImage.alt || post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            loading="lazy"
                          />
                        )}
                      </div>
                      <div className="p-8">
                        <div className="flex items-center gap-4 mb-4">
                          {post.readingTime && (
                            <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">
                              {post.readingTime} dk
                            </span>
                          )}
                          <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">
                            {new Date(post.publishedAt).toLocaleDateString(
                              "tr-TR",
                              { year: "numeric", month: "short" }
                            )}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-on-background group-hover:text-primary transition-colors duration-500 mb-3">
                          {post.title}
                        </h3>
                        <p className="text-on-surface-variant font-light text-sm leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                        <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-primary mt-6 group-hover:gap-2 transition-all">
                          Devamını Oku
                          <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
