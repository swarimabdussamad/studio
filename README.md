# Abdullah Agency - Next.js, Tailwind CSS & Framer Motion

![Abdullah Agency](/public/agency.PNG)

Abdullah Agency is a stunning multi-page agency website template developed using Next.js, Tailwind CSS, and Framer Motion. Designed and built by the talented Tailwind CSS team, this template offers a sleek and minimalist appearance while boasting engaging interactive elements and captivating animations powered by Framer Motion.

## Features

- Beautifully designed agency website template.
- Built using Tailwind CSS and Next.js for a seamless development experience.
- Enhanced with delightful animations and transitions through Framer Motion.
- Easy-to-update case studies and blog posts with MDX.
- Production-ready and highly customizable for your agency's specific needs.
- A valuable resource for learning how to build websites with Tailwind CSS and React.

## Getting Started

To run the Abdullah Agency website locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/abdullah-agency.git
   ```

## Blog & CMS (Keystatic)

The blog is powered by [Keystatic](https://keystatic.com) in **local mode** —
posts are plain Markdoc files committed to this repo (`src/content/posts/`).
No database, no external service.

### Writing a post

1. Run the dev server: `npm run dev`
2. Open the admin UI at **http://localhost:3000/keystatic**
3. Create/edit posts in the browser. Saving writes a file under
   `src/content/posts/<slug>.mdoc`.
4. Commit the new/changed files and deploy as usual.

You can also write a post by hand — copy
`src/content/posts/welcome-to-the-autotechify-blog.mdoc` and edit the
frontmatter (`title`, `publishedDate`, `summary`, `category`) and body.

Posts appear automatically at `/blog` (newest first) and `/blog/<slug>`.

> The `/keystatic` admin is intentionally **disabled in production**
> (see `src/proxy.js`) because local mode writes to the server filesystem.
> Edit content locally, then commit + deploy.
