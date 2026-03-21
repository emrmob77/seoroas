import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

interface Stat {
  value: string;
  label: string;
}

interface SubpageHeroProps {
  breadcrumb: { name: string; url: string }[];
  badge: string;
  title: React.ReactNode;
  subtitle: string;
  stats?: Stat[];
  children?: React.ReactNode;
}

export function SubpageHero({
  breadcrumb,
  badge,
  title,
  subtitle,
  stats,
  children,
}: SubpageHeroProps) {
  return (
    <section className="relative min-h-[60vh] md:min-h-[75vh] pt-24 md:pt-36 pb-16 md:pb-24 px-5 md:px-8 overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center w-full">
        <Breadcrumb items={breadcrumb} />

        <div className="inline-flex items-center space-x-2 bg-surface-container-low px-4 py-1.5 rounded-full mb-8 mt-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">
            {badge}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-[5rem] font-extrabold leading-[1.05] tracking-[-0.04em] text-on-background max-w-5xl mb-8 md:mb-12">
          {title}
        </h1>

        <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed mb-12 md:mb-16">
          {subtitle}
        </p>

        {stats && stats.length > 0 && (
          <div className="w-full max-w-4xl bg-white/40 backdrop-blur-xl border-[0.5px] border-outline-variant/20 rounded-3xl p-8 md:p-12 flex flex-col sm:flex-row flex-wrap justify-between items-center gap-8">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8">
                {i > 0 && (
                  <div className="w-px h-12 bg-outline-variant/20 hidden md:block" />
                )}
                <div className="flex flex-col items-center sm:items-start">
                  <span
                    className={`text-4xl font-extrabold tracking-tighter ${
                      i === 0 ? "text-primary" : "text-on-background"
                    }`}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant mt-1">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
            <Link
              href="/iletisim"
              className="w-full sm:w-auto bg-primary text-white p-4 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        )}

        {children}
      </div>

      {/* Background blurs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 opacity-20 pointer-events-none">
        <div className="w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
      </div>
      <div className="absolute bottom-0 right-0 -z-10 opacity-20 pointer-events-none">
        <div className="w-[30rem] h-[30rem] rounded-full bg-indigo-500/10 blur-[150px]" />
      </div>
    </section>
  );
}
