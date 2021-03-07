const withStylus = require('@zeit/next-stylus');
const admonitions = require("remark-admonitions")
const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [admonitions],
    rehypePlugins: [],
  },
});
const withCoffeescript = require('next-coffeescript');

const isProd = process.env.NODE_ENV === 'production'

let baseCfg = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  env: {
    MEDIA_PATH: isProd ? "//sfo2.digitaloceanspaces.com/mapboard-gis-assets" : "/media",
  },
};

module.exports = withCoffeescript(withStylus(withMDX(baseCfg)));