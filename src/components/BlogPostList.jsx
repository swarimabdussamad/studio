"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import FadeIn, { FadeInStagger } from "@/components/FadeIn";
import Border from "@/components/Border";

function formatDate(value) {
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostList({ posts }) {
  const categories = useMemo(() => {
    const seen = new Map();
    for (const post of posts) {
      if (!seen.has(post.category)) {
        seen.set(post.category, post.categoryLabel);
      }
    }
    return Array.from(seen, ([value, label]) => ({ value, label }));
  }, [posts]);

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "all") return posts;
    return posts.filter((post) => post.category === activeCategory);
  }, [posts, activeCategory]);

  return (
    <>
      {categories.length > 0 ? (
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeCategory === "all"
                ? "bg-neutral-950 text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.value}
              type="button"
              onClick={() => setActiveCategory(category.value)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeCategory === category.value
                  ? "bg-neutral-950 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      ) : null}

      {filteredPosts.length > 0 ? (
        <FadeInStagger
          key={activeCategory}
          className="mt-16 space-y-24 lg:space-y-32"
        >
          {filteredPosts.map((post) => (
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
      ) : (
        <p className="mt-16 text-base text-neutral-600">
          No posts in this category yet.
        </p>
      )}
    </>
  );
}
