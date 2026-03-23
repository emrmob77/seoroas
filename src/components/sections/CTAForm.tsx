"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export function CTAForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", website: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function normalizeUrl(raw: string): string {
    const trimmed = raw.trim();
    if (!trimmed) return trimmed;
    if (/^https?:\/\//i.test(trimmed)) return trimmed;
    return `https://${trimmed.replace(/^\/\//, "")}`;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = new FormData(e.currentTarget);
    const website = form.get("website");
    if (typeof website === "string") form.set("website", normalizeUrl(website));

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form)),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Bir hata oluştu. Lütfen tekrar deneyin.");
        return;
      }

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "form_submit", form_name: "cta_form" });

      router.push("/tesekkurler");
    } catch {
      setError("Bağlantı hatası. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-32 px-8 mb-32">
      <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-3xl rounded-[3rem] p-12 md:p-24 soft-shadow border-[0.5px] border-outline-variant/10 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold tight-tracking mb-8 text-on-background">
            Ücretsiz SEO Analizi Başlatın
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto mb-16 font-light leading-relaxed">
            Mevcut durumunuzu profesyonel bir bakış açısıyla değerlendirelim.
            Sizin için en uygun büyüme planını birlikte kurgulayalım.
          </p>

          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-8">
            <input
              type="text"
              name="company_fax"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="İsim Soyisim"
              required
              className="w-full bg-surface-container-low border-b-primary border-t-0 border-l-0 border-r-0 border-b-[0.5px] focus:border-b-[1.5px] focus:ring-0 px-4 py-4 transition-all duration-300 outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Kurumsal E-posta"
              required
              className="w-full bg-surface-container-low border-b-primary border-t-0 border-l-0 border-r-0 border-b-[0.5px] focus:border-b-[1.5px] focus:ring-0 px-4 py-4 transition-all duration-300 outline-none"
            />
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              placeholder="ornek.com"
              required
              className="w-full bg-surface-container-low border-b-primary border-t-0 border-l-0 border-r-0 border-b-[0.5px] focus:border-b-[1.5px] focus:ring-0 px-4 py-4 transition-all duration-300 outline-none"
            />

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white py-6 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 mt-8 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin mx-auto" />
              ) : (
                "Analizi Gönder"
              )}
            </button>
          </form>
        </div>

        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      </div>
    </section>
  );
}
