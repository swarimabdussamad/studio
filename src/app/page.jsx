import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import SectionIntro from "@/components/SectionIntro";
import { GridList, GridListItem } from "@/components/GridList";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";

const currentBuilds = [
  {
    name: "AutoWaba",
    status: "Building",
    description:
      "A WhatsApp business automation dashboard. Manage conversations, run chatbots, send broadcast messages — without needing a BSP license. Users connect their own Meta Business account.",
    href: "/apps",
  },
  {
    name: "AutoTechify",
    status: "Live",
    description:
      "This site. A personal technical hub for blog posts, build logs, experiments, and shipped apps.",
    href: "/",
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

export default function Home() {
  return (
    <main className="text-black">
      {/* Hero */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Building production systems and automation software — in public.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            I work with real IT environments, build automation tools, and
            document everything along the way. No fake case studies. No
            corporate speak. Just engineering.
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
          I build small, useful software in public — sharing progress, mistakes,
          and lessons as I go.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {currentBuilds.map((build) => (
            <FadeIn key={build.name}>
              <Link href={build.href} className="group block">
                <div className="rounded-3xl border border-neutral-200 p-8 transition group-hover:border-neutral-400">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl font-semibold text-neutral-950">
                      {build.name}
                    </h3>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        build.status === "Live"
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {build.status}
                    </span>
                  </div>
                  <p className="mt-4 text-base text-neutral-600">
                    {build.description}
                  </p>
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
          Everything on this site comes from real work. If I haven’t done it, I
          don’t write about it.
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
