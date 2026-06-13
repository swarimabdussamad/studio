import React from "react";
import Markdoc from "@markdoc/markdoc";

// Renders a Keystatic Markdoc node (from the reader) to React.
export default function MarkdocContent({ node }) {
  const renderable = Markdoc.transform(node);
  return <>{Markdoc.renderers.react(renderable, React)}</>;
}
