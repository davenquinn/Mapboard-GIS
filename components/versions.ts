import h from "@macrostrat/hyper";

export function PrereleaseTag() {
  return h("span.tag.prerelease-tag", "Pre-release");
}

export function ReleaseTags({ version }) {
  return h("div.release-tags.tags", [
    h.if(version.metadata.pre)(PrereleaseTag),
  ]);
}
