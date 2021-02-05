import React from 'react'
import Link from 'next/link'
import h from '@macrostrat/hyper'
import dynamic from 'next/dynamic'

DarkModeButton = dynamic ->
  return Promise.resolve(null) unless window?
  import('@macrostrat/ui-components/lib/cjs/dark-mode').then (mod)->
    ()->h(mod.DarkModeProvider, null, h(mod.DarkModeButton, {large: true}))

GetAppButton = ->
  h "a.link-button", {
    href: 'https://testflight.apple.com/join/0TfVlWyN'
  }, <span>Get the app<sup><em>beta</em></sup></span> 

navLinks = [
  { href: '/about', label: 'About'},
  { href: '/docs', label: 'User guide'},
  h("li.spacer")
  h("li", null, h(GetAppButton))
  h("li", null, h(DarkModeButton))
]

aboutLinks = [
  { href: '/about', label: "Motivation" }
  { href: '/about/features', label: "Features"}
  { href: '/about/pricing', label: "Pricing + evaluation"}
  { href: '/about/interop', label: "Openness + interoperability"}
  { href: '/about/comparisons', label: "Comparisons"}
  { href: '/about/roadmap', label: "Roadmap" }
  #{ href: '/about/get-involved', label: "Get involved" }
  { href: '/about/contact', label: "Contact"}
]

userGuideLinks = [
  { href: "/docs", label: "Getting started"}
  { href: "/docs/project-creation", label: "Project creation"}
  { href: "/docs/editing-interface", label: "Editing interface"}
  { href: "/docs/feature-classes", label: "Feature classes"}
  { href: "/docs/topology", label: "Topology"}
  { href: "/docs/basemaps", label: "Basemaps"}
  { href: "/docs/tethered-mode", label: "Tethered mode"}
  { href: "/docs/project-file", label: "Project file specification"}
  { href: "/docs/bugs", label: "Reporting bugs"}
]

export {navLinks, GetAppButton, aboutLinks, userGuideLinks}