import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import PageIntro from "@/components/PageIntro";
import SectionIntro from "@/components/SectionIntro";
import { GridList, GridListItem } from "@/components/GridList";

const principles = [
  {
    title: "Real over polished",
    description:
      "I write about things I’ve actually done. If a system broke, I’ll say it broke. If a solution is messy, I’ll show the mess. The internet has enough perfect tutorials.",
  },
  {
    title: "Ship early, improve publicly",
    description:
      "I don’t wait until things are perfect. I share early, document the progress, and improve based on what I learn and what people ask.",
  },
  {
    title: "One product at a time",
    description:
      "I’m not building ten things at once. AutoWaba is the focus right now. When it’s stable, I’ll move to the next. Scattered effort produces nothing.",
  },
  {
    title: "Document everything",
    description:
      "Every IT problem I solve, every automation I build, every decision I make — written down. Mostly for myself, but useful for anyone in a similar situation.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About" title="A developer building in public.">
        <p>
          I work with real production IT environments and build automation
          software. AutoTechify is where I document what I learn and ship what I
          build — without pretending to be a company.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base text-neutral-600">
          <p>
            I started this because I kept solving the same types of problems —
            setting up production systems, automating repetitive workflows,
            figuring out tools that nobody documents clearly — and I wasn’t
            writing any of it down. This site fixes that.
          </p>
          <p>
            Right now I’m building <strong className="text-neutral-950">AutoWaba</strong>, a
            WhatsApp business automation dashboard that lets businesses manage
            conversations, chatbots, and broadcast campaigns using the Meta
            Cloud API — without needing an official BSP license. It’s my first
            real SaaS and I’m building it completely in public.
          </p>
          <p>
            I also share case studies from my IT environment — server
            configurations, network setups, automation pipelines, and the
            failures that taught me the most. If it helped me, it’ll help
            someone else.
          </p>
        </div>
      </PageIntro>

      <SectionIntro
        eyebrow="How I work"
        title="Principles I try to stick to."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>These are not values for a company. They’re just how I think.</p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          {principles.map((item) => (
            <GridListItem key={item.title} title={item.title}>
              {item.description}
            </GridListItem>
          ))}
        </GridList>
      </Container>

      <ContactSection />
    </>
  );
}
