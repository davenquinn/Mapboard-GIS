import parser from "markdown-yaml-metadata-parser";

import { readFileSync, writeFileSync } from "fs";
import glob from "glob";
import { compareVersions } from "compare-versions";

// Read all files in version directory
let versions = glob.sync("iOS-releases/version-*.md");

// Parse each file
let parsedVersions = versions.map((version) => {
  const file = readFileSync(version, "utf8");
  let obj = parser(file);
  // Camelize metadata keys
  let metadata = {};
  for (const key in obj.metadata) {
    metadata[camelize(key)] = obj.metadata[key];
  }
  return { ...obj, metadata };
});

parsedVersions.sort((a, b) => {
  return compareVersions(b.metadata.version, a.metadata.version);
});

function getMajorVersion(version) {
  return version.split(".")[0];
}

function camelize(text) {
  const a = text
    .toLowerCase()
    .replace(/[-_\s.]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""));
  return a.substring(0, 1).toLowerCase() + a.substring(1);
}

for (const version of parsedVersions) {
  // Add date text to metadata
  if (version.metadata.date) {
    // Check if date has adequate precision and convert to a single day if so
    let dateText = version.metadata.date;
    let datetime = new Date(dateText);
    if (datetime instanceof Date && !isNaN(datetime)) {
      // Formatted date
      dateText = datetime.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
    version.metadata.series = getMajorVersion(version.metadata.version);
    version.metadata.dateText = dateText;
  }
}

// Write to file
writeFileSync(
  "iOS-releases/versions.json",
  JSON.stringify(parsedVersions, null, 2)
);

// Synthesize changelog
let changelog = parsedVersions.map((version) => {
  let data = `## [**Version \`${version.metadata.version}\`**](/iOS-releases/version-${version.metadata.version}.md)`;
  if (version.metadata.dateText != null) {
    data += ` — *${version.metadata.dateText}*`;
  }
  if (version.metadata.pre) {
    data += `\n\n*This is a pre-release.*`;
  } else if (version.metadata.major) {
    data += `\n\n*This is a major release.* 🎉`;
  }

  data += "\n\n" + version.content;
  return data;
});

const frontmatter = `
# Changelog

All notable changes to **Mapboard GIS** will be documented in this file.
It is automatically generated from release notes in the
[\`iOS-releases\`](iOS-releases) directory using the \`prepare:changelog\` NPM script.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

`;

writeFileSync("CHANGELOG.md", frontmatter + changelog.join("\n\n"));
