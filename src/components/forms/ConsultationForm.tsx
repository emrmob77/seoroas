"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export function ConsultationForm() {
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

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "form_submit", form_name: "consultation_form" });

      router.push("/tesekkurler");
    } catch {
      setError("Bağlantı hatası. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
      <input type="text" name="company_fax" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <input
        name="name"
        className="w-full bg-white/10 border-none rounded-xl p-3.5 md:p-4 text-white placeholder-white/40 focus:ring-2 focus:ring-white/30 transition-all outline-none"
        placeholder="Adınız Soyadınız"
        type="text"
        required
      />
      <input
        name="email"
        className="w-full bg-white/10 border-none rounded-xl p-3.5 md:p-4 text-white placeholder-white/40 focus:ring-2 focus:ring-white/30 transition-all outline-none"
        placeholder="E-posta Adresiniz"
        type="email"
        required
      />
      <input
        name="website"
        className="w-full bg-white/10 border-none rounded-xl p-3.5 md:p-4 text-white placeholder-white/40 focus:ring-2 focus:ring-white/30 transition-all outline-none"
        placeholder="Web Siteniz"
        type="url"
        required
      />
      <textarea
        name="message"
        className="w-full bg-white/10 border-none rounded-xl p-3.5 md:p-4 text-white placeholder-white/40 focus:ring-2 focus:ring-white/30 transition-all outline-none resize-none"
        placeholder="Hedeflerinizden kısaca bahsedin"
        rows={3}
      />
      {error && (
        <p className="text-red-300 text-xs">{error}</p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-white text-primary font-bold py-3.5 md:py-4 rounded-xl hover:bg-opacity-90 transition-all disabled:opacity-70 flex items-center justify-center gap-2"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Teklif Talebi Gönder"}
      </button>
    </form>
  );
}
