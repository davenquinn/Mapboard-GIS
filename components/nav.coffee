import React, {Children} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import h from '@macrostrat/hyper'

# Class to make an activeLink
ActiveLink = ({children, exact = true, ...props }) ->
  router = useRouter()
  child = Children.only(children)
  className = child.props.className or ''
  isActive = if exact then router.pathname == props.href else router.pathname.startsWith(props.href)
  className = classNames(child.props.className, {"active": isActive})
  return h Link, props, React.cloneElement(child, { className })

NavLink = ({key, href, label, exact})->
  h 'li', {key}, [
    h ActiveLink, {href, exact}, [
      h 'a.link-button', null, label
    ]
  ]

Nav = (props)->
  {className, links, exactLinks} = props
  h 'nav', {className}, [
    h 'ul', links.map (obj)->
      if obj.href?
        obj.key = "nav-link-#{obj.href}"
        return h NavLink, {exact: exactLinks, obj...}
      return obj
  ]

export {ActiveLink, Nav}