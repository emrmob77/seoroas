export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        header, footer, main > :not(#sanity-studio) { display: none !important; }
        main { padding: 0 !important; margin: 0 !important; flex: 1; }
        body { overflow: hidden; }
      `}</style>
      <div id="sanity-studio" style={{ height: '100vh', width: '100vw' }}>
        {children}
      </div>
    </>
  );
}
