import BasePage from "./base-page"
import h from "@macrostrat/hyper"

AboutPage = ({children})->
  h BasePage, {children}

UserGuidePage = ({children})->
  h BasePage, {children}

export {AboutPage, UserGuidePage}