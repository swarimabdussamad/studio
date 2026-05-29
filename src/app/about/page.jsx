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
      <PageIntro eyebrow="About" title="I build automation that works for real businesses.">
        <p>
          From small teams to large operations — I design and build systems that
          cut manual work, reduce overhead, and free people up to focus on what
          actually matters.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base text-neutral-600">
          <p>
            I work with real production IT environments and have spent years
            solving the same types of problems businesses face — repetitive
            workflows, slow manual processes, systems that need more people to
            run than they should. I started documenting and building solutions
            because I kept seeing the same inefficiencies everywhere.
          </p>
          <p>
            Right now I’m building <strong className="text-neutral-950">AutoWaba</strong>, a
            WhatsApp business automation dashboard that lets businesses manage
            conversations, run chatbots, and send broadcast campaigns using the
            Meta Cloud API — without needing an official BSP license. One tool
            that replaces hours of manual customer communication every week.
          </p>
          <p>
            Alongside that, I share automation scripts, IT configurations, and
            case studies from real environments. If you want automation
            implemented in your business — reducing workload, cutting costs, or
            building systems that scale — reach out.
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
