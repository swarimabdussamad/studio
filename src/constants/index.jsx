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
      { title: "AutoWaba", href: "/apps" },
      { title: "WhatsApp CRM in Qatar", href: "/whatsapp-crm-qatar" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];
