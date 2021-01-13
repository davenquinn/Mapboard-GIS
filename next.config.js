const withStylus = require('@zeit/next-stylus');
const withMDX = require('@next/mdx')();

let baseCfg = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  pageExtensions:  ['js', 'jsx', 'mdx'],
};

module.exports = withStylus(withMDX(baseCfg));