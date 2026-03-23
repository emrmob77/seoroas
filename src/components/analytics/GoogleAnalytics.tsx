import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

/**
 * Standalone GA4 — only loads when GTM is NOT configured.
 * When GTM is active, GA4 should be managed inside the GTM container.
 */
export function GoogleAnalytics() {
  if (GTM_ID || !GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied'
          });
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
            send_page_view: true
          });
        `}
      </Script>
    </>
  );
}
