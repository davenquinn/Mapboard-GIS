import { visit } from "unist-util-visit";
import { h } from "hastscript";
import remarkDirective from "remark-directive";
import remarkFootnotes from "remark-footnotes";
import base from "typographic-base";
import remarkTextr from "remark-textr";
import remarkHypher from "remark-hypher";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkFigureCaptions from "@microflash/remark-figure-caption";

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

function transformer(ast) {
  visit(ast, visitor);

  function visitor(node) {
    // Visit if node is image
    if (node.type !== "image") return;

    let src = node.url;
    const alt = node.alt;

    // escape hatch into video component
    if (node.url.includes(".mp4")) {
      // Create AST node for video component
      const video = {
        type: "element",
        tagName: "video",
        properties: {
          src: src,
          alt: alt,
          controls: false,
          loop: true,
          muted: true,
          autoplay: true,
        },
      };

      // Replace image node with video node
      const data = node.data || (node.data = {});
      const tagName = "video";

      data.hName = tagName;
      data.hProperties = video.properties;
    }
  }
}

function remarkVideos() {
  return transformer;
}

/* A pipeline to transform and format Markdown in preparation
for rendering. */
export const textPipeline = [
  remarkFigureCaptions,
  remarkVideos,
  remarkDirective,
  remarkAdmonitions,
  remarkFootnotes,
  // Typographic transformations
  remarkSmallCaps,
  [remarkTextr, { locale: "en-US", plugins: [base] }],
  remarkHypher,
];

/* A pipeline to transform Markdown to HTML. */
const htmlProcessor = unified().use([
  remarkParse,
  ...textPipeline,
  remarkRehype,
  rehypeFormat,
  rehypeStringify,
]);

export async function markdownToHtml(markdown) {
  let res = await htmlProcessor.process(markdown);
  return String(res);
}
