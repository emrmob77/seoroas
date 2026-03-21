"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function NewsletterCTA() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary rounded-3xl p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
          {/* Text */}
          <div className="max-w-lg relative z-10">
            <span className="text-white/60 font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">
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

          {/* Form */}
          <form
            action="/api/newsletter"
            method="POST"
            className="w-full max-w-md relative z-10"
          >
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
                className="bg-white text-primary p-4 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300 shrink-0"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <p className="text-white/40 text-[10px] uppercase tracking-widest mt-4 pl-2">
              Spam göndermiyoruz. İstediğiniz zaman çıkabilirsiniz.
            </p>
          </form>

          {/* Background blur */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
