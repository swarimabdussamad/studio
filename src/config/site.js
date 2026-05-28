export function constructMetadata({
  title = "AutoTechify",
  description = "A developer documenting real production systems and building automation software — in public.",
  image = "/agency.PNG",
  icons = "/favicon.ico",
  noIndex = false,
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@swarimabdussamad",
    },
    icons,
    metadataBase: new URL("https://autotechify.com/"),
    themeColor: "#0a0a0a",
    ...(noIndex && {
      robots: { index: false, follow: false },
    }),
  };
}
