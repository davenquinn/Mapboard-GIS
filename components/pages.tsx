/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
import BasePage from "./base-page";
import h from "@macrostrat/hyper";
import { Nav, BottomNav } from "./nav";
import { aboutLinks, userGuideLinks } from "./page-map";

const NavPage = ({ children, links }) =>
  h(BasePage, { className: "section-page" }, [
    h(Nav, { className: "section-nav", links, showNextPrev: true }),
    h("div.section-main", [
      h("div.section-content", children),
      h(BottomNav, { links }),
    ]),
  ]);

const AboutPage = ({ children }) => h(NavPage, { children, links: aboutLinks });

const UserGuidePage = ({ children }) =>
  h(NavPage, { children, links: userGuideLinks });

export { BasePage, AboutPage, UserGuidePage };
