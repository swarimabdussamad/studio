import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import MarkdocContent from "@/components/MarkdocContent";
import { getAllPosts, getPost } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} — AutoTechify Blog`,
    description: post.summary,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `/blog/${post.slug}`,
      type: "article",
      ...(post.coverImage ? { images: [{ url: post.coverImage }] } : {}),
    },
  };
}

function formatDate(value) {
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    author: { "@type": "Person", name: "Swarim Abdussamad" },
    publisher: { "@id": "https://autotechify.com/#organization" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://autotechify.com/blog/${post.slug}`,
    },
    ...(post.coverImage
      ? { image: `https://autotechify.com${post.coverImage}` }
      : {}),
  };

  return (
    <article className="mt-24 sm:mt-32 lg:mt-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Container>
        <FadeIn>
          <header className="mx-auto flex max-w-5xl flex-col text-center">
            <p className="font-display text-base font-semibold text-neutral-950">
              {post.categoryLabel}
            </p>
            <h1 className="mt-6 font-display text-4xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-5xl">
              {post.title}
            </h1>
            <time
              dateTime={post.publishedDate}
              className="order-first text-sm text-neutral-600"
            >
              {formatDate(post.publishedDate)}
            </time>
          </header>
        </FadeIn>
      </Container>

      <Container className="mt-16 sm:mt-20">
        <FadeIn>
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt=""
              width={1216}
              height={684}
              className="mb-16 aspect-[16/9] w-full rounded-3xl object-cover"
            />
          ) : null}

          <div className="prose prose-neutral mx-auto max-w-3xl prose-headings:font-display prose-headings:font-semibold prose-headings:text-neutral-950 prose-a:font-semibold prose-a:text-neutral-950 prose-pre:rounded-2xl prose-pre:bg-neutral-950">
            <MarkdocContent node={post.contentNode} />
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <Link
            href="/blog"
            className="inline-flex items-center gap-x-2 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
          >
            <span aria-hidden="true">←</span>
            Back to all posts
          </Link>
        </FadeIn>
      </Container>
    </article>
  );
}
