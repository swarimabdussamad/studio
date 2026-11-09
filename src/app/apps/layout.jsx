// The apps page is a client component ("use client"), so its metadata lives
// here in a server-component layout wrapper instead.
//
// Two products are listed on this page now, and the page-level description has
// to cover both or the search snippet describes only one of them. AutoWaba
// stays first: it is the larger product and the one most of the inbound search
// traffic is already looking for.
const description =
  "Two WhatsApp products from AutoTechify. AutoWaba is a free WhatsApp CRM on the official Meta Cloud API — broadcasts, chatbot flows, a shared team inbox and AI trained on your own business. WA Sender sends campaigns from your existing WhatsApp number by QR code, with no Meta verification and no template approval. Both free to start during early access.";

export const metadata = {
  title: "WhatsApp CRM & Campaign Software — AutoWaba and WA Sender",
  description,
  keywords: [
    "free WhatsApp CRM",
    "WhatsApp CRM",
    "WhatsApp Business API",
    "WhatsApp marketing software",
    "WhatsApp chatbot",
    "WhatsApp broadcast tool",
    "WhatsApp campaign tool",
    "send WhatsApp to groups",
    "WhatsApp API without Meta verification",
    "Meta Cloud API",
    "AutoWaba",
    "WA Sender",
    "Wati alternative",
  ],
  alternates: { canonical: "/apps" },
  openGraph: {
    title: "WhatsApp CRM & Campaign Software — AutoWaba and WA Sender | AutoTechify",
    description,
    url: "/apps",
  },
};

// SoftwareApplication schema lets Google show rich results and lets AI search
// engines (ChatGPT, Perplexity, Gemini) describe these products accurately.
//
// One entry per product, emitted as an array in a single JSON-LD block.
// Google accepts an array at the top level, and keeping them together means a
// third product is one object rather than a third <script> tag.
const autowabaDescription =
  "AutoWaba is a free WhatsApp CRM and business automation platform built on the official Meta Cloud API. Run broadcast campaigns, build chatbot flows, manage a shared team inbox, and let AI trained on your own business answer customer questions automatically on WhatsApp. Free to start during early access.";

const waSenderDescription =
  "WA Sender sends one message — with images, PDFs or any file — to the WhatsApp groups and contacts you already talk to. It links your existing number by QR code, so there is no Meta Business verification, no template approval and no provider onboarding. Rate limits, a warm-up ramp and a circuit breaker protect the number, and a REST API drops the same sending into your own product. Free during early access.";

const appsJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AutoWaba",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://autowaba.autotechify.com",
    description: autowabaDescription,
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
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "WA Sender",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://wasender.autotechify.com",
    description: waSenderDescription,
    publisher: { "@id": "https://autotechify.com/#organization" },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free during early access, with a monthly sending limit",
    },
    featureList: [
      "Links an existing WhatsApp number by QR code — no Meta verification",
      "Personalised messages to groups and contacts",
      "Scheduled and recurring campaigns run server-side",
      "Safety gate with daily and hourly caps, warm-up ramp and circuit breaker",
      "Attachments: images, video, audio and documents",
      "REST API with per-key rate limits",
      "Live delivery progress with pause, resume and cancel",
    ],
    softwareHelp: { "@type": "WebPage", url: "https://wasender.autotechify.com/docs" },
  },
];

export default function AppsLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appsJsonLd) }}
      />
      {children}
    </>
  );
}
