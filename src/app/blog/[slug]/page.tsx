import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";
import { articleSchema } from "@/lib/schema";
import { portableTextComponents, extractHeadings } from "@/lib/portableText";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { getPostBySlug, getRelatedPosts } from "@/sanity/queries/posts";
import { urlFor } from "@/sanity/image";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return generateSeoMetadata({
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    path: `/blog/${slug}`,
    ogImage: post.mainImage
      ? urlFor(post.mainImage).width(1200).height(630).format("webp").url()
      : undefined,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = await getRelatedPosts(post._id, 3);
  const headings = extractHeadings(post.body);

  const schema = articleSchema({
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    url: `/blog/${slug}`,
    publishedAt: post.publishedAt,
    image: post.mainImage
      ? urlFor(post.mainImage).width(1200).height(630).url()
      : undefined,
    author: post.author,
  });

  return (
    <>
      <ReadingProgress />
      <SchemaOrg schema={schema} />

      <article>
        {/* Hero */}
        <header className="pt-36 pb-16 px-8">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb
              items={[
                { name: "Blog", url: "/blog" },
                { name: post.title, url: `/blog/${slug}` },
              ]}
            />

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors mt-6 mb-10"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Tüm Yazılar
            </Link>

            <h1 className="text-4xl md:text-[3.5rem] font-extrabold tracking-[-0.04em] leading-[1.1] text-on-surface mb-8">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-on-surface-variant">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time
                  dateTime={post.publishedAt}
                  className="text-sm font-light"
                >
                  {new Date(post.publishedAt).toLocaleDateString("tr-TR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              {post.readingTime && (
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm font-light">
                    {post.readingTime} dk okuma
                  </span>
                </div>
              )}
              {post.author && (
                <>
                  <div className="w-px h-4 bg-outline-variant/30" />
                  <span className="text-sm font-medium text-on-surface">
                    {post.author}
                  </span>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {post.mainImage && (
          <div className="px-8 mb-16">
            <div className="max-w-5xl mx-auto">
              <img
                src={urlFor(post.mainImage)
                  .width(1200)
                  .height(630)
                  .format("webp")
                  .url()}
                alt={post.mainImage.alt || post.title}
                className="w-full rounded-[2rem] object-cover aspect-[2/1]"
              />
            </div>
          </div>
        )}

        {/* Content + TOC Sidebar */}
        <div className="px-8 pb-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-16">
            {/* Article Body */}
            <div className="max-w-3xl">
              {post.excerpt && (
                <p className="text-xl text-on-surface-variant font-light leading-relaxed mb-12 pb-12 border-b border-outline-variant/20">
                  {post.excerpt}
                </p>
              )}

              <div className="prose-custom">
                <PortableText
                  value={post.body}
                  components={portableTextComponents}
                />
              </div>

              {/* Share + Author */}
              <div className="mt-16 pt-12 border-t border-outline-variant/20 space-y-10">
                <ShareButtons
                  title={post.title}
                  url={`https://seoroas.com/blog/${slug}`}
                />

                {/* Author Box */}
                <div className="flex items-start gap-6 bg-surface-container-low rounded-2xl p-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-lg">S</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-background mb-1">
                      {post.author || "SEOROAS Editörlük"}
                    </h4>
                    <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                      SEOROAS uzman ekibi tarafından hazırlanan içerikler,
                      veriye dayalı SEO stratejileri ve sektör deneyimiyle
                      şekillenmektedir.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar TOC */}
            <aside className="hidden lg:block">
              <TableOfContents headings={headings} />
            </aside>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <RelatedPosts posts={relatedPosts} />

      {/* Bottom CTA */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-16 md:p-32 text-center relative overflow-hidden">
          <div className="relative z-10 space-y-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-on-primary tracking-tight">
              Organik Büyümeye Başlayın.
            </h2>
            <p className="text-on-primary/70 text-xl font-light max-w-2xl mx-auto">
              SEO stratejinizi uzman ekibimizle birlikte oluşturun.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl"
            >
              Ücretsiz SEO Analizi
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
