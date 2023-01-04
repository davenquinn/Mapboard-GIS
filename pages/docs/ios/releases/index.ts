import { AboutPage, UserGuidePage } from "~/pages";
import Link from "next/link";
import h from "@macrostrat/hyper";
import versionData from "../../../../iOS-releases/versions.json";
import { remark } from "remark";
import html from "remark-html";

function addHTMLChanges(version) {
  const { content } = version;
  const newContent = remark().use(html).processSync(content).toString();
  return { ...version, content: newContent };
}

export function getServerSideProps() {
  const htmlVersions = versionData.map(addHTMLChanges);

  return { props: { versions: htmlVersions } };
}

export default function Changelog({ versions }) {
  return h(UserGuidePage, [
    h("h1", "Version history"),
    h(
      "div.versions",
      {},
      versions.map((d) => h(Version, { version: d }))
    ),
  ]);
}

function Version({ version }) {
  return h("div.version", [
    h("div.version-meta", [
      h("h2", [
        h(Link, { href: `/docs/ios/releases/${version.metadata.version}` }, [
          h("a.version", ["Version", h("code", version.metadata.version)]),
        ]),
      ]),
      h.if(version.metadata.dateText != null)([
        h("h3.date", version.metadata.dateText),
      ]),
    ]),
  ]);
}
