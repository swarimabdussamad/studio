"use client";

import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import ContactSection from "@/components/ContactSection";
import Honeypot from "@/components/Honeypot";
import Link from "next/link";
import { useState } from "react";

const apps = [
  {
    name: "AutoWaba",
    tagline: "WhatsApp Business Automation",
    status: "Building",
    description:
      "A SaaS dashboard for managing WhatsApp business communications using the Meta Cloud API. Send broadcast messages, build chatbot flows, manage conversations, and track campaign analytics. With built-in AI trained on your own business knowledge — so it answers customer questions automatically, like your best employee would.",
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
    cta: "Join early access",
    comingSoon: true,
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

function AutoWabaForm({ cta }) {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState(null); // null | "loading" | "success" | "error"
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/autowaba", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      } else {
        setStatus("success");
        setMessage("You're on the list! We'll reach out when it's ready.");
        setEmail("");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <p className="text-sm font-medium text-green-600">{message}</p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap items-center gap-x-4 gap-y-3">
      <Honeypot value={website} onChange={(e) => setWebsite(e.target.value)} />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="block rounded-2xl border border-neutral-300 bg-transparent px-5 py-3 text-sm text-neutral-950 placeholder:text-neutral-400 focus:border-neutral-950 focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-2xl bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:opacity-60"
      >
        {status === "loading" ? "Submitting…" : cta}
      </button>
      {status === "error" && (
        <p className="w-full text-sm text-red-500">{message}</p>
      )}
    </form>
  );
}

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
                  <div>
                    <h2 className="font-display text-3xl font-semibold text-neutral-950">
                      {app.name}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-neutral-500">
                      {app.tagline}
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                      app.status === "Live"
                        ? "bg-green-100 text-green-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {app.status}
                  </span>
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
                <div className="mt-8">
                  {app.comingSoon ? (
                    <AutoWabaForm cta={app.cta} />
                  ) : (
                    <Link
                      href={app.href}
                      className="inline-flex rounded-2xl bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
                    >
                      {app.cta}
                    </Link>
                  )}
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
