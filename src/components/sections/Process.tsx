const steps = [
  {
    number: "01",
    title: "Keşif ve Analiz",
    description:
      "Mevcut durum tespiti ve rakip analizi ile yol haritasını belirliyoruz.",
  },
  {
    number: "02",
    title: "Strateji Tasarımı",
    description:
      "Markanıza özel, veriye dayalı ve ölçeklenebilir bir plan oluşturuyoruz.",
  },
  {
    number: "03",
    title: "Uygulama",
    description:
      "Teknik ve içerik bazlı optimizasyonları titizlikle hayata geçiriyoruz.",
  },
  {
    number: "04",
    title: "Ölçümleme",
    description:
      "Sürekli takip ve iyileştirme ile ROI hedeflerine ulaşıyoruz.",
  },
];

export function Process() {
  return (
    <section className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <span className="text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">
            Our Methodology
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tight-tracking text-on-background">
            4 Adımda Başarı Mimarisi
          </h2>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-outline-variant/10 hidden lg:block -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step) => (
              <div key={step.number} className="relative z-10 bg-background pt-8 pr-8">
                <div className="text-primary/10 text-8xl font-black absolute -top-8 -left-4 pointer-events-none select-none">
                  {step.number}
                </div>
                <h4 className="text-xl font-bold mb-4 relative text-on-background">
                  {step.title}
                </h4>
                <p className="text-on-surface-variant text-sm leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
