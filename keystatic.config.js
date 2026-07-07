import { config, fields, collection } from "@keystatic/core";

// Categories mirror the blog "Topics" so posts slot into the same taxonomy.
export const POST_CATEGORIES = [
  { label: "IT Environment", value: "it-environment" },
  { label: "Automation", value: "automation" },
  { label: "Build Logs", value: "build-logs" },
  { label: "WhatsApp & Meta Cloud API", value: "whatsapp-cloud-api" },
  { label: "Tools & Stack", value: "tools-stack" },
  { label: "Business Automation", value: "business-automation" },
  { label: "Case Studies", value: "case-studies" },
  { label: "AutoWaba Tutorial", value: "autowaba-tutorial" },
  { label: "AutoWaba Features", value: "autowaba-features" },
];

export default config({
  // Local mode: content is written straight to files in this repo. Commit and
  // deploy with your normal flow. Switch to GitHub mode later if you ever want
  // to edit from a hosted /keystatic without running the dev server.
  storage: { kind: "local" },
  ui: {
    brand: { name: "AutoTechify" },
  },
  collections: {
    posts: collection({
      label: "Blog posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      entryLayout: "content",
      columns: ["title", "publishedDate"],
      schema: {
        title: fields.slug({
          name: { label: "Title" },
          slug: {
            label: "SEO-friendly slug",
            description: "Used in the post URL: /blog/your-slug",
          },
        }),
        publishedDate: fields.date({
          label: "Published date",
          defaultValue: { kind: "today" },
          validation: { isRequired: true },
        }),
        summary: fields.text({
          label: "Summary",
          description:
            "One or two sentences. Shown in the blog list and used as the meta description.",
          multiline: true,
          validation: { length: { min: 1, max: 300 } },
        }),
        category: fields.select({
          label: "Category",
          options: POST_CATEGORIES,
          defaultValue: "it-environment",
        }),
        coverImage: fields.image({
          label: "Cover image",
          description: "Optional. Shown at the top of the post.",
          directory: "public/images/blog",
          publicPath: "/images/blog/",
        }),
        content: fields.markdoc({
          label: "Content",
          options: {
            image: {
              directory: "public/images/blog",
              publicPath: "/images/blog/",
            },
          },
        }),
      },
    }),
  },
});
