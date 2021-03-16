import React, { Children } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import h from "@macrostrat/hyper";

// Class to make an activeLink
const ActiveLink = function ({ children, exact = true, ...props }) {
  const router = useRouter();
  const child = Children.only(children);
  let className = child.props.className || "";
  const isActive = exact
    ? router.pathname === props.href
    : router.pathname.startsWith(props.href);
  className = classNames(child.props.className, { active: isActive });
  return h(Link, props, React.cloneElement(child, { className }));
};

const NavLinkItem = ({ href, label, exact }: any) => {
  return h("li", [
    h(ActiveLink, { href, exact }, [h("a.link-button", null, label)]),
  ]);
};

const NavLink = ({ children, ...rest }: any) => {
  if (children != null) {
    return h("ul", [
      h(NavLinkItem, { ...rest, exact: true }),
      children.map((d, i) =>
        h(NavLinkItem, { ...d, label: d.shortLabel ?? d.label, key: i })
      ),
    ]);
  }
  return h(NavLinkItem, rest);
};

const Nav = function (props) {
  const { className, links, exactLinks } = props;
  return h("nav", { className }, [
    h(
      "ul",
      links.map(function (obj) {
        if (obj.href != null) {
          obj.key = `nav-link-${obj.href}`;
          return h(NavLink, { exact: exactLinks, ...obj });
        }
        return obj;
      })
    ),
  ]);
};

export { ActiveLink, Nav };
