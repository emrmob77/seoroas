import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "SEO Danışmanı Nedir? Nasıl Seçilir?",
    excerpt:
      "Doğru SEO danışmanını seçmek işletmenizin online başarısı için kritik öneme sahiptir.",
    slug: "seo-danismani-nedir",
    readTime: "8 dk",
    category: "Strateji",
    featured: true,
  },
  {
    title: "SEO Analizi Nasıl Yapılır?",
    excerpt:
      "Web sitenizin SEO performansını adım adım analiz edin.",
    slug: "seo-analizi-nasil-yapilir",
    readTime: "12 dk",
    category: "Teknik",
    featured: false,
  },
  {
    title: "Kurumsal SEO Kılavuzu",
    excerpt:
      "Kurumsal ölçekte SEO stratejisi nasıl oluşturulur?",
    slug: "kurumsal-seo-nedir",
    readTime: "10 dk",
    category: "Kurumsal",
    featured: false,
  },
  {
    title: "E-ticaret SEO Rehberi 2026",
    excerpt:
      "Ürün sayfalarından kategori optimizasyonuna eksiksiz rehber.",
    slug: "e-ticaret-seo-rehberi",
    readTime: "15 dk",
    category: "E-ticaret",
    featured: false,
  },
];

export function BlogGrid() {
  const featured = posts.find((p) => p.featured)!;
  const others = posts.filter((p) => !p.featured);

  return (
    <section className="py-32 px-8 bg-surface-container-low/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 gap-4">
          <div className="max-w-xl">
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">
              Insights & Guides
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
            href={`/blog/${featured.slug}`}
            className="group bg-surface-container-lowest rounded-2xl border-[0.5px] border-outline-variant/10 overflow-hidden hover:shadow-2xl transition-all duration-700"
          >
            <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 via-primary/5 to-surface-container-low relative">
              <div className="absolute bottom-6 left-6">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  {featured.category}
                </span>
              </div>
            </div>
            <div className="p-10">
              <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">
                {featured.readTime} okuma
              </span>
              <h3 className="text-2xl font-bold tight-tracking text-on-background mt-3 mb-4 group-hover:text-primary transition-colors duration-500">
                {featured.title}
              </h3>
              <p className="text-on-surface-variant font-light leading-relaxed text-sm">
                {featured.excerpt}
              </p>
            </div>
          </Link>

          {/* Others — stacked */}
          <div className="flex flex-col gap-4">
            {others.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-surface-container-lowest rounded-2xl border-[0.5px] border-outline-variant/10 p-8 hover:shadow-2xl transition-all duration-700 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary">
                      {post.category}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-on-background group-hover:text-primary transition-colors duration-500 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-on-surface-variant font-light text-sm leading-relaxed">
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
