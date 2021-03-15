/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
import BasePage from "./base-page";
import h from "@macrostrat/hyper";
import {Nav} from "./nav";
import {aboutLinks, userGuideLinks} from "./page-map";
import {useRouter} from "next/router";
import Link from 'next/link';

const LinkButton = ({href, label}) => h(Link, {href}, h("a.link-button", null, label));

const BottomNav = function({links}){
  const {pathname} = useRouter() || {};
  if (pathname == null) { return null; }

  const ix = links.findIndex(d => d.href === pathname);

  if (ix === null) { return null; }

  const prevLink = links[ix-1];
  const nextLink = links[ix+1];
  let prevLinkButton = null;
  let nextLinkButton = null;

  if (prevLink != null) {
    prevLinkButton = h(LinkButton, {...prevLink, label: "◀︎ "+prevLink.label});
  }
  if (nextLink != null) {
    nextLinkButton = h(LinkButton, {...nextLink, label: nextLink.label+" ▶︎"});
  }

  return h("div.bottom-links", [
    prevLinkButton,
    h("div.spacer"),
    nextLinkButton
  ]);
};

const NavPage = ({children, links}) => h(BasePage, {className: 'section-page'}, [
  h(Nav, {className: 'section-nav', links}),
  h("div.section-main", [
    h("div.section-content", children),
    h(BottomNav, {links})
  ])
]);

const AboutPage = ({children}) => h(NavPage, {children, links: aboutLinks});

const UserGuidePage = ({children}) => h(NavPage, {children, links: userGuideLinks});

export {AboutPage, UserGuidePage};