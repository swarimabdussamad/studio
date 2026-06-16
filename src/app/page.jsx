import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import SectionIntro from "@/components/SectionIntro";
import { GridList, GridListItem } from "@/components/GridList";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";

const currentBuilds = [
  {
    name: "AutoWaba",
    status: "Beta",
    free: true,
    description:
      "A WhatsApp business automation dashboard, now in beta. Manage conversations, run chatbots, send broadcast campaigns, and let AI answer customer questions automatically — trained on your own business knowledge. Free to set up for 2 months while in testing.",
    href: "https://autowaba.autotechify.com",
  },
  {
    name: "Automation Scripts & Tools",
    status: "Labs",
    description:
      "Scripts, configurations, and small tools built to eliminate repetitive work. Designed for IT teams and business owners who want practical automation without complex setup.",
    href: "/labs",
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
      "Software I’ve built and shipped. Starting with AutoWaba, with more on the way.",
  },
  {
    name: "Build Logs",
    href: "/blog",
    description:
      "Week-by-week progress on what I’m building — the decisions, the blockers, and what actually works.",
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
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Automation that saves time, reduces workload, and grows with your business.
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
                      {build.free ? (
                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                          Free
                        </span>
                      ) : null}
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
