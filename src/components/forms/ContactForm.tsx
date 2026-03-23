"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";

export function ContactForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = new FormData(e.currentTarget);

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

      router.push("/tesekkurler");
    } catch {
      setError("Bağlantı hatası. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.04em] text-on-surface mb-3">
        Ücretsiz SEO Analizi İsteyin
      </h2>
      <p className="text-on-surface-variant mb-8 md:mb-10">
        Web sitenizin potansiyelini keşfedin. Uzman ekibimiz size özel
        bir strateji hazırlasın.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          <div>
            <label htmlFor="name" className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-2">
              Ad Soyad
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full bg-surface-container-lowest border border-outline-variant/20 px-5 py-3.5 rounded-xl text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
              placeholder="Adınız Soyadınız"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-2">
              Firma Adı
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="w-full bg-surface-container-lowest border border-outline-variant/20 px-5 py-3.5 rounded-xl text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
              placeholder="Şirketiniz"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          <div>
            <label htmlFor="email" className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-2">
              E-Posta Adresi
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full bg-surface-container-lowest border border-outline-variant/20 px-5 py-3.5 rounded-xl text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
              placeholder="email@domain.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-2">
              Telefon
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="w-full bg-surface-container-lowest border border-outline-variant/20 px-5 py-3.5 rounded-xl text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
              placeholder="+90"
            />
          </div>
        </div>

        <div>
          <label htmlFor="website" className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-2">
            Web Sitesi
          </label>
          <input
            id="website"
            name="website"
            type="url"
            required
            className="w-full bg-surface-container-lowest border border-outline-variant/20 px-5 py-3.5 rounded-xl text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
            placeholder="https://www.ornek.com"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          <div>
            <label htmlFor="service" className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-2">
              Hizmet Türü
            </label>
            <select
              id="service"
              name="service"
              className="w-full bg-surface-container-lowest border border-outline-variant/20 px-5 py-3.5 rounded-xl text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none appearance-none"
              defaultValue=""
            >
              <option value="" disabled>Seçiniz</option>
              <option value="teknik-seo">Teknik SEO</option>
              <option value="icerik-seo">İçerik SEO</option>
              <option value="e-ticaret-seo">E-ticaret SEO</option>
              <option value="lokal-seo">Lokal SEO</option>
              <option value="wordpress-seo">WordPress SEO</option>
              <option value="shopify-seo">Shopify SEO</option>
              <option value="seo-danismanligi">SEO Danışmanlığı</option>
              <option value="gtm-kurulum">GTM / Pixel Kurulum</option>
            </select>
          </div>
          <div>
            <label htmlFor="budget" className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-2">
              Aylık Bütçe
            </label>
            <select
              id="budget"
              name="budget"
              className="w-full bg-surface-container-lowest border border-outline-variant/20 px-5 py-3.5 rounded-xl text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none appearance-none"
              defaultValue=""
            >
              <option value="" disabled>Seçiniz</option>
              <option value="10000-25000">10.000₺ - 25.000₺</option>
              <option value="25000-50000">25.000₺ - 50.000₺</option>
              <option value="50000-100000">50.000₺ - 100.000₺</option>
              <option value="100000+">100.000₺+</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-2">
            Mesajınız
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full bg-surface-container-lowest border border-outline-variant/20 px-5 py-3.5 rounded-xl text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none"
            placeholder="Projenizden bahsedin..."
          />
        </div>

        <div className="hidden" aria-hidden="true">
          <input type="text" name="company_fax" tabIndex={-1} autoComplete="off" />
        </div>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="kvkk"
            required
            className="mt-1 h-4 w-4 rounded accent-primary"
          />
          <span className="text-xs text-on-surface-variant leading-relaxed">
            <Link href="/gizlilik-politikasi" className="text-primary hover:underline" target="_blank">
              Gizlilik Politikası
            </Link>
            {" "}ve{" "}
            <Link href="/kullanim-sartlari" className="text-primary hover:underline" target="_blank">
              KVKK Aydınlatma Metni
            </Link>
            &apos;ni okudum ve kabul ediyorum.
          </span>
        </label>

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-on-primary font-bold py-4 rounded-full hover:bg-primary-dim transition-all shadow-xl shadow-primary/20 tracking-widest uppercase text-xs flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              Analiz Talebini Gönder
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
