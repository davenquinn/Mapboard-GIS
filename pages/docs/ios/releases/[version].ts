import { VersionPage } from "~/pages";
import h from "@macrostrat/hyper";
import { getVersion } from "loaders/versions";
import { ReleaseTags } from "~/versions";

export async function getServerSideProps({ params }) {
  const version = await getVersion(params.version);
  return { props: { version } };
}

export default function VersionPage_({ version }) {
  return h(VersionPage, h(Version, { version }));
}

function Version({ version }) {
  return h("div.version", [
    h("div.version-meta", [
      h("h1.version-title", [
        h("span.version", [
          "Version ",
          h("span.version-name.code", version.metadata.version),
        ]),
      ]),
      h("div.version-info", [
        h.if(version.metadata.dateText != null)([
          h("h2.date.version-date", version.metadata.dateText),
        ]),
        h(ReleaseTags, { version }),
      ]),
    ]),
    h("div.content", { dangerouslySetInnerHTML: { __html: version.content } }),
  ]);
}
