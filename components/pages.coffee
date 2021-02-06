import BasePage from "./base-page"
import h from "@macrostrat/hyper"
import {Nav} from "./nav"
import {aboutLinks, userGuideLinks} from "./page-map"
import {useRouter} from "next/router"
import Link from 'next/link'

LinkButton = ({href, label})->
  h(Link, {href}, h("a.link-button", null, label))

BottomNav = ({links})->
  {pathname} = useRouter() or {}
  return null unless pathname?

  ix = links.findIndex (d)-> d.href == pathname

  if ix == null then return null

  prevLink = links[ix-1]
  nextLink = links[ix+1]
  prevLinkButton = null
  nextLinkButton = null

  if prevLink?
    prevLinkButton = h(LinkButton, {prevLink..., label: "◀︎ "+prevLink.label})
  if nextLink?
    nextLinkButton = h(LinkButton, {nextLink..., label: nextLink.label+" ▶︎"})

  h("div.bottom-links", [
    prevLinkButton
    h("div.spacer")
    nextLinkButton
  ])

NavPage = ({children, links})->
  h BasePage, {className: 'section-page'}, [
    h Nav, {className: 'section-nav', links}
    h "div.section-main", [
      h "div.section-content", children
      h BottomNav, {links}
    ]
  ]

AboutPage = ({children})->
  h NavPage, {children, links: aboutLinks}

UserGuidePage = ({children})->
  h NavPage, {children, links: userGuideLinks}

export {AboutPage, UserGuidePage}