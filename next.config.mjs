import withStylus from "next-stylus";
import RevisionInfoWebpack from "@macrostrat/revision-info-webpack";
import slug from "remark-slug";
import toc from "remark-toc";
import withMDX_ from "@next/mdx";
import { readFileSync } from "fs";
import { textPipeline, mediaPath } from "./config/index.mjs";

const pkgFile = new URL("./package.json", import.meta.url);
const pkg = JSON.parse(readFileSync(pkgFile));

const withMDX = withMDX_({
  options: {
    remarkPlugins: [toc, slug, ...textPipeline],
    rehypePlugins: [],
  },
});

const GITHUB_LINK = pkg.repository.url.replace(/\.git$/, "");

let baseCfg = {
  pageExtensions: ["mdx", "ts", "tsx"],
  env: {
    NEXT_PUBLIC_MEDIA_PATH: mediaPath,
    ...RevisionInfoWebpack(pkg, GITHUB_LINK),
  },
  redirects: async () => {
    return [
      {
        source: "/about/changelog",
        destination: "/docs/ios/releases",
        permanent: true,
      },
    ];
  },
};

export default withStylus(withMDX(baseCfg));
