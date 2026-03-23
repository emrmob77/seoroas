"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

interface Props {
  variant?: "dark" | "light";
}

export function NewsletterForm({ variant = "dark" }: Props) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
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
      window.dataLayer.push({ event: "newsletter_subscribe", form_name: "blog_newsletter" });

      setSuccess(true);
      setEmail("");
    } catch {
      setError("Bağlantı hatası.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <p className={`text-sm font-semibold py-3 ${variant === "dark" ? "text-green-300" : "text-green-600"}`}>
        Başarıyla abone oldunuz!
      </p>
    );
  }

  const inputClass =
    variant === "dark"
      ? "w-full bg-zinc-800 border-none px-5 py-4 rounded-xl text-white placeholder:text-zinc-500 focus:ring-2 focus:ring-primary/30 transition-all outline-none"
      : "w-full bg-surface-container-low border-none px-5 py-4 rounded-xl text-on-surface placeholder:text-on-surface-variant/50 focus:ring-2 focus:ring-primary/30 transition-all outline-none";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        className={inputClass}
        placeholder="E-posta adresiniz"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {error && (
        <p className={`text-xs ${variant === "dark" ? "text-red-300" : "text-red-500"}`}>{error}</p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-on-primary font-bold py-4 rounded-xl hover:opacity-90 transition-opacity tracking-widest uppercase text-xs disabled:opacity-70 flex items-center justify-center gap-2"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Abone Ol"}
      </button>
      <p className={`text-[10px] uppercase tracking-widest text-center ${variant === "dark" ? "text-zinc-500" : "text-on-surface-variant/50"}`}>
        İstediğiniz zaman abonelikten çıkabilirsiniz.
      </p>
    </form>
  );
}
