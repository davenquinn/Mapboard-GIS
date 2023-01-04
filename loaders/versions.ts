import { remark } from "remark";
import html from "remark-html";
import versionData from "../iOS-releases/versions.json";
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
