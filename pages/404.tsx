/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
import BasePage from "../components/base-page";
import h from "@macrostrat/hyper";

const ErrorPage = () => h(BasePage, [
  h("div.mountain-underlay", [
    h("div.images", [
      <h1 className="centered extra-space">404 — Page not found</h1>,
      h("img", {src: "/img/rear-mountains.png"}),
      h("img", {src: "/img/front-mountains.png"})
    ])

  ])
]);

export default ErrorPage;