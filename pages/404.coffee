import BasePage from "../components/base-page"
import h from "@macrostrat/hyper"

ErrorPage = ()->
  h BasePage, [
    h "div.mountain-underlay", [
      h "div.images", [
        <h1 className="centered extra-space">404 — Page not found</h1>
        h "img", {src: "/img/rear-mountains.png"}
        h "img", {src: "/img/front-mountains.png"}
      ]

    ]
  ]

export default ErrorPage