import h from "@macrostrat/hyper";
import { Nav, ActiveLink } from "./nav";
import Link from "next/link";
import Head from "next/head";
import { navLinks } from "./page-map";
import newGithubIssueUrl from "new-github-issue-url";
import { useRouter } from "next/router";
import { unnestLinks } from "./pages";
import { aboutLinks, userGuideLinks } from "./page-map";
import { analyticsHeaderScripts } from "./analytics/server";
const GA_TRACKING_ID = process.env.GA_TRACKING_ID;

import "./main.styl";

const allLinks = unnestLinks([...aboutLinks, ...userGuideLinks]);

function PageIssueLink() {
  const router = useRouter();
  const activeLink = allLinks.find((d) => d?.href == router.pathname);

  const pageName = activeLink?.label ?? router.pathname;

  const href = newGithubIssueUrl({
    user: "davenquinn",
    repo: "Mapboard-GIS",
    title: `Issue with "${pageName}" page`,
    labels: ["documentation"],
  });

  return h("p", [
    "Found a problem with this page? ",
    h("a", { target: "_blank", href }, "Create an issue"),
  ]);
}

const RevisionInfo = () =>
  h("p.version", [
    `${JSON.parse(process.env.NPM_VERSION)} – ${JSON.parse(
      process.env.COMPILE_DATE
    )}`,
    " (",
    h(
      "a",
      { href: JSON.parse(process.env.GITHUB_REV_LINK) },
      JSON.parse(process.env.GIT_COMMIT_HASH)
    ),
    ")",
  ]);

const BasePage = function (props) {
  const { children, className, ...rest } = props;

  return h("div.page", { className }, [
    <Head>
      <meta charSet="utf-8" />
      <title>Mapboard GIS</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather&family=Montserrat&family=Source+Code+Pro:wght@400;700&display=swap"
        rel="stylesheet"
      />
      {analyticsHeaderScripts()}
    </Head>,
    h("div.underlay"),
    h("div.wrap", [
      <header>
        <ActiveLink href="/">
          <a className="page-title-link">
            <h1 className="page-title">
              Mapboard <span className="dimmer">GIS</span>
            </h1>
          </a>
        </ActiveLink>
        <div className="header-image">
          <Link href="/">
            <img
              className="mapboard-logo"
              src="/img/mapboard-icon.png"
              width={140}
              height={140}
            />
          </Link>
        </div>
        <Nav links={navLinks} exactLinks={false} />
      </header>,
      h("div.main", [children]),
      <footer>
        <div>
          <p>
            <strong>Mapboard GIS</strong>
          </p>
          <p>
            2018—2021, <a href="https://davenquinn.com">Daven Quinn</a>
          </p>
          <RevisionInfo />
        </div>

        <PageIssueLink />
      </footer>,
    ]),
  ]);
};

export default BasePage;
