import { createReader } from "@keystatic/core/reader";
import keystaticConfig, { POST_CATEGORIES } from "../../keystatic.config";

const reader = createReader(process.cwd(), keystaticConfig);

export function categoryLabel(value) {
  return POST_CATEGORIES.find((c) => c.value === value)?.label ?? value;
}

// All posts, newest first. Each item: { slug, title, summary, category,
// categoryLabel, publishedDate, coverImage }.
export async function getAllPosts() {
  const entries = await reader.collections.posts.all();
  return entries
    .map(({ slug, entry }) => ({
      slug,
      title: entry.title,
      summary: entry.summary,
      category: entry.category,
      categoryLabel: categoryLabel(entry.category),
      publishedDate: entry.publishedDate,
      coverImage: entry.coverImage,
    }))
    .sort((a, b) => (a.publishedDate < b.publishedDate ? 1 : -1));
}

// A single post including its parsed Markdoc node, ready to render.
export async function getPost(slug) {
  const entry = await reader.collections.posts.read(slug);
  if (!entry) return null;

  // Content fields are returned lazily as an async function by the reader.
  const resolved =
    typeof entry.content === "function" ? await entry.content() : entry.content;

  return {
    slug,
    title: entry.title,
    summary: entry.summary,
    category: entry.category,
    categoryLabel: categoryLabel(entry.category),
    publishedDate: entry.publishedDate,
    coverImage: entry.coverImage,
    contentNode: resolved.node,
  };
}
