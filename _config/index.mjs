import { visit } from "unist-util-visit";
import { h } from "hastscript";

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
