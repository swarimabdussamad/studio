import RootLayout from "@/components/RootLayout";
import "./globals.css";

export const metadata = {
  title: {
    template: "%s | AutoTechify",
    default: "AutoTechify — Building production systems in public",
  },
  description:
    "A developer documenting real IT environments and building automation software publicly.",
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
      </body>
    </html>
  );
}
