import { VersionPage } from "~/pages";
import h from "@macrostrat/hyper";
import { getVersion } from "loaders/versions";

export async function getServerSideProps({ params }) {
  const version = await getVersion(params.version);
  return { props: { version } };
}

export default function VersionPage_({ version }) {
  return h(VersionPage, h(Version, { version }));
}

function Version({ version }) {
  return h("div.version", [
    h("h1", [
      h("span.version", ["Version", h("code", version.metadata.version)]),
    ]),
    h.if(version.metadata.dateText != null)([
      h("h2.date", version.metadata.dateText),
    ]),
    h("div.content", { dangerouslySetInnerHTML: { __html: version.content } }),
  ]);
}
