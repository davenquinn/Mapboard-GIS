import { AboutPage, UserGuidePage } from "~/pages";
import Link from "next/link";
import h from "@macrostrat/hyper";
import { NextLinkButton } from "~/buttons";
import { remark } from "remark";
import html from "remark-html";
import { textPipeline } from "_config/index.mjs";
import { getVersionsBySeries } from "loaders/versions";
import { ReleaseTags } from "~/versions";

async function processText(v: string | null): Promise<string | null> {
  if (v == null) return null;
  const newContent = await remark()
    .use([...textPipeline, html])
    .process(v)
    .toString();
  return newContent;
}

async function addHTMLChanges(version) {
  const { content, metadata, ...rest } = version;
  return {
    ...version,
    content: await processText(version.content),
  };
}

export async function getServerSideProps() {
  const htmlVersions = await Promise.all(
    getVersionsBySeries().map(async (d) => {
      return {
        ...d,
        versions: await Promise.all(d.versions.map(addHTMLChanges)),
      };
    })
  );

  return { props: { series: htmlVersions } };
}

export default function Changelog({ series }) {
  return h(UserGuidePage, [
    h("h1", "Release history"),
    h(
      "div.version-history",
      series.map((d) => h(Series, { series: d }))
    ),
  ]);
}

function Series({ series }) {
  return h("div.series", [
    h("h2", "Series " + series.series),
    h(
      "div.versions",
      series.versions.map((d) => h(Version, { version: d }))
    ),
  ]);
}

function Version({ version }) {
  return h("div.version", [
    h("div.version-meta", [
      h(NextLinkButton, {
        href: `/docs/ios/releases/${version.metadata.version}`,
        label: h("span.version-title", [
          "Version ",
          h("span.version-name.code", version.metadata.version),
        ]),
      }),
      h.if(version.metadata.dateText != null)([
        h("div.date.version-date", version.metadata.dateText),
      ]),
    ]),
    h("div.version-content", [
      h(ReleaseTags, { version }),
      h(BriefReleaseRemarks, { data: version.metadata.inBrief }),
    ]),
  ]);
}

function BriefReleaseRemarks({ data }) {
  if (data == null) return null;
  // If we have a single string, return a paragraph
  if (typeof data == "string") {
    return h("p.in-brief", data);
  }
  // If we have an array, return a list
  return h(
    "ul.in-brief",
    data.map((d) => h("li", d))
  );
}
