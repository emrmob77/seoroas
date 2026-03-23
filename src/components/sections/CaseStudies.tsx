import Link from "next/link";

const cases = [
  {
    title: "Z Global",
    category: "Fintech Büyümesi",
    image: "/images/case-1.jpg",
    testimonial:
      "SEOROAS, SEO'yu bir pazarlama kanalı olmaktan çıkarıp bir büyüme motoruna dönüştürdü. Veri vizyonları eşsiz.",
    author: "Caner Yılmaz",
    role: "CMO, Z Global",
  },
  {
    title: "Luxo E-commerce",
    category: "E-ticaret Dönüşümü",
    image: "/images/case-2.jpg",
    testimonial:
      "Mimarimizdeki hataları 48 saatte tespit ettiler. Trafiğimiz 6 ay içinde %280 oranında artış gösterdi.",
    author: "Selin Aktaş",
    role: "Kurucu, Luxo",
  },
];

export function CaseStudies() {
  return (
    <section className="py-32 px-8 bg-surface-container-low/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 gap-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tight-tracking text-on-background">
            Sonuçlar Konuşsun.
          </h2>
          <Link
            href="/vaka-calismalari"
            className="text-primary text-xs font-bold uppercase tracking-widest border-b-[0.5px] border-primary pb-1 hover:opacity-70 transition-opacity"
          >
            Tüm Referanslar
          </Link>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {cases.map((c, i) => (
            <div key={c.title} className={`space-y-12 ${i === 1 ? "md:mt-32" : ""}`}>
              {/* Image Card */}
              <div className="aspect-[4/5] bg-surface-variant rounded-3xl overflow-hidden relative group">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-surface-variant group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex flex-col justify-end p-12 text-white">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold mb-2">
                    {c.category}
                  </span>
                  <h3 className="text-3xl font-bold tight-tracking">
                    {c.title}
                  </h3>
                </div>
              </div>

              {/* Testimonial */}
              <div className="max-w-md">
                <p className="text-2xl font-light leading-snug italic text-on-background mb-6">
                  &ldquo;{c.testimonial}&rdquo;
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-outline-variant/30 flex items-center justify-center">
                    <span className="text-sm font-bold text-on-surface-variant">
                      {c.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest">
                      {c.author}
                    </p>
                    <p className="text-xs text-on-surface-variant">{c.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
