import withStylus from "next-stylus";
import RevisionInfoWebpack from "@macrostrat/revision-info-webpack";
import slug from "remark-slug";
import toc from "remark-toc";
import withMDX_ from "@next/mdx";
import { readFileSync } from "fs";
import { textPipeline } from "./_config/index.mjs";

const pkgFile = new URL("./package.json", import.meta.url);
const pkg = JSON.parse(readFileSync(pkgFile));

const withMDX = withMDX_({
  options: {
    remarkPlugins: [toc, slug, ...textPipeline],
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
