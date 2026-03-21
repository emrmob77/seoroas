"use client";

import { useState, useEffect } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: TocItem[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -75% 0px" }
    );

    for (const h of headings) {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-32" aria-label="İçindekiler">
      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-6">
        İçindekiler
      </h4>
      <ul className="space-y-2 border-l border-outline-variant/20">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={`block text-sm font-light leading-relaxed transition-all duration-300 ${
                h.level === 3 ? "pl-8" : "pl-4"
              } ${
                activeId === h.id
                  ? "text-primary border-l-2 border-primary -ml-px font-medium"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
