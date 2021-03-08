const withStylus = require("@zeit/next-stylus");
const admonitions = require("remark-admonitions");
const withMDX = require("@next/mdx")({
  options: {
    remarkPlugins: [admonitions],
    rehypePlugins: [],
  },
});
const withCoffeescript = require("next-coffeescript");
const RevisionInfoWebpack = require("@macrostrat/revision-info-webpack");
const pkg = require("./package.json");

const GITHUB_LINK = "https://github.com/davenquinn/Mapboard-GIS";

const isProd = process.env.NODE_ENV === "production";

let baseCfg = {
  pageExtensions: ["js", "jsx", "mdx"],
  env: {
    MEDIA_PATH: isProd
      ? "//sfo2.digitaloceanspaces.com/mapboard-gis-assets"
      : "/media",
    ...RevisionInfoWebpack(pkg, GITHUB_LINK),
  },
};

module.exports = withCoffeescript(withStylus(withMDX(baseCfg)));
