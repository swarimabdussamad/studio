import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import SectionIntro from "@/components/SectionIntro";
import { StatList, StatListItem } from "@/components/StatList";
import SubscribeForm from "@/components/SubscribeForm";
import BuildLogTimeline from "@/components/BuildLogTimeline";
import {
  buildLogAreas,
  buildLogMeta,
  buildLogPhases,
} from "@/data/autowabaBuildLog";

export const metadata = {
  title: "AutoWaba Build Log — Every Release, Grouped",
  description:
    "The full development history of AutoWaba, the WhatsApp CRM built on the Meta Cloud API — grouped by release phase, from the first commit in December 2025 to today.",
  alternates: { canonical: "/build-log" },
  openGraph: {
    title: "AutoWaba Build Log — Every Release, Grouped | AutoTechify",
    description:
      "The full development history of AutoWaba, the WhatsApp CRM built on the Meta Cloud API — grouped by release phase, from the first commit in December 2025 to today.",
    url: "/build-log",
  },
};

const monthYear = (value) =>
  new Date(value).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

const fullDate = (value) =>
  new Date(value).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://autotechify.com/build-log#page",
  name: "AutoWaba Build Log",
  description: metadata.description,
  url: "https://autotechify.com/build-log",
  about: {
    "@type": "SoftwareApplication",
    name: "AutoWaba",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android",
    url: buildLogMeta.projectUrl,
  },
  hasPart: buildLogPhases.map((phase) => ({
    "@type": "CreativeWork",
    name: `${phase.period} — ${phase.title}`,
    abstract: phase.summary,
  })),
};

export default function BuildLogPage() {
  const totalChanges = buildLogPhases.reduce(
    (total, phase) =>
      total + phase.groups.reduce((n, group) => n + group.items.length, 0),
    0
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageIntro
        eyebrow="Build Log"
        title="Eight months of building AutoWaba, in order."
      >
        <p>
          This is the development history of{" "}
          <Link
            href="/apps"
            className="font-semibold text-neutral-950 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-950"
          >
            AutoWaba
          </Link>
          , read straight from the repository. It&rsquo;s grouped into release
          phases rather than dumped as a list of commits — so you can see what
          each stretch of work was actually about, and which part of the product
          it changed.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <FadeIn>
          <StatList>
            <StatListItem
              label="Commits"
              value={buildLogMeta.totalCommits.toLocaleString()}
            />
            <StatListItem label="Release phases" value={buildLogPhases.length} />
            <StatListItem label="Changes logged" value={totalChanges} />
            <StatListItem
              label="Building since"
              value={monthYear(buildLogMeta.started)}
            />
          </StatList>
        </FadeIn>
      </Container>

      <SectionIntro
        eyebrow="How to read this"
        title="Grouped by phase, then by what it touched."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Each phase covers a stretch of work with a single theme — the calling
          system, the security pass, the launch. Inside a phase, changes are
          grouped by the area of the product they landed in. Use the filters to
          follow one area across the whole build.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <BuildLogTimeline phases={buildLogPhases} areas={buildLogAreas} />
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn className="-mx-6 rounded-4xl border border-neutral-200 px-6 py-16 sm:mx-0 sm:px-16 sm:py-24">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              Follow the build.
            </h2>
            <p className="mt-4 text-base text-neutral-600">
              Last updated {fullDate(buildLogMeta.latestUpdate)}. Subscribe and
              you&rsquo;ll get the write-up when a phase ships — or go{" "}
              <a
                href={buildLogMeta.projectUrl}
                className="font-semibold text-neutral-950 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-950"
              >
                try AutoWaba
              </a>{" "}
              and see it for yourself.
            </p>
            <SubscribeForm variant="blog" />
          </div>
        </FadeIn>
      </Container>
    </>
  );
}
