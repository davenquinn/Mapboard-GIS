import { useRouter } from "next/router";
import h from "@macrostrat/hyper";
import { IconLeftButton, NextLinkButton, PrevLinkButton } from "../buttons";
import { Links, allLinks, unnestLinks } from "./page-map";
import { NavLink, ActiveLink } from "./links";
import { FaArrowUp } from "react-icons/fa";

const Nav = function (props) {
  const {
    className,
    links,
    exactLinks,
    showNextPrev = false,
    showParentLink = true,
  } = props;
  return h("nav", { className }, [
    h("div.nav-inner", [
      h.if(showParentLink)(NavParentLink, { links }),
      h("ul.nav-main", [
        links.map(function (obj) {
          if (obj.label != null) {
            obj.key = `nav-link-${obj.label}`;
            return h(NavLink, { exact: exactLinks, ...obj });
          }
          return obj;
        }),
      ]),
      h.if(showNextPrev)(NavNextPrev, { links }),
    ]),
  ]);
};

function getParentLink(href) {
  let a = href.split("/");
  a.pop();
  const parentLink = a.join("/");
  return parentLink == "" ? "/" : parentLink;
}

function findParentLink(href, links = allLinks) {
  // Find the nearest parent link
  const parentLink = getParentLink(href);
  const link = links.find((d) => d.href == parentLink);
  if (link == null) {
    return findParentLink(parentLink, links);
  }
  return link;
}

function NavParentLink(props) {
  const { children, className } = props;
  const { asPath: pathname } = useRouter() || {};

  const parentLink = findParentLink(pathname);
  if (parentLink == null) {
    return null;
  }
  // @ts-ignore
  const { label, href, icon } = parentLink;
  if (label == null || href == null) {
    return null;
  }
  return h("div.parent-link", [
    h(IconLeftButton, {
      className,
      // @ts-ignore
      icon: icon ?? h(FaArrowUp),
      label,
      href,
    }),
  ]);
}

function NavNextPrev(props: { links: Links; className?: string }) {
  const { className } = props;
  const links = unnestLinks(props.links).filter(
    // @ts-ignore
    (d) => d.hasOwnProperty("href") && d.href != null
  );
  const { asPath: pathname } = useRouter() || {};
  if (pathname == null) {
    return null;
  }

  //@ts-ignore
  const ix = links.findIndex((d) => d.href === pathname);

  if (ix == null) {
    return null;
  }

  const prevLink = links[ix - 1];
  const nextLink = links[ix + 1];

  return h("div.next-prev", { className }, [
    h.if(prevLink != null)(PrevLinkButton, prevLink),
    h("div.spacer"),
    h.if(nextLink != null)(NextLinkButton, nextLink),
  ]);
}

export { ActiveLink, Nav, NavNextPrev, unnestLinks };
