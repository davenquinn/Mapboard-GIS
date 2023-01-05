import React, { Children } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import h from "@macrostrat/hyper";

// Class to make an activeLink
export const ActiveLink = function ({ children, exact = true, ...props }: any) {
  const router = useRouter();
  const child = Children.only(children);
  const pathname = router.asPath;
  let className = child.props.className || "";
  const isActive = exact
    ? pathname === props.href
    : pathname.startsWith(props.href);
  className = classNames(child.props.className, { active: isActive });
  return h(Link, props, React.cloneElement(child, { className }));
};

export const NavLinkItem = ({ href, label, exact }: any) => {
  return h("li", [
    h.if(href != null)(ActiveLink, { href, exact }, [
      h("a.link-button", null, label),
    ]),
    h.if(href == null)("span.nav-label", label),
  ]);
};

export const NavLink = ({ children, ...rest }: any) => {
  if (children != null) {
    return h("ul", [
      h(NavLinkItem, { ...rest, exact: true, key: "a" }),
      children.map((d, i) =>
        h(NavLinkItem, { ...d, label: d.shortLabel ?? d.label, key: i })
      ),
    ]);
  }
  return h(NavLinkItem, rest);
};
