import React from "react";
import Markdoc from "@markdoc/markdoc";

// Allows {% video src="/videos/foo.mp4" %}{% /video %} inside post content.
const config = {
  tags: {
    video: {
      render: "video",
      attributes: {
        src: { type: String },
        poster: { type: String },
        controls: { type: Boolean, default: true },
        playsInline: { type: Boolean, default: true },
        class: {
          type: String,
          default: "w-full rounded-2xl shadow-lg",
        },
      },
    },
  },
};

// Renders a Keystatic Markdoc node (from the reader) to React.
export default function MarkdocContent({ node }) {
  const renderable = Markdoc.transform(node, config);
  return <>{Markdoc.renderers.react(renderable, React)}</>;
}
