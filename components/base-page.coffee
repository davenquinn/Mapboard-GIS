import h from '@macrostrat/hyper'
import {Helmet} from 'react-helmet'
import {Nav, ActiveLink} from "./nav"
import Image from "next/image"
import Link from "next/link"
import Head from 'next/head'
import {navLinks} from "./page-map"

import "./main.styl"

RevisionInfo = ()->
  h("p.version", [
    "#{JSON.parse(process.env.NPM_VERSION)} – #{JSON.parse(process.env.COMPILE_DATE)}",
    " (",
    h("a", { href: JSON.parse(process.env.GITHUB_REV_LINK) }, JSON.parse(process.env.GIT_COMMIT_HASH)),
    ")",
  ])


BasePage = (props)->
  {children, className, rest...} = props
  h 'div.page', {className}, [
    <Head>
      <meta charSet="utf-8" />
      <title>Mapboard GIS</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Montserrat&family=Source+Code+Pro:wght@400;700&display=swap" rel="stylesheet" /> 
    </Head>
    h 'div.underlay'
    h 'div.wrap', [
      <header>
        <ActiveLink href="/">
          <a className="page-title-link"><h1 className="page-title">Mapboard <span className="dimmer">GIS</span></h1></a>
        </ActiveLink>
        <div className="header-image">
          <Link href="/">
            <img className="mapboard-logo" src="/img/mapboard-icon.png" width={140} height={140} />
          </Link>
        </div>
        <Nav links={navLinks} exactLinks={false} />
      </header>
      h 'div.main', [
        children
      ]
      <footer>
        <p>
          <strong>Mapboard GIS</strong> was created by <a href="https://davenquinn.com">Daven Quinn</a>, 2018—2021
        </p>
        <RevisionInfo />
      </footer>
    ]
  ]

export default BasePage