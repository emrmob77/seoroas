"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

export function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Bir hata oluştu.");
        return;
      }

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "newsletter_subscribe", form_name: "homepage_newsletter" });

      setSuccess(true);
      setEmail("");
    } catch {
      setError("Bağlantı hatası. Tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary rounded-3xl p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
          <div className="max-w-lg relative z-10">
            <span className="text-white/80 font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">
              Newsletter
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tight-tracking text-white mb-4">
              SEO Stratejinizi Ücretsiz Öğrenin
            </h2>
            <p className="text-white/70 font-light leading-relaxed text-sm">
              Her hafta Türkiye pazarına özel SEO ipuçları, güncel algoritma
              değişiklikleri ve pratik rehberler.
            </p>
          </div>

          <div className="w-full max-w-md relative z-10">
            {success ? (
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-4">
                <Check className="h-5 w-5 text-green-300 shrink-0" />
                <p className="text-white text-sm font-medium">
                  Başarıyla abone oldunuz!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="flex gap-3">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-posta adresiniz"
                    required
                    className="flex-1 bg-white/10 backdrop-blur-sm border-[0.5px] border-white/20 rounded-full px-6 py-4 text-white placeholder:text-white/40 focus:ring-0 focus:border-white/40 transition-all text-sm"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    aria-label="Abone ol"
                    className="bg-white text-primary p-4 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300 shrink-0 disabled:opacity-70"
                  >
                    {loading ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <ArrowRight className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {error && (
                  <p className="text-red-300 text-xs mt-3 pl-2">{error}</p>
                )}
                <p className="text-white/40 text-[10px] uppercase tracking-widest mt-4 pl-2">
                  Spam göndermiyoruz. İstediğiniz zaman çıkabilirsiniz.
                </p>
              </form>
            )}
          </div>

          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
