import Link from "next/link";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import LanguageToggle from "@/components/LanguageToggle";
import SectionIntro from "@/components/SectionIntro";
import { GridList, GridListItem } from "@/components/GridList";
import ContactSection from "@/components/ContactSection";
import AutoWabaForm from "@/components/AutoWabaForm";

const pageUrl = "https://autotechify.com/whatsapp-crm-qatar";

const description =
  "AutoWaba is a free WhatsApp CRM for businesses in Qatar, built on the official Meta Cloud API. Send broadcast campaigns, build chatbot flows, manage a shared team inbox, and let AI trained on your own business answer customers in Arabic and English — automatically. Free to start during early access.";

export const metadata = {
  title: "Free WhatsApp CRM in Qatar — AutoWaba",
  description,
  keywords: [
    "free WhatsApp CRM Qatar",
    "free WhatsApp CRM",
    "WhatsApp CRM Qatar",
    "WhatsApp Business API Qatar",
    "WhatsApp marketing software Qatar",
    "WhatsApp chatbot Qatar",
    "WhatsApp automation Doha",
    "Wati alternative Qatar",
    "AutoWaba",
  ],
  alternates: {
    canonical: "/whatsapp-crm-qatar",
    languages: {
      en: "/whatsapp-crm-qatar",
      ar: "/ar/whatsapp-crm-qatar",
      "x-default": "/whatsapp-crm-qatar",
    },
  },
  openGraph: {
    title: "Free WhatsApp CRM in Qatar — AutoWaba | AutoTechify",
    description,
    url: "/whatsapp-crm-qatar",
  },
};

// Features shown on the page. Keep each claim true to what AutoWaba does.
const features = [
  {
    title: "AI trained on your business",
    description:
      "Upload your catalog, price list, or FAQs and the AI answers customer questions on WhatsApp automatically — in your tone, in Arabic or English.",
  },
  {
    title: "Broadcast campaigns",
    description:
      "Send approved template messages to your customer list — offers, reminders, and updates — and track who opened and replied.",
  },
  {
    title: "Chatbot builder",
    description:
      "Build condition-based flows that qualify leads, answer common questions, and route the rest to a human.",
  },
  {
    title: "Shared team inbox",
    description:
      "Your whole team works one WhatsApp number together, with smart routing by sender, keyword, or rules you define.",
  },
  {
    title: "Official Meta Cloud API",
    description:
      "Built on WhatsApp's official Cloud API — stable, compliant, and connected to your own Meta Business account and number.",
  },
  {
    title: "Built and supported in Qatar",
    description:
      "Made by a developer based in Qatar who understands local businesses — real support in your timezone, not a ticket queue overseas.",
  },
];

// One source of truth for the FAQ: rendered visibly AND emitted as FAQPage
// structured data so Google and AI search engines can quote the answers.
const faqs = [
  {
    q: "What is a WhatsApp CRM?",
    a: "A WhatsApp CRM is software that lets a business manage all its WhatsApp customer conversations in one place — with broadcasts, chatbots, a shared team inbox, and analytics — using the official WhatsApp Business API instead of a personal phone.",
  },
  {
    q: "Does AutoWaba work for businesses in Qatar?",
    a: "Yes. AutoWaba is built and supported from Qatar and works for any business with a Meta Business account and a phone number, including companies in Doha and across Qatar and the wider GCC.",
  },
  {
    q: "Can the AI reply to customers in Arabic?",
    a: "Yes. The AI is trained on your own business documents and can answer customer questions in both Arabic and English, in your business's tone.",
  },
  {
    q: "Is AutoWaba the official WhatsApp Business API?",
    a: "Yes. AutoWaba runs on WhatsApp's official Meta Cloud API, connected to your own Meta Business account and verified number — it is not an unofficial or grey-market tool.",
  },
  {
    q: "How is AutoWaba different from Wati?",
    a: "Both are built on the official WhatsApp Cloud API. AutoWaba's focus is built-in AI trained on your own business knowledge so it answers customers automatically, plus local support based in Qatar. Wati is an established global platform; AutoWaba is a leaner, AI-first alternative with on-the-ground support in the GCC.",
  },
  {
    q: "Is AutoWaba really free?",
    a: "Yes — AutoWaba is free to start during early access. You can sign up and use it without paying. Join the list below and we'll get you onboarded.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "AutoWaba — WhatsApp CRM",
      serviceType: "WhatsApp CRM and business automation software",
      description,
      url: pageUrl,
      provider: { "@id": "https://autotechify.com/#organization" },
      areaServed: [
        { "@type": "Country", name: "Qatar" },
        { "@type": "City", name: "Doha" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://autotechify.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "WhatsApp CRM in Qatar",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function WhatsAppCrmQatarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <LanguageToggle href="/ar/whatsapp-crm-qatar" label="عربية" />
          <h1 className="mt-8">
            <span className="block font-display text-base font-semibold text-neutral-950">
              Free WhatsApp CRM · Qatar
            </span>
            <span className="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
              The free WhatsApp CRM built for businesses in Qatar.
            </span>
          </h1>
          <div className="mt-6 max-w-3xl text-xl text-neutral-600">
            <p>
              AutoWaba turns your WhatsApp number into a full customer platform —
              broadcasts, chatbots, a shared team inbox, and AI that answers
              customers in Arabic and English automatically. Built on the official
              Meta Cloud API, built and supported from Qatar — and free to start
              during early access.
            </p>
          </div>
          <div className="mt-8">
            <AutoWabaForm cta="Get free access" source="whatsapp-crm-qatar" />
          </div>
        </FadeIn>
      </Container>

      <SectionIntro
        eyebrow="What it does"
        title="Everything you need to run customer chat on WhatsApp."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          One tool that replaces hours of manual replies every week — without
          adding more people to your team.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          {features.map((feature) => (
            <GridListItem key={feature.title} title={feature.title}>
              {feature.description}
            </GridListItem>
          ))}
        </GridList>
      </Container>

      <SectionIntro
        eyebrow="Why Qatar businesses choose AutoWaba"
        title="Local support, AI-first, official API."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Most WhatsApp CRMs are built overseas with support in another
          timezone. AutoWaba is made in Qatar, answers your customers in Arabic
          and English, and runs on WhatsApp's official Cloud API — so you get a
          modern, AI-first platform with real local support.
        </p>
      </SectionIntro>

      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <h2 className="font-display text-3xl font-semibold text-neutral-950">
            Frequently asked questions
          </h2>
          <dl className="mt-10 max-w-3xl space-y-8">
            {faqs.map((item) => (
              <div key={item.q}>
                <dt className="font-display text-lg font-semibold text-neutral-950">
                  {item.q}
                </dt>
                <dd className="mt-3 text-base text-neutral-600">{item.a}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-base text-neutral-600">
            Want the full feature list?{" "}
            <Link
              href="/apps"
              className="font-semibold text-neutral-950 underline"
            >
              See AutoWaba on the Apps page
            </Link>
            .
          </p>
        </FadeIn>
      </Container>

      <ContactSection />
    </>
  );
}
