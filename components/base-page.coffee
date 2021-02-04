import h from '@macrostrat/hyper'
import {Helmet} from 'react-helmet'
import {Nav, ActiveLink} from "./nav"
import Image from "next/image"
import Link from "next/link"

import "./main.styl"

BasePage = (props)->
  {children, rest...} = props
  h 'div.page', rest, [
    h Helmet, [
      <meta charset="utf-8" />
      <title>Mapboard GIS</title>
      <link href="https://fonts.googleapis.com/css?family=Montserrat,Merriweather&display=swap" rel="stylesheet" />
    ]
    h 'div.underlay'
    h 'div.wrap', [
      <header>
        <div className="header-image">
          <Link href="/">
            <img className="mapboard-logo" src="/mapboard-icon.png" width={140} height={140} />
          </Link>
        </div>
        <div className="header-main">
          <ActiveLink href="/">
            <a className="page-title-link"><h1 className="page-title">Mapboard <span class="dimmer">GIS</span></h1></a>
          </ActiveLink>
          <Nav />
        </div>
      </header>
      h 'div.main', [
        children
      ]
    ]
  ]

export default BasePage