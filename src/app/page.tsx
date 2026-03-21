import type { Metadata } from "next";
import { generateSeoMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { BlogGrid } from "@/components/sections/BlogGrid";
import { NewsletterCTA } from "@/components/sections/NewsletterCTA";
import { FAQ } from "@/components/sections/FAQ";
import { CTAForm } from "@/components/sections/CTAForm";

export const dynamic = "force-dynamic";

export const metadata: Metadata = generateSeoMetadata({
  title: "SEOROAS | Advanced SEO Performance — 10X Organik Trafik Büyümesi",
  description:
    "Veriye dayalı stratejiler ve mimari SEO optimizasyonu ile markanızın dijital varlığını yeniden inşa ediyoruz. Ücretsiz SEO analizi başlatın.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <CaseStudies />
      <BlogGrid />
      <NewsletterCTA />
      <FAQ />
      <CTAForm />
    </>
  );
}
