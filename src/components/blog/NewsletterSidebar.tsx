"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

export function NewsletterSidebar() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
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
      window.dataLayer.push({ event: "newsletter_subscribe", form_name: "blog_sidebar" });

      setSubmitted(true);
    } catch {
      setError("Bağlantı hatası.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-primary text-on-primary rounded-xl p-8 relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="text-xl font-bold tracking-[-0.02em] mb-4">
          Haftalık SEO Bülteni
        </h3>
        <p className="text-sm opacity-80 mb-6 leading-relaxed">
          Algoritma güncellemeleri ve SEO stratejileri ile öne çıkın.
        </p>

        {submitted ? (
          <p className="text-sm font-semibold py-3">
            Kaydınız alındı, teşekkürler!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              className="w-full bg-on-primary/10 border-none rounded-lg py-3 px-4 text-sm placeholder:text-on-primary/50 focus:ring-1 focus:ring-on-primary/30 text-on-primary"
              placeholder="E-posta adresiniz"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {error && (
              <p className="text-red-300 text-xs">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-on-primary text-primary py-3 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Abone Ol"}
            </button>
          </form>
        )}
      </div>
      <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-on-primary/5 rounded-full blur-3xl" />
    </div>
  );
}
