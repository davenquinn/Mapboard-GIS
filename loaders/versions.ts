import { remark } from "remark";
import html from "remark-html";
import versionData from "../iOS-releases/versions.json";
import { compareVersions } from "compare-versions";
import { remarkUpgradeHeadings, textPipeline } from "_config/index.mjs";

export async function processToHTML(version) {
  const { content } = version;
  const newContent = await remark()
    .use([remarkUpgradeHeadings, ...textPipeline, html])
    .process(content);

  return { ...version, content: newContent.toString() };
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
