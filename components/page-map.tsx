/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
import React from 'react';
import Link from 'next/link';
import h from '@macrostrat/hyper';
import dynamic from 'next/dynamic';

const DarkModeButton = dynamic(()=>{
  if (typeof window == 'undefined') return Promise.resolve(null)
  return import('@macrostrat/ui-components/lib/cjs/dark-mode').then(mod=>{
    return ()=>h(mod.DarkModeProvider, null, h(mod.DarkModeButton, {large: true}))
  })
})

const GetAppButton = () => h("a.link-button", {
  href: 'https://testflight.apple.com/join/0TfVlWyN'
}, <span>Get the app<sup><em>beta</em></sup></span>);

const TestFlightButton = () => h("a.link-button", {
  href: 'https://testflight.apple.com/join/0TfVlWyN'
}, <>Join the <em>TestFlight</em> beta</>);

const navLinks = [
  { href: '/about', label: 'About'},
  { href: '/docs', label: 'User guide'},
  h("li.spacer"),
  h("li", null, h(GetAppButton)),
  h("li", null, h(DarkModeButton))
];

const aboutLinks = [
  { href: '/about', label: "Motivation" },
  // { href: '/about/features', label: "Features"}
  { href: '/about/pricing', label: "Pricing + evaluation"},
  { href: '/about/interop', label: "Openness + interoperability"},
  { href: '/about/comparisons', label: "Features + comparisons"},
  { href: '/about/roadmap', label: "Roadmap" }
  //{ href: '/about/get-involved', label: "Get involved" }
  //{ href: '/about/contact', label: "Contact"}
];

const userGuideLinks = [
  { href: "/docs", label: "Getting started"},
  { href: "/docs/project", label: "Projects"},
  { href: "/docs/map-interface", label: "Map interface"},
  { href: "/docs/feature-classes", label: "Feature classes"},
  { href: "/docs/topology", label: "Topology"},
  { href: "/docs/basemaps", label: "Basemaps"},
  { href: "/docs/tethered-mode", label: "Tethered mode"},
  { href: "/docs/project-file", label: "Project file specification"},
  { href: "/docs/bugs", label: "Reporting bugs"}
];

export {navLinks, GetAppButton, TestFlightButton, aboutLinks, userGuideLinks};