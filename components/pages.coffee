import BasePage from "./base-page"
import h from "@macrostrat/hyper"
import {Nav} from "./nav"
import {aboutLinks, userGuideLinks} from "./page-map"

NavPage = ({children, links})->
  h BasePage, {className: 'section-page'}, [
    h Nav, {className: 'section-nav', links}
    h "div.section-content", children
  ]

AboutPage = ({children})->
  h NavPage, {children, links: aboutLinks}

UserGuidePage = ({children})->
  h NavPage, {children, links: userGuideLinks}

export {AboutPage, UserGuidePage}