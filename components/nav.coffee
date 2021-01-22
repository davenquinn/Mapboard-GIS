import React, {Children} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import h from '@macrostrat/hyper'

links = [
  { href: '/comparisons', label: 'Comparisons'},
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/user-guide', label: 'User guide'},
].map (link)->
  link.key = "nav-link-#{link.href}-#{link.label}"
  return link


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
      h 'a.link-button', label
    ]
  ]

Nav = ->
  h 'nav', [
    h 'ul', links.map ({ key, href, label }) ->
      h NavLink, {key, href, label}
  ]

export {ActiveLink, Nav}