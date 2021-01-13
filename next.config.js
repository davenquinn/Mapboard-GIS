const withStylus = require('@zeit/next-stylus');
const withMDX = require('@next/mdx')();
const withCoffeescript = require('next-coffeescript');

let baseCfg = {
  pageExtensions:  ['js', 'jsx', 'mdx'],
};

module.exports = withCoffeescript(withStylus(withMDX(baseCfg)));