import RootLayout from "@/components/RootLayout";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const siteUrl = "https://autotechify.com";
const siteTitle = "AutoTechify — Building production systems in public";
const siteDescription =
  "A developer documenting real IT environments and building automation software publicly. WhatsApp business automation (AutoWaba), scripts, and honest lessons from production.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | AutoTechify",
    default: siteTitle,
  },
  description: siteDescription,
  keywords: [
    "AutoTechify",
    "WhatsApp business automation",
    "AutoWaba",
    "IT automation",
    "automation scripts",
    "build in public",
  ],
  authors: [{ name: "Swarim Abdussamad" }],
  creator: "Swarim Abdussamad",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "AutoTechify",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/agency.PNG",
        width: 1200,
        height: 630,
        alt: "AutoTechify",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/tortoise-logo.svg",
  },
};

export default function Layout({ children }) {
  return (
    <html
      lang="en"
      className="h-full bg-neutral-950 text-base antialiased text-neutral-100"
    >
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      </body>
    </html>
  );
}
