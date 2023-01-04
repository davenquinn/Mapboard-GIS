import { useRouter } from "next/router";
import h from "@macrostrat/hyper";
import {
  NextLinkButton,
  PrevLinkButton,
  PrevButton,
  NextButton,
} from "../buttons";
import { Links } from "./page-map";
import { NavLink, ActiveLink } from "./links";

function unnestLinks(links: Links): Links {
  let newLinks: Links = [];

  for (const link of links) {
    newLinks.push(link);
    if (link.hasOwnProperty("children")) {
      // @ts-ignore
      newLinks.push(...(link.children ?? []));
    }
  }
  return newLinks.filter((d) => {
    // Check if is react node
    return d.hasOwnProperty("href");
  });
}

function NextPrev(props: { links: Links }) {
  const links = unnestLinks(props.links);
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

  return h("li.nav-next-prev", [
    // @ts-ignore
    h.if(prevLink != null)(PrevButton, prevLink),
    h("span.spacer"),
    // @ts-ignore
    h.if(nextLink != null)(NextButton, nextLink),
  ]);
}

const Nav = function (props) {
  const { className, links, exactLinks, showNextPrev = false } = props;
  return h("nav", { className }, [
    h("ul", [
      links.map(function (obj) {
        if (obj.label != null) {
          obj.key = `nav-link-${obj.label}`;
          return h(NavLink, { exact: exactLinks, ...obj });
        }
        return obj;
      }),
      h.if(showNextPrev)(NextPrev, { links }),
    ]),
  ]);
};

const BottomNav = function (props: { links: Links }) {
  const links = unnestLinks(props.links).filter((d) => d.href != null);
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

  return h("div.bottom-links", [
    h.if(prevLink != null)(PrevLinkButton, prevLink),
    h("div.spacer"),
    h.if(nextLink != null)(NextLinkButton, nextLink),
  ]);
};

export { ActiveLink, Nav, BottomNav, unnestLinks };
