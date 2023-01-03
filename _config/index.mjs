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
