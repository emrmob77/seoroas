import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { urlFor } from "@/sanity/image";
import type { Post } from "@/types";

interface RelatedPostsProps {
  posts: Post[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="py-32 px-8 bg-surface-container-low/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">
            Devamında Okuyun
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-on-background">
            İlgili Yazılar
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="group bg-surface-container-lowest rounded-2xl border-[0.5px] border-outline-variant/10 overflow-hidden hover:shadow-2xl transition-all duration-700"
            >
              <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 via-primary/5 to-surface-container-low relative overflow-hidden">
                {post.mainImage && (
                  <img
                    src={urlFor(post.mainImage)
                      .width(500)
                      .height(312)
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
                </div>
                <h3 className="text-lg font-bold text-on-background group-hover:text-primary transition-colors duration-500 mb-3">
                  {post.title}
                </h3>
                <p className="text-on-surface-variant font-light text-sm leading-relaxed line-clamp-2">
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
      </div>
    </section>
  );
}
