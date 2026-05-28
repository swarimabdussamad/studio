import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Content",
    links: [
      { title: "Blog", href: "/blog" },
      { title: "Labs", href: "/labs" },
      { title: "Build Logs", href: "/blog" },
      { title: "About", href: "/about" },
    ],
  },
  {
    title: "Projects",
    links: [
      { title: "Apps", href: "/apps" },
      { title: "AutoWaba", href: "/apps" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];
