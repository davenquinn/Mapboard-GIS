import React from 'react'
import Link from 'next/link'
import h from '@macrostrat/hyper'
import dynamic from 'next/dynamic'

DarkModeButton = dynamic ->
  import('@macrostrat/ui-components/lib/cjs/dark-mode').then (mod)->
    ()->h(mod.DarkModeProvider, null, h(mod.DarkModeButton, {large: true}))

navLinks = [
  { href: '/about', label: 'About'},
  { href: '/user-guide', label: 'User guide'},
  h("li.spacer")
  {
    href: 'https://testflight.apple.com/join/0TfVlWyN',
    label: <span>Get the app<sup><em>beta</em></sup></span>
  }
  h("li", null, h(DarkModeButton))
]

export {navLinks}