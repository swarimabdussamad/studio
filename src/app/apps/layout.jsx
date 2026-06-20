// The apps page is a client component ("use client"), so its metadata lives
// here in a server-component layout wrapper instead.
const description =
  "AutoWaba is a free WhatsApp CRM and business automation platform built on the official Meta Cloud API. Run broadcast campaigns, build chatbot flows, manage a shared team inbox, and let AI trained on your own business answer customer questions automatically on WhatsApp. Free to start during early access.";

export const metadata = {
  title: "WhatsApp CRM & Automation Software — AutoWaba",
  description,
  keywords: [
    "free WhatsApp CRM",
    "WhatsApp CRM",
    "WhatsApp Business API",
    "WhatsApp marketing software",
    "WhatsApp chatbot",
    "WhatsApp broadcast tool",
    "Meta Cloud API",
    "AutoWaba",
    "Wati alternative",
  ],
  alternates: { canonical: "/apps" },
  openGraph: {
    title: "WhatsApp CRM & Automation Software — AutoWaba | AutoTechify",
    description,
    url: "/apps",
  },
};

// SoftwareApplication schema lets Google show rich results and lets AI search
// engines (ChatGPT, Perplexity, Gemini) describe AutoWaba accurately.
const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AutoWaba",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://autowaba.autotechify.com",
  description,
  publisher: { "@id": "https://autotechify.com/#organization" },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free to start during early access",
  },
  featureList: [
    "AI trained on your own business knowledge",
    "WhatsApp broadcast campaigns with template messages",
    "Chatbot builder with condition-based flows",
    "Multi-agent shared conversation inbox",
    "Smart message routing by sender, keyword, or custom rules",
    "Webhook integrations for external automation",
  ],
};

export default function AppsLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />
      {children}
    </>
  );
}
