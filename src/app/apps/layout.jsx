// The apps page is a client component ("use client"), so its metadata lives
// here in a server-component layout wrapper instead.
export const metadata = {
  title: "Apps — AutoWaba & Automation Software",
  description:
    "Software I'm building, starting with AutoWaba — a WhatsApp business automation platform built on the Meta Cloud API, with AI trained on your own business knowledge.",
  alternates: { canonical: "/apps" },
  openGraph: {
    title: "Apps — AutoWaba & Automation Software | AutoTechify",
    description:
      "Software I'm building, starting with AutoWaba — a WhatsApp business automation platform built on the Meta Cloud API, with AI trained on your own business knowledge.",
    url: "/apps",
  },
};

export default function AppsLayout({ children }) {
  return children;
}
