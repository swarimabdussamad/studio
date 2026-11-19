import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import SectionIntro from "@/components/SectionIntro";
import { GridList, GridListItem } from "@/components/GridList";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";

const currentBuilds = [
  {
    name: "AutoWaba",
    description:
      "Manage your WhatsApp customer queries easily with AutoWaba — auto-assign chats to the right sales agent and let AI reply with the context you set about your business, courses, and more.",
    href: "https://autowaba.autotechify.com",
  },
  {
    name: "WA Sender",
    offer: "Free in early access",
    description:
      "Send a WhatsApp campaign to the groups and contacts you already talk to — personalised, with attachments, scheduled if you want. It links your existing number by QR code, so there is no Meta business verification and no template approval to wait for. A REST API puts the same sending inside your own product.",
    href: "https://wasender.autotechify.com",
  },
  {
    name: "Automation Scripts & Tools",
    status: "Labs",
    description:
      "Scripts, configurations, and small tools built to eliminate repetitive work. Designed for IT teams and business owners who want practical automation without complex setup.",
    href: "/labs",
  },
];

const heroProducts = [
  {
    name: "AutoWaba",
    tagline: "WhatsApp Business automation with AI replies",
    host: "autowaba.autotechify.com",
    href: "https://autowaba.autotechify.com",
    logo: "/email/autowaba.png",
    urlColor: "text-blue-400",
    hoverRing: "hover:ring-blue-500/50 focus-visible:ring-blue-500",
    logoShadow: "shadow-blue-600/40",
    arrowHover: "group-hover:bg-blue-500",
  },
  {
    name: "WA Sender",
    tagline: "WhatsApp campaigns to your groups & contacts",
    host: "wasender.autotechify.com",
    href: "https://wasender.autotechify.com",
    logo: "/email/wasender.png",
    urlColor: "text-green-400",
    hoverRing: "hover:ring-green-500/50 focus-visible:ring-green-500",
    logoShadow: "shadow-green-600/30",
    arrowHover: "group-hover:bg-green-500 group-hover:text-neutral-950",
    badge: "Free early access",
  },
];

const contentSections = [
  {
    name: "Blog",
    href: "/blog",
    description:
      "Real problems from real production environments. IT configurations, system failures, automation wins, and honest lessons.",
  },
  {
    name: "Labs",
    href: "/labs",
    description:
      "Experiments, scripts, and prototypes. Where ideas start before they grow into real products.",
  },
  {
    name: "Apps",
    href: "/apps",
    description:
      "Software I’ve built and shipped — AutoWaba and WA Sender, with more on the way.",
  },
  {
    name: "Build Log",
    href: "/build-log",
    description:
      "The full development history of AutoWaba, grouped by release phase — the decisions, the blockers, and what actually shipped.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://autotechify.com/#organization",
      name: "AutoTechify",
      url: "https://autotechify.com",
      logo: "https://autotechify.com/tortoise-logo.svg",
      description:
        "A developer documenting real IT environments and building automation software publicly, including AutoWaba — a WhatsApp business automation platform.",
      founder: {
        "@type": "Person",
        name: "Swarim Abdussamad",
      },
      email: "mail@d4dx.co",
      sameAs: ["https://instagram.com/autotechify.com_"],
    },
    {
      "@type": "WebSite",
      "@id": "https://autotechify.com/#website",
      url: "https://autotechify.com",
      name: "AutoTechify",
      publisher: { "@id": "https://autotechify.com/#organization" },
    },
  ],
};

