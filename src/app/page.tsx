import type { Metadata } from "next";
import { generateDynamicSeoMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { BlogGrid } from "@/components/sections/BlogGrid";
import { NewsletterCTA } from "@/components/sections/NewsletterCTA";
import { FAQ } from "@/components/sections/FAQ";
import { CTAForm } from "@/components/sections/CTAForm";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return generateDynamicSeoMetadata({
    title: "SEOROAS | SEO Ajansı — Organik Trafik & Gelir Büyümesi",
    description:
      "Veri odaklı SEO stratejileri ile organik trafiğinizi ve gelirinizi artırın. Teknik SEO, içerik optimizasyonu, link building ve e-ticaret SEO. Ücretsiz analiz alın.",
    path: "/",
  });
}

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
