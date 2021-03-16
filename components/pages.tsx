/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
import BasePage from "./base-page";
import h from "@macrostrat/hyper";
import { Nav } from "./nav";
import { aboutLinks, userGuideLinks, Links } from "./page-map";
import { useRouter } from "next/router";
import { NextLinkButton, PrevLinkButton } from "./buttons";

function unnestLinks(links: Links): Links {
  let newLinks: Links = [];

  for (const link of links) {
    newLinks.push(link);
    if (link.hasOwnProperty("children")) {
      newLinks.push(...(link.children ?? []));
    }
  }

  return newLinks;
}

const BottomNav = function (props: { links: Links }) {
  const links = unnestLinks(props.links);
  const { pathname } = useRouter() || {};
  if (pathname == null) {
    return null;
  }

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

const NavPage = ({ children, links }) =>
  h(BasePage, { className: "section-page" }, [
    h(Nav, { className: "section-nav", links }),
    h("div.section-main", [
      h("div.section-content", children),
      h(BottomNav, { links }),
    ]),
  ]);

const AboutPage = ({ children }) => h(NavPage, { children, links: aboutLinks });

const UserGuidePage = ({ children }) =>
  h(NavPage, { children, links: userGuideLinks });

export { AboutPage, UserGuidePage };
