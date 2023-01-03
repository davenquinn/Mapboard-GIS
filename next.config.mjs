import withStylus from "next-stylus";
import RevisionInfoWebpack from "@macrostrat/revision-info-webpack";
import slug from "remark-slug";
import toc from "remark-toc";
import remarkDirective from "remark-directive";
import remarkFootnotes from "remark-footnotes";
import withMDX_ from "@next/mdx";
import { readFileSync } from "fs";
import { remarkAdmonitions, remarkSmallCaps } from "./_config/index.mjs";
import base from "typographic-base";
import remarkHypher from "remark-hypher";

// A plugin to do some basic typographic transformations
import remarkTextr from "remark-textr";

const pkgFile = new URL("./package.json", import.meta.url);
const pkg = JSON.parse(readFileSync(pkgFile));

const withMDX = withMDX_({
  options: {
    remarkPlugins: [
      toc,
      slug,
      remarkDirective,
      remarkAdmonitions,
      remarkFootnotes,
      // Typographic transformations
      remarkSmallCaps,
      [remarkTextr, { locale: "en-US", plugins: [base] }],
      remarkHypher,
    ],
    rehypePlugins: [],
  },
});

const GITHUB_LINK = pkg.repository.url.replace(/\.git$/, "");

const isProd = process.env.NODE_ENV === "production";

let baseCfg = {
  pageExtensions: ["mdx", "ts", "tsx"],
  env: {
    MEDIA_PATH: isProd
      ? "//sfo2.digitaloceanspaces.com/mapboard-gis-assets"
      : "/media",
    ...RevisionInfoWebpack(pkg, GITHUB_LINK),
  },
};

export default withStylus(withMDX(baseCfg));
