import type { PortableTextComponents, PortableTextBlock } from "@portabletext/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function extractText(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(extractText).join("");
  if (children && typeof children === "object" && "props" in children) {
    return extractText((children as React.ReactElement<{ children?: React.ReactNode }>).props.children);
  }
  return "";
}

export interface TocHeading {
  id: string;
  text: string;
  level: number;
}

export function extractHeadings(blocks: PortableTextBlock[]): TocHeading[] {
  if (!blocks) return [];
  return blocks
    .filter(
      (b) => b._type === "block" && (b.style === "h2" || b.style === "h3")
    )
    .map((b) => {
      const text = (b.children as Array<{ text: string }>)
        ?.map((c) => c.text)
        .join("") || "";
      return {
        id: slugify(text),
        text,
        level: b.style === "h3" ? 3 : 2,
      };
    });
}

export const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => {
      const text = extractText(children);
      const id = slugify(text);
      return (
        <h2
          id={id}
          className="text-3xl font-bold mt-12 mb-5 text-on-background tracking-tight scroll-mt-28"
        >
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      const text = extractText(children);
      const id = slugify(text);
      return (
        <h3
          id={id}
          className="text-2xl font-semibold mt-10 mb-4 text-on-background tracking-tight scroll-mt-28"
        >
          {children}
        </h3>
      );
    },
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold mt-8 mb-3 text-on-background">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-[1.05rem] leading-[1.85] text-on-surface-variant mb-6 font-light">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-6 my-8 text-on-surface-variant italic text-lg font-light">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-6 space-y-2 text-on-surface-variant font-light">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-on-surface-variant font-light">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="text-[1.05rem] leading-[1.85]">{children}</li>
    ),
    number: ({ children }) => (
      <li className="text-[1.05rem] leading-[1.85]">{children}</li>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || "";
      const isExternal = href.startsWith("http");
      if (isExternal) {
        return (
          <a
            href={href}
            className="text-primary hover:text-primary/80 underline underline-offset-2 decoration-primary/30 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          href={href}
          className="text-primary hover:text-primary/80 underline underline-offset-2 decoration-primary/30 transition-colors"
        >
          {children}
        </Link>
      );
    },
    strong: ({ children }) => (
      <strong className="font-semibold text-on-background">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-surface-container-low text-primary px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
  },
  types: {
    ctaBox: ({ value }) => (
      <div className="my-10 bg-primary rounded-2xl p-10 text-center space-y-4">
        <h4 className="text-2xl font-bold text-on-primary">
          {value?.title || "Ücretsiz SEO Analizi"}
        </h4>
        <p className="text-on-primary/70 font-light">
          {value?.description || "Web sitenizin SEO potansiyelini keşfedin."}
        </p>
        <Link
          href={value?.href || "/iletisim"}
          className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-full font-bold text-sm hover:scale-105 transition-all"
        >
          {value?.buttonText || "Analiz Başlat"}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    ),
  },
};
