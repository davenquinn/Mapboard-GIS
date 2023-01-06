/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
import BasePage from "./base-page";
import h from "@macrostrat/hyper";
import { Nav, NavNextPrev } from "./nav";
import {
  aboutLinks,
  userGuideLinks,
  versionHistoryLinks,
} from "./nav/page-map";

const NavPage = ({ children, links }) =>
  h(BasePage, { className: "section-page" }, [
    h(Nav, { className: "section-nav", links, showNextPrev: true }),
    h("div.section-main", [
      h("div.section-content", children),
      h(NavNextPrev, { links, className: "bottom-links" }),
    ]),
  ]);

const AboutPage = ({ children }) => h(NavPage, { children, links: aboutLinks });

const UserGuidePage = ({ children }) =>
  h(NavPage, { children, links: userGuideLinks });

const VersionPage = ({ children }) =>
  h(NavPage, { children, links: versionHistoryLinks });

export { BasePage, AboutPage, UserGuidePage, VersionPage };
