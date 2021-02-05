import React, {Children} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import h from '@macrostrat/hyper'

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
  return obj

Nav = (props)->
  {className, links} = props
  h 'nav', {className}, [
    h 'ul', links.map(createNavLink)
  ]

export {ActiveLink, Nav}