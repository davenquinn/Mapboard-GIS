import versionData from "../iOS-releases/versions.json";
import { compareVersions } from "compare-versions";
//@ts-ignore
import { markdownToHtml } from "../config/index.mjs";

export async function processToHTML(version) {
  const { content } = version;
  let text = await markdownToHtml(content);
  return { ...version, content: text };
}

export function getVersionData() {
  return versionData;
}

export async function getVersion(version: string) {
  const vData = versionData.find((d) => d.metadata.version === version);
  return await processToHTML(vData);
}

export function getVersionsBySeries() {
  let versionHistoryLinks: any[] = Object.values(
    versionData.reduce((acc, d) => {
      const series = d.metadata.series;
      acc[series] ??= {
        series,
        versions: [],
      };
      acc[series].versions.push(d);
      return acc;
    }, {})
  );
  versionHistoryLinks.sort((a, b) => {
    return compareVersions(b.series, a.series);
  });
  return versionHistoryLinks;
}
