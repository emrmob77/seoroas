import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { sanityFetch } from "@/sanity/client";
import { urlFor } from "@/sanity/image";

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  mainImage?: { asset: { _ref: string }; alt?: string };
  publishedAt: string;
  readingTime: number;
  categoryTitle: string;
}

const QUERY = `*[_type == "post"] | order(publishedAt desc)[0...4]{
  _id, title, slug, excerpt, mainImage, publishedAt,
  "readingTime": round(length(pt::text(body)) / 5 / 200),
  "categoryTitle": categories[0]->title
}`;

export async function BlogGrid() {
  const posts = await sanityFetch<BlogPost[]>(QUERY);

  if (!posts || posts.length === 0) return null;

  const featured = posts[0];
  const others = posts.slice(1);

  const featuredImage = featured.mainImage
    ? urlFor(featured.mainImage).width(800).height(500).format("webp").url()
    : "";

  return (
    <section className="py-32 px-8 bg-surface-container-low/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 gap-4">
          <div className="max-w-xl">
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">
              İçgörüler & Rehberler
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tight-tracking text-on-background">
              Bilgiyle Güçlenin.
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-primary text-xs font-bold uppercase tracking-widest border-b-[0.5px] border-primary pb-1 hover:opacity-70 transition-opacity"
          >
            Tüm Yazılar
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured */}
          <Link
            href={`/blog/${featured.slug.current}`}
            className="group bg-surface-container-lowest rounded-2xl border-[0.5px] border-outline-variant/10 overflow-hidden hover:shadow-2xl transition-all duration-700"
          >
            <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 via-primary/5 to-surface-container-low relative overflow-hidden">
              {featuredImage && (
                <Image
                  src={featuredImage}
                  alt={featured.mainImage?.alt || featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              )}
              <div className="absolute bottom-6 left-6 z-10">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  {featured.categoryTitle || "Blog"}
                </span>
              </div>
            </div>
            <div className="p-10">
              <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">
                {featured.readingTime || 5} dk okuma
              </span>
              <h3 className="text-2xl font-bold tight-tracking text-on-background mt-3 mb-4 group-hover:text-primary transition-colors duration-500">
                {featured.title}
              </h3>
              <p className="text-on-surface-variant font-light leading-relaxed text-sm line-clamp-2">
                {featured.excerpt}
              </p>
            </div>
          </Link>

          {/* Others — stacked */}
          <div className="flex flex-col gap-4">
            {others.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group bg-surface-container-lowest rounded-2xl border-[0.5px] border-outline-variant/10 p-8 hover:shadow-2xl transition-all duration-700 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary">
                      {post.categoryTitle || "Blog"}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">
                      {post.readingTime || 5} dk
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-on-background group-hover:text-primary transition-colors duration-500 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-on-surface-variant font-light text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-primary mt-4 group-hover:gap-2 transition-all">
                  Devamını Oku
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
