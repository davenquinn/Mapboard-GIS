import React, {Children} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import h from '@macrostrat/hyper'
import dynamic from 'next/dynamic'
import {Icon} from "@blueprintjs/core"

DarkModeButton = dynamic ->
  import('@macrostrat/ui-components/lib/cjs/dark-mode').then (mod)->
    ()->h(mod.DarkModeProvider, null, h(mod.DarkModeButton, {large: true}))

links = [
  { href: '/about', label: 'About'},
  { href: '/user-guide', label: 'User guide'},
  { href: 'https://testflight.apple.com/join/0TfVlWyN', label: <span>Get the app<sup><em> beta</em></sup></span>}
]


# Class to make an activeLink
ActiveLink = ({children, ...props }) ->
  router = useRouter()
  child = Children.only(children)
  className = child.props.className or ''
  isActive = router.pathname == props.href
  className = classNames(child.props.className, {"active": isActive})
  return h Link, props, React.cloneElement(child, { className })

NavLink = ({key, href, label})->
  h 'li', {key}, [
    h ActiveLink, {href}, [
      h 'a.link-button', null, label
    ]
  ]

createNavLink = (obj)->
  if obj.href?
    obj.key = "nav-link-#{obj.href}"
    return h NavLink, obj
  return h 'li', null, obj

Nav = ->
  h 'nav', [
    h 'ul', [
      links.map(createNavLink)
      h 'li', null, h(DarkModeButton)
    ]
  ]

export {ActiveLink, Nav}