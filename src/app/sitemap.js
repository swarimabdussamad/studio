import { getAllPosts } from "@/lib/posts";

const baseUrl = "https://autotechify.com";

// Real, indexable pages only. /work and /process are redirect stubs and are
// intentionally excluded.
const routes = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.9 },
  { path: "/apps", changeFrequency: "weekly", priority: 0.9 },
  { path: "/whatsapp-crm-qatar", changeFrequency: "monthly", priority: 0.9 },
  { path: "/labs", changeFrequency: "weekly", priority: 0.8 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.6 },
];

export default async function sitemap() {
  const lastModified = new Date();

  const staticEntries = routes.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  // Every published blog post, so search engines can actually discover them.
  const posts = await getAllPosts();
  const postEntries = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishedDate ? new Date(post.publishedDate) : lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...postEntries];
}
