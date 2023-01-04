import { visit } from "unist-util-visit";
import { h } from "hastscript";
import remarkDirective from "remark-directive";
import remarkFootnotes from "remark-footnotes";
import base from "typographic-base";
import remarkTextr from "remark-textr";
import remarkHypher from "remark-hypher";

export function remarkAdmonitions() {
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type !== "textDirective" &&
        node.type !== "leafDirective" &&
        node.type !== "containerDirective"
      )
        return;

      if (
        node.name == "note" ||
        node.name == "caution" ||
        node.name == "warning"
      ) {
        const data = node.data || (node.data = {});
        const tagName = node.type === "textDirective" ? "span" : "div";

        data.hName = tagName;
        data.hProperties = h(tagName, {
          ...node.attributes,
          class: "admonition admonition-" + node.name,
        }).properties;
      }
    });
  };
}

const CAPS_RE = /([A-Z!"#$%&'()*+,./:;<=>?@\^_`{|}~\-]{2,}\b)/g;

export function remarkSmallCaps() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type !== "textDirective") return;
      if (node.value.match(CAPS_RE)) {
        const processedText = node.value.replace(
          CAPS_RE,
          `<span class="all-caps">$1</span>`
        );
        node.type = `html`;
        node.value = processedText;
      }
    });
  };
}

export function remarkUpgradeHeadings() {
  return (tree) => {
    // Shift all headings up one level
    visit(tree, (node) => {
      if (node.type === "heading") {
        node.depth = node.depth - 1;
      }
    });
  };
}

/* A pipeline to transform and format Markdown in preparation
for rendering. */
export const textPipeline = [
  remarkDirective,
  remarkAdmonitions,
  remarkFootnotes,
  // Typographic transformations
  remarkSmallCaps,
  [remarkTextr, { locale: "en-US", plugins: [base] }],
  remarkHypher,
];
