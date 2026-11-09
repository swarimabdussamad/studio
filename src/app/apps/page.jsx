"use client";

import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import ContactSection from "@/components/ContactSection";
import AutoWabaForm from "@/components/AutoWabaForm";
import Link from "next/link";

// The product's own mark, drawn from the same 72-unit geometry as the icons
// the live site ships (wa-group-sender/ui/public/icons/icon.svg) rather than
// an exported image of them, so the two cannot drift apart. The translate
// centres the artwork, which sits slightly right of and below the middle of
// its canvas.
function WaSenderMark() {
  return (
    <span
      aria-hidden="true"
      className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-[#0B141A]"
    >
      <svg viewBox="0 0 72 72" className="h-9 w-9">
        <g transform="translate(-1.5 -1.5)">
          <rect x="12" y="20" width="34" height="26" rx="8" fill="#22C55E" />
          <polygon points="18,44 18,56 28,46" fill="#22C55E" />
          <path
            d="M53 26a14 14 0 0 1 0 20"
            fill="none"
            stroke="#22C55E"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M61 19a24 24 0 0 1 0 34"
            fill="none"
            stroke="#16A34A"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </span>
  );
}

const apps = [
  {
    name: "AutoWaba",
    tagline: "WhatsApp Business Automation",
    offer: "$2 for 2 months",
    description:
      "Manage your WhatsApp customer queries easily with AutoWaba — auto-assign chats to the right sales agent and let AI reply with the context you set about your business, courses, and more.",
    details: [
      "Train it on your business — upload your catalog, FAQs, or any document and the AI answers customer questions on WhatsApp automatically, in your tone",
      "Users connect their own Meta Business account and phone number",
      "Chatbot builder with condition-based flows",
      "Broadcast campaigns with template messages",
      "Multi-agent conversation inbox",
      "Smart message routing — forward incoming messages to specific agents based on the sender, keyword, or custom rules you define",
      "Webhook integrations for external automation",
    ],
    href: "https://autowaba.autotechify.com",
    cta: "Visit site",
    buildLog: "/build-log",
    comingSoon: false,
  },
  {
    name: "WA Sender",
    tagline: "WhatsApp campaigns, without the Meta paperwork",
    offer: "Free in early access",
    status: "Early access",
    description:
      "Send one message — with images, PDFs or any file — to the WhatsApp groups and contacts you already talk to. No Meta Business verification, no template approval, no provider onboarding: link your own number by QR code and start sending in minutes. Rate limits, a warm-up ramp and a circuit breaker sit in front of every send to protect the number.",
    details: [
      "Links your existing WhatsApp number by QR — the same scan as WhatsApp Web",
      "Personalises every message with the recipient's own name",
      "Scheduled and recurring campaigns, run server-side with nothing left open",
      "Safety gate: daily and hourly caps, minimum gaps, active hours, circuit breaker",
      "Attachments travel with the message, and the message is the caption",
      "Full REST API with per-key rate limits, so it drops into your own product",
      "Live delivery progress, pause and resume between recipients",
    ],
    logo: WaSenderMark,
    href: "https://wasender.autotechify.com",
    cta: "Visit site",
    docs: "https://wasender.autotechify.com/docs",
    comingSoon: false,
  },
];

const planned = [
  {
    name: "Bulk Aging Report Sender",
    description:
      "Upload an aging report and it emails each person their own outstanding balance separately — sent from your own email account, using your own template message. No more manually splitting the report and sending statements one by one.",
  },
  {
    name: "Sales Analysis Dashboard",
    description:
      "A live sales dashboard with MTD distribution, year-over-year comparison, and a full automation log. The automation logs into your ERP like a human, pulls the MIS reports, and uploads them to the dashboard automatically — so you always get live updates without manual exports.",
  },
  {
    name: "AI Meeting Minutes",
    description:
      "Hit record when your meeting starts, stop when it ends — AI does the rest. It auto-generates structured minutes with discussion points grouped under each action item, broken down into tasks and subtasks. Drafts auto-save every 2 seconds, so nothing is lost even if your internet drops mid-meeting. Built for a dead-simple UX.",
  },
];

export default function AppsPage() {
  return (
    <>
      <PageIntro eyebrow="Apps" title="Software built to reduce workload and save time.">
        <p>
          These are real products built around real business problems. Each one
          automates something that was previously done manually — saving hours,
          reducing overhead, and scaling without needing more people.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-16">
          {apps.map((app) => (
            <FadeIn key={app.name}>
              <div className="rounded-4xl border border-neutral-200 p-8 sm:p-12">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-x-4">
                    {app.logo ? <app.logo /> : null}
                    <div>
                      <h2 className="font-display text-3xl font-semibold text-neutral-950">
                        {app.name}
                      </h2>
                      <p className="mt-1 text-sm font-medium text-neutral-500">
                        {app.tagline}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {app.offer ? (
                      <span className="rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-700">
                        {app.offer}
                      </span>
                    ) : null}
                    {app.status ? (
                      <span
                        className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                          app.status === "Live"
                            ? "bg-green-100 text-green-700"
                            : app.status === "Beta"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {app.status}
                      </span>
                    ) : null}
                  </div>
                </div>
                <p className="mt-6 text-base text-neutral-600 max-w-2xl">
                  {app.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {app.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-x-2 text-sm text-neutral-600"
                    >
                      <span className="mt-1 text-neutral-400">—</span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  {app.comingSoon ? (
                    <AutoWabaForm cta={app.cta} />
                  ) : (
                    <Link
                      href={app.href}
                      {...(app.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="inline-flex items-center gap-x-2 rounded-2xl bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
                    >
                      {app.cta}
                      <span aria-hidden="true">→</span>
                    </Link>
                  )}
                  {app.buildLog ? (
                    <Link
                      href={app.buildLog}
                      className="inline-flex items-center gap-x-2 rounded-2xl border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:border-neutral-950"
                    >
                      Read the build log
                      <span aria-hidden="true">→</span>
                    </Link>
                  ) : null}
                  {app.docs ? (
                    <Link
                      href={app.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-x-2 rounded-2xl border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:border-neutral-950"
                    >
                      Docs &amp; API
                      <span aria-hidden="true">→</span>
                    </Link>
                  ) : null}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>

      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-neutral-950">
            On the roadmap
          </h2>
          <p className="mt-2 text-base text-neutral-600">
            Tools in progress — each designed to reduce manual work for IT teams
            and business operations.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {planned.map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border border-dashed border-neutral-300 p-8"
              >
                <h3 className="font-display text-lg font-semibold text-neutral-700">
                  {item.name}
                </h3>
                <p className="mt-3 text-sm text-neutral-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </>
  );
}
