import React from 'react'
import Link from 'next/link'
import h from '@macrostrat/hyper'
import dynamic from 'next/dynamic'

DarkModeButton = dynamic ->
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
  { href: '/', label: "Motivation" }
  { href: '/pricing', label: "Pricing and evaluation"}
  { href: '/comparisons', label: "Features and comparisons"}
  { href: '/roadmap', label: "Roadmap" }
  { href: '/get-involved', label: "Get involved" }
  { href: '/contact', label: "Contact"}
]

userGuideLinks = [
  { href: "/", label: "Getting started"}
  { href: "/project-creation", label: "Project creation"}
  { href: "/editing-interface", label: "The editing interface"}
  { href: "/feature-classes", label: "Feature classes"}
  { href: "/gis-backends", label: "GIS backends"}
  { href: "/topology", label: "Topology"}
  { href: "/basemaps", label: "Basemaps"}
  { href: "/file-specification", label: "Project file specification"}
  { href: "/reporting", label: "Reporting bugs"}
]

export {navLinks, GetAppButton, aboutLinks, userGuideLinks}