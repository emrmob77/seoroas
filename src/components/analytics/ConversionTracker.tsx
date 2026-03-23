"use client";

import { useEffect } from "react";

interface Props {
  event: string;
  params?: Record<string, string | number>;
}

export function ConversionTracker({ event, params }: Props) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });

    if (window.gtag) {
      window.gtag("event", event, params);
    }
  }, [event, params]);

  return null;
}
