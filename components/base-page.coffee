import h from '@macrostrat/hyper'
import {Helmet} from 'react-helmet'
import "./main.styl"

BasePage = (props)->
  {children, rest...} = props
  h 'div.page', rest, [
    h Helmet, [
      <meta charset="utf-8" />
      <title>Mapboard GIS</title>
      <link href="https://fonts.googleapis.com/css?family=EB+Garamond&display=swap" rel="stylesheet" />
    ]
    h 'div.wrap', [
      h 'div.main', [
        children
      ]
    ]
  ]

export default BasePage