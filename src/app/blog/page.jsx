import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import { GridList, GridListItem } from "@/components/GridList";
import SectionIntro from "@/components/SectionIntro";
import SubscribeForm from "@/components/SubscribeForm";

const topics = [
  {
    title: "IT Environment",
    description:
      "Real setups from production environments. Server configs, network architecture, storage, monitoring — how things actually look when they have to work.",
  },
  {
    title: "Automation",
    description:
      "Scripts, workflows, and tools I’ve built to stop doing things manually. Mostly Python, bash, and whatever integrates with the systems I’m already running.",
  },
  {
    title: "Build Logs",
    description:
      "Week-by-week progress on AutoWaba and other projects I’m working on. Raw, honest, and updated as things change.",
  },
  {
    title: "WhatsApp & Meta Cloud API",
    description:
      "Deep dives into the WhatsApp Business Cloud API — what the documentation doesn’t tell you, what breaks, and how to build on top of it.",
  },
  {
    title: "Tools & Stack",
    description:
      "The tools, services, and decisions behind my setup. What I chose, what I replaced, and why.",
  },
  {
    title: "Case Studies",
    description:
      "End-to-end breakdowns of problems I’ve solved — from the initial issue to the final solution, including what I tried that didn’t work.",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageIntro eyebrow="Blog" title="Writing from real production systems.">
        <p>
          I write about things I’ve actually done — IT environments, automation
          pipelines, and building software in public. No filler, no SEO padding.
          If I haven’t experienced it, I won’t write about it.
        </p>
      </PageIntro>

      <SectionIntro
        eyebrow="Topics"
        title="What I write about."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Posts are dropping soon. In the meantime, here’s what to expect.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          {topics.map((topic) => (
            <GridListItem key={topic.title} title={topic.title}>
              {topic.description}
            </GridListItem>
          ))}
        </GridList>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn className="-mx-6 rounded-4xl border border-neutral-200 px-6 py-16 sm:mx-0 sm:px-16 sm:py-24">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              First posts coming soon.
            </h2>
            <p className="mt-4 text-base text-neutral-600">
              Subscribe to get notified when I publish. No newsletters full of
              nothing — just posts when they’re ready.
            </p>
            <SubscribeForm variant="blog" />
          </div>
        </FadeIn>
      </Container>
    </>
  );
}
