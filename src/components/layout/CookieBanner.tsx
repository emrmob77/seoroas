"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Consent = "accepted" | "rejected" | null;

export function CookieBanner() {
  const [consent, setConsent] = useState<Consent>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent") as Consent;
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
    setConsent(stored);
    if (stored === "accepted") enableAnalytics();
  }, []);

  function enableAnalytics() {
    if (typeof window !== "undefined" && "gtag" in window) {
      (window as unknown as Record<string, Function>).gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  }

  function handleAccept() {
    localStorage.setItem("cookie-consent", "accepted");
    setConsent("accepted");
    setVisible(false);
    enableAnalytics();
  }

  function handleReject() {
    localStorage.setItem("cookie-consent", "rejected");
    setConsent("rejected");
    setVisible(false);
  }

  if (!visible || consent) return null;

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9998] w-[95%] max-w-2xl animate-in slide-in-from-bottom-4"
      role="dialog"
      aria-label="Çerez bildirimi"
    >
      <div className="bg-surface-container-lowest/95 backdrop-blur-2xl rounded-2xl px-8 py-6 shadow-2xl shadow-on-surface/5 flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <div className="flex-1">
          <p className="text-sm text-on-surface leading-relaxed">
            Deneyiminizi iyileştirmek için çerezler kullanıyoruz.{" "}
            <Link
              href="/gizlilik-politikasi"
              className="text-primary font-semibold hover:underline"
            >
              Gizlilik Politikası
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleReject}
            className="px-5 py-2.5 text-sm font-semibold text-on-surface-variant hover:text-on-surface transition-colors rounded-full"
          >
            Reddet
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2.5 bg-primary text-on-primary text-sm font-bold rounded-full hover:bg-primary-dim transition-all shadow-lg shadow-primary/20"
          >
            Kabul Et
          </button>
        </div>
      </div>
    </div>
  );
}
