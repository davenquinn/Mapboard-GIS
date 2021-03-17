import h from "@macrostrat/hyper";
import { FaCheck } from "react-icons/fa";
/*
| Capabilities                  | Touch GIS | StraboSpot | FieldMove | Rockd | GMDE Mobile | Mapboard GIS |
| ----------------------------- | --------- | ---------- | --------- | ----- | ----------- | ------------ | --- |
| Draw lines and polygons       | yes       | yes        | yes       | —     | yes         | yes          |
| Feature snapping              | no        | no         | no        | no    | yes         | yes          |
| Point-based GIS editing       | yes       | —          | —         | —     | —           | —            |
| Natural spatial editing       | —         | —          | —         | —     | —           | yes          |
| Topological editing           | —         | —          | —         | —     | —           | yes          |
| Interoperability              |
| GIS-native file format        | —         | —          | —         | —     | —           | yes[^1]      |
| Export to GIS                 | yes       | yes        | yes       | –     | yes         | native       |
| Desktop GIS connectivity      | —         | —          | —         | —     | —           | yes          |
| Outcrop photos                | yes       | yes        | yes       | yes   | —           | —            |
| Point observations            | yes       | yes        | yes       | yes   | yes         | —            |
| Structural compass            | yes       | yes        | yes       | yes   | —           | —            |
| Structural analysis           | —         | ~          | ~         | —     | yes         | —            |
| Geological context            | —         | ~          | —         | yes   | —           | —            |
| Social features               | —         | —          | —         | yes   | —           | —            |
| Cloud sync                    | —         | yes        | —         | yes   | —           | —\*          |
| Cache basemaps                | yes       | yes        | yes       | -     | —           | —            | —\* |
| MBTiles basemaps              | yes       | yes        | yes       | —     | —           | yes          |
| Recent updates                | yes       | yes        | —         | yes   | yes         | yes          |
| Native iOS application        | yes       | —          | —         | —     | —           | yes          |
*/

const appData = [
  {
    name: "Mapboard GIS",
    drawLines: true,
    snapping: true,
    naturalEditing: true,
    topology: true,
    gisNative: true, // asterisk
    gisConnection: true,
    gisExport: "na",
    cacheBasemaps: "soon",

    mbtiles: true,
    recentUpdates: true,
    native: true,
  },
  {
    name: "Touch GIS",
    drawLines: true,
    pointEditing: true,
    gisExport: true,
    photos: true,
    points: true,
    compass: true,
    cacheBasemaps: true,
    mbtiles: true,
    recentUpdates: true,
    native: true,
  },
  {
    name: "Strabo",
    drawLines: true,
    gisExport: true,
    photos: true,
    points: true,
    compass: true,
    analysis: "~",
    context: "~",
    cacheBasemaps: true,
    mbtiles: true,
    recentUpdates: true,
  },
  {
    name: "FieldMove",
    drawLines: true,
    gisExport: true,
    photos: true,
    points: true,
    compass: true,
    analysis: "~",
    cacheBasemaps: true,
    mbtiles: true,
  },
  {
    name: "Rockd",
    photos: true,
    points: true,
    compass: true,
    context: true,
    social: true,
    cloud: true,
    cacheBasemaps: true,
    recentUpdates: true,
  },
  {
    name: "GMDE Mobile",
    drawLines: true,
    snapping: true,
    gisExport: true,
    points: true,
    analysis: true,
    recentUpdates: true,
    mbtiles: true,
  },
];

function NameRow() {
  return h("tr", [
    h("td", null, h("h3", "Capabilities")),
    appData.map((d) => {
      return h("td", null, h("h4.app-name", d.name));
    }),
  ]);
}

function Cell({ enabled }) {
  return h(
    "td",
    { className: enabled ? "yes" : "no" },
    enabled ? h(FaCheck) : ""
  );
}

function Row({ children, item }: any) {
  return h("tr", [
    h("td.row-header", children),
    appData.map((d) => {
      const enabled = d?.[item] ?? false;
      return h(Cell, { enabled });
    }),
  ]);
}

function HeaderRow({ children }) {
  return h("tr", [h("h4", children)]);
}

function ComparisonsTable() {
  return h("table.comparisons-table", [
    h("thead", null, h(NameRow)),
    h("tbody", [
      h(HeaderRow, "Map basics"),
      h(Row, { item: "cacheBasemaps" }, "Cache basemaps"),
      h(Row, { item: "mbtiles" }, "MBTiles basemaps"),
      h(HeaderRow, "Map editing"),
      h(Row, { item: "drawLines" }, "Draw lines and polygons"),
      h(Row, { item: "snapping" }, "Feature snapping"),
      h(Row, { item: "pointEditing" }, "Point-based GIS editing"),
      h(Row, { item: "naturalEditing" }, "Natural spatial editing"),
      h(Row, { item: "topology" }, "Topological editing"),
      h(HeaderRow, "Interoperability"),
      h(Row, { item: "gisNative" }, "GIS-native file format"),
      h(Row, { item: "gisExport" }, "Export to GIS"),
      h(Row, { item: "gisConnection" }, "Desktop GIS connectivity"),
      h(HeaderRow, "Data collection"),
      h(Row, { item: "photos" }, "Outcrop photos"),
      h(Row, { item: "points" }, "Point observations"),
      h(Row, { item: "compass" }, "Structural compass"),
      h(Row, { item: "analysis" }, "Structural analysis"),
      h(HeaderRow, "Community"),
      h(Row, { item: "context" }, "Geological context"),
      h(Row, { item: "social" }, "Social features"),
      h(Row, { item: "cloud" }, "Cloud sync"),
      h(HeaderRow, "Experience"),
      h(Row, { item: "recentUpdates" }, "Recent updates"),
      h(Row, { item: "native" }, "Native iOS application"),
    ]),
  ]);
}

export default ComparisonsTable;
