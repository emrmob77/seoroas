"use client";

interface ShareButtonsProps {
  title: string;
  url: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const platforms = [
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    },
  ];

  async function copyLink() {
    await navigator.clipboard.writeText(url);
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">
        Paylaş
      </span>
      {platforms.map((p) => (
        <a
          key={p.name}
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 rounded-full border border-outline-variant/20 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary hover:border-primary/30 transition-colors"
        >
          {p.name}
        </a>
      ))}
      <button
        onClick={copyLink}
        className="px-3 py-1.5 rounded-full border border-outline-variant/20 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary hover:border-primary/30 transition-colors"
      >
        Kopyala
      </button>
    </div>
  );
}