export default function Home() {
  return (
    <main className="text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <Container className="mt-12 sm:mt-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
        <FadeIn className="max-w-3xl lg:col-span-6">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Give it a try. See what AutoTechify can do for your business.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            I build automation tools and systems for businesses — from small
            teams to large operations. Less manual work, fewer bottlenecks, more
            done with the people you already have.
          </p>
          <div className="mt-8 flex gap-x-4">
            <Link
              href="/blog"
              className="rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Read the blog
            </Link>
            <Link
              href="/apps"
              className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:border-neutral-950"
            >
              See what I’m building
            </Link>
          </div>
        </FadeIn>

        <FadeIn className="lg:col-span-6">
          <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-neutral-950 p-6 shadow-2xl shadow-neutral-950/30 ring-1 ring-white/10 sm:p-10">
            {/* Ambient glows in each product's colour, plus a faint dot grid */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-24 -top-24 -z-10 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-28 -right-20 -z-10 h-72 w-72 rounded-full bg-green-500/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 opacity-[0.15] [background-image:radial-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
            />

            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
                Our products
              </p>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-neutral-300 ring-1 ring-white/10">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75 motion-reduce:hidden" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
                Live now
              </span>
            </div>
            <h2 className="mt-5 font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Tools you can use today.
            </h2>

            <div className="mt-8 space-y-4">
              {heroProducts.map((product) => (
                <a
                  key={product.name}
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex items-center gap-x-5 rounded-3xl bg-white/[0.04] p-5 ring-1 ring-white/10 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 sm:p-6 ${product.hoverRing}`}
                >
                  <img
                    src={product.logo}
                    alt=""
                    width={72}
                    height={72}
                    className={`h-16 w-16 flex-none rounded-2xl shadow-lg ring-1 ring-white/10 transition duration-300 group-hover:scale-105 sm:h-[72px] sm:w-[72px] ${product.logoShadow}`}
                  />
                  <div className="min-w-0 flex-auto">
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                      <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                        {product.name}
                      </h3>
                      {product.badge ? (
                        <span className="rounded-full bg-green-500/15 px-2.5 py-0.5 text-[11px] font-semibold text-green-400 ring-1 ring-inset ring-green-500/30">
                          {product.badge}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 text-sm leading-6 text-neutral-400 sm:text-[15px]">
                      {product.tagline}
                    </p>
                    <p className={`mt-1.5 truncate text-xs font-semibold sm:text-sm ${product.urlColor}`}>
                      {product.host}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className={`hidden h-11 w-11 flex-none items-center justify-center rounded-full bg-white/10 text-lg text-white transition duration-300 group-hover:translate-x-1 sm:flex ${product.arrowHover}`}
                  >
                    →
                  </span>
                </a>
              ))}
            </div>

            <Link
              href="/apps"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-neutral-300 transition hover:text-white"
            >
              See all apps and what’s coming next
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </FadeIn>
        </div>
      </Container>

      {/* Currently Building */}
      <SectionIntro
        eyebrow="Currently building"
        title="What I’m working on right now."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Every tool I build starts from a real problem — something that was
          wasting time, costing money, or needing more people than it should.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {currentBuilds.map((build) => (
            <FadeIn key={build.name}>
              <Link
                href={build.href}
                className="group block"
                {...(build.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <div className="h-full cursor-pointer rounded-3xl border border-neutral-200 p-8 transition duration-300 group-hover:-translate-y-1 group-hover:border-neutral-950 group-hover:shadow-xl group-hover:shadow-neutral-950/5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl font-semibold text-neutral-950">
                      {build.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      {build.offer ? (
                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                          {build.offer}
                        </span>
                      ) : null}
                      {build.status ? (
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            build.status === "Live"
                              ? "bg-green-100 text-green-700"
                              : build.status === "Beta"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {build.status}
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <p className="mt-4 text-base text-neutral-600">
                    {build.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-x-2 text-sm font-semibold text-neutral-950">
                    {build.href.startsWith("http") ? "Visit site" : "Learn more"}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>

      {/* What’s here */}
      <SectionIntro
        eyebrow="What’s here"
        title="A technical hub, not a portfolio."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Everything here comes from real work — automation built for real
          businesses, documented clearly enough to use.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          {contentSections.map((section) => (
            <GridListItem key={section.name} title={section.name}>
              <Link
                href={section.href}
                className="transition hover:text-neutral-950"
              >
                {section.description}
              </Link>
            </GridListItem>
          ))}
        </GridList>
      </Container>

      <ContactSection />
    </main>
  );
}
