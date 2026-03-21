import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";
import { articleSchema } from "@/lib/schema";
import { portableTextComponents } from "@/lib/portableText";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { NewsletterSidebar } from "@/components/blog/NewsletterSidebar";
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

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <ReadingProgress />
      <SchemaOrg schema={schema} />

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Breadcrumbs */}
          <Breadcrumb
            items={[
              { name: "Blog", url: "/blog" },
              { name: post.title, url: `/blog/${slug}` },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mt-12">
            {/* Main Content */}
            <article className="lg:col-span-8">
              <header className="mb-16">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-[-0.04em] leading-none text-on-background mb-8">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-on-surface-variant">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.publishedAt}>{formattedDate}</time>
                  </span>
                  {post.readingTime && (
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {post.readingTime} dk okuma
                    </span>
                  )}
                </div>
              </header>

              {/* Hero Image */}
              {post.mainImage && (
                <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden mb-16 shadow-2xl">
                  <Image
                    src={urlFor(post.mainImage)
                      .width(1200)
                      .height(514)
                      .format("webp")
                      .url()}
                    alt={post.mainImage.alt || post.title}
                    width={1200}
                    height={514}
                    className="w-full h-full object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </div>
              )}

              {/* Key Takeaways */}
              {post.excerpt && (
                <div className="backdrop-blur-[32px] bg-surface-container-lowest/60 border-[0.5px] border-outline-variant/20 rounded-xl p-8 mb-16">
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-primary mb-6">
                    Öne Çıkanlar
                  </h3>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <p className="text-on-background leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              )}

              {/* Article Body */}
              <div className="prose-custom">
                <PortableText
                  value={post.body}
                  components={portableTextComponents}
                />
              </div>

              {/* Share */}
              <div className="mt-16 pt-12 border-t border-outline-variant/20">
                <ShareButtons
                  title={post.title}
                  url={`https://seoroas.com/blog/${slug}`}
                />
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 sticky top-32 space-y-12">
              {/* Author Card */}
              <div className="bg-surface-container-low rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-lg">S</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-background">
                      {post.author || "SEOROAS"}
                    </h4>
                    <p className="text-xs text-on-surface-variant uppercase tracking-wider">
                      SEO Uzmanı
                    </p>
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                  SEOROAS uzman ekibi tarafından hazırlanan içerikler, veriye
                  dayalı SEO stratejileri ve sektör deneyimiyle
                  şekillenmektedir.
                </p>
                <Link
                  href="/hakkimizda"
                  className="w-full block text-center py-3 border-[0.5px] border-outline-variant/20 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-surface-container-high transition-colors"
                >
                  Ekibi Tanı
                </Link>
              </div>

              {/* Related Analysis */}
              {relatedPosts.length > 0 && (
                <div>
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-on-background mb-8">
                    İlgili Yazılar
                  </h3>
                  <div className="space-y-10">
                    {relatedPosts.slice(0, 3).map((rp) => (
                      <Link
                        key={rp._id}
                        href={`/blog/${rp.slug.current}`}
                        className="group block"
                      >
                        {rp.readingTime && (
                          <p className="text-xs font-bold text-primary mb-2 uppercase">
                            {rp.readingTime} dk okuma
                          </p>
                        )}
                        <h4 className="text-lg font-bold tracking-[-0.02em] group-hover:text-primary transition-colors mb-2 leading-snug">
                          {rp.title}
                        </h4>
                        {rp.excerpt && (
                          <p className="text-sm text-on-surface-variant line-clamp-2">
                            {rp.excerpt}
                          </p>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Newsletter */}
              <NewsletterSidebar />
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
