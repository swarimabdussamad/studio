import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import FadeIn, { FadeInStagger } from "@/components/FadeIn";
import { GridList, GridListItem } from "@/components/GridList";
import SectionIntro from "@/components/SectionIntro";
import SubscribeForm from "@/components/SubscribeForm";
import Border from "@/components/Border";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog — IT & Automation Write-ups",
  description:
    "Real problems from production IT environments — server configs, automation scripts, WhatsApp Cloud API deep dives, and honest build logs from AutoWaba.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — IT & Automation Write-ups | AutoTechify",
    description:
      "Real problems from production IT environments — server configs, automation scripts, WhatsApp Cloud API deep dives, and honest build logs from AutoWaba.",
    url: "/blog",
  },
};

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
    title: "Business Automation",
    description:
      "How automation applies to real business operations — reducing headcount on repetitive tasks, cutting process overhead, and building systems that earn back time every single day.",
  },
  {
    title: "Case Studies",
    description:
      "End-to-end breakdowns of problems I’ve solved — from the initial issue to the final solution, including what I tried that didn’t work.",
  },
];

function formatDate(value) {
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <PageIntro eyebrow="Blog" title="Writing from real production systems.">
        <p>
          I write about things I’ve actually done — IT environments, automation
          pipelines, and building software in public. No filler, no SEO padding.
          If I haven’t experienced it, I won’t write about it.
        </p>
      </PageIntro>

      {posts.length > 0 ? (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <FadeInStagger className="space-y-24 lg:space-y-32">
            {posts.map((post) => (
              <FadeIn key={post.slug}>
                <article>
                  <Border className="pt-16">
                    <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                      <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                        <h2 className="font-display text-2xl font-semibold text-neutral-950">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h2>
                        <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                          <dt className="sr-only">Published</dt>
                          <dd className="absolute left-0 top-0 text-sm text-neutral-950 lg:static">
                            <time dateTime={post.publishedDate}>
                              {formatDate(post.publishedDate)}
                            </time>
                          </dd>
                          <dt className="sr-only">Category</dt>
                          <dd className="mt-6 hidden text-sm font-semibold text-neutral-950 lg:block">
                            {post.categoryLabel}
                          </dd>
                        </dl>
                        <p className="mt-6 max-w-2xl text-base text-neutral-600">
                          {post.summary}
                        </p>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="mt-8 inline-flex items-center gap-x-2 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
                          aria-label={`Read more: ${post.title}`}
                        >
                          Read more
                          <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </div>
                  </Border>
                </article>
              </FadeIn>
            ))}
          </FadeInStagger>
        </Container>
      ) : (
        <>
          <SectionIntro
            eyebrow="Topics"
            title="What I write about."
            className="mt-24 sm:mt-32 lg:mt-40"
          >
            <p>Posts are dropping soon. In the meantime, here’s what to expect.</p>
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
        </>
      )}

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn className="-mx-6 rounded-4xl border border-neutral-200 px-6 py-16 sm:mx-0 sm:px-16 sm:py-24">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              {posts.length > 0 ? "Get new posts in your inbox." : "First posts coming soon."}
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
