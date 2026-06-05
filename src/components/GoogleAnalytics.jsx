"use client";

import Script from "next/script";

// Renders the GA4 (gtag.js) tags only when a measurement ID is configured.
// Set NEXT_PUBLIC_GA_ID in .env.local (e.g. G-XXXXXXXXXX).
export default function GoogleAnalytics({ gaId }) {
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
