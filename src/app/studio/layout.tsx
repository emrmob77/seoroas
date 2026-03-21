"use client";

import { useEffect } from "react";

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const style = document.createElement("style");
    style.id = "sanity-studio-overrides";
    style.textContent = `
      body > header {
        display: none !important;
      }
      body > footer {
        display: none !important;
      }
      body {
        overflow: hidden !important;
      }
      body > main {
        padding: 0 !important;
        margin: 0 !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      style.remove();
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: '0px',
      left: '0px',
      width: '100vw',
      height: '100vh',
      zIndex: '9999',
      background: '#101112',
    }}>
      {children}
    </div>
  );
}
