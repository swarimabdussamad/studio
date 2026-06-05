import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import { GridList, GridListItem } from "@/components/GridList";
import SectionIntro from "@/components/SectionIntro";

export const metadata = {
  title: "Labs — Scripts, Prototypes & Configs",
  description:
    "Automation scripts, prototypes, and config files for IT teams — server maintenance scripts, Docker and Nginx setups, WhatsApp webhook parsers, and business automation tools.",
  alternates: { canonical: "/labs" },
  openGraph: {
    title: "Labs — Scripts, Prototypes & Configs | AutoTechify",
    description:
      "Automation scripts, prototypes, and config files for IT teams — server maintenance scripts, Docker and Nginx setups, WhatsApp webhook parsers, and business automation tools.",
    url: "/labs",
  },
};

const labCategories = [
  {
    title: "Scripts",
    description:
      "Automation scripts I’ve written for real tasks — server maintenance, data processing, API integrations. Documented well enough that you can actually use them.",
  },
  {
    title: "Prototypes",
    description:
      "Early-stage ideas that aren’t products yet. Sometimes they become apps, sometimes they stay here as proof-of-concepts.",
  },
  {
    title: "Configurations",
    description:
      "Config files, templates, and setups for tools I use regularly — Nginx, Docker, CI pipelines, monitoring stacks.",
  },
  {
    title: "Business Automation Tools",
    description:
      "Small tools designed to eliminate manual work in business operations. API integrations, workflow triggers, notification systems — things that run quietly and save time every day.",
  },
];

const comingExperiments = [
  {
    name: "WhatsApp Cloud API webhook parser",
    description:
      "A lightweight parser for handling incoming WhatsApp webhook events. Built while working on AutoWaba.",
  },
  {
    name: "Self-hosted uptime monitor",
    description:
      "A minimal uptime monitor that pings your services and sends WhatsApp alerts when something goes down.",
  },
  {
    name: "Docker compose templates",
    description:
      "Production-ready Docker Compose setups for common self-hosted stacks — with proper volumes, networks, and restart policies.",
  },
];

export default function LabsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Labs"
        title="Where ideas start before they become products."
      >
        <p>
          Labs is where I experiment. Scripts, prototypes, configurations, and
          small tools that solve one specific problem. Nothing polished — just
          real, working code that I’m willing to share.
        </p>
      </PageIntro>

      <SectionIntro
        eyebrow="What’s here"
        title="Types of experiments."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Everything in labs has been tested in my own environment before it
          shows up here.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          {labCategories.map((cat) => (
            <GridListItem key={cat.title} title={cat.title}>
              {cat.description}
            </GridListItem>
          ))}
        </GridList>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-neutral-950">
            Coming first
          </h2>
          <p className="mt-2 text-base text-neutral-600">
            These are being prepared now. Each will include source code,
            documentation, and context on why I built it.
          </p>
          <div className="mt-10 space-y-6">
            {comingExperiments.map((exp) => (
              <div
                key={exp.name}
                className="flex gap-x-6 rounded-3xl border border-dashed border-neutral-300 p-6"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-neutral-200 text-sm text-neutral-400">
                  —
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-neutral-950">
                    {exp.name}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </>
  );
}
