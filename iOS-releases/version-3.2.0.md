---
version: 3.2.0
date: 2023-01-05
major: true
in-brief:
  - Modernized mapping stack
  - Stabilized and upgraded GIS software stack
  - New reshape and topological editing tools for lines
  - Faster and more robust topological operations
  - Opacity of polygons and raster overlay layers can be varied
---

![The upgraded topology engine in action](/docs/v3-editing/topology.mp4)

This is the first public release of the **Mapboard GIS** `3.x` series.
It is a major rework of the app's internals and spatial editing capabilities,
in preparation for coming functional enhancements.

### New editing tools

![Drawing and reshaping lines](/docs/v3-editing/editing-tools.mp4)

- Line snapping has been improved to also snap
  current linework endpoints to nearby created
  and reshaped lines
- A new **Reshape** tool allows rapid iteration
  of linework
- **Topological erasing** allows trimming of
  dangling edges
- A greatly improved **Undo** tool allows full recovery from any line or polygon change.

![Reshape and undo](/docs/v3-editing/reshape-undo.mp4)

![Topological erase mode](/docs/v3-editing/topological-erase.mp4)

### An improved topology system

The onboard topology engine has been improved for stability, performance, and effectiveness.
Although it is still somewhat brittle, it now allows rapid and high-quality iterative solving in many cases.

### An updated map canvas

The mapping user interface has been greatly improved to transition
from Mapbox's legacy iOS SDK to the newer
[Mapbox Maps SDK for iOS](https://docs.mapbox.com/ios/maps/guides/).
This required significant retooling of the app's backend data flows
and structures, including with an internal vector tile

### Upgraded spatial stack

The stack of spatial software that powers **Mapboard GIS** has been greatly
enhanced in the `3.0` release. This includes updated versions of `proj`, `geos`,
`spatialite`, `rttopo`, and other supporting open-source geospatial libraries.
We've also greatly enhanced the compilation pipeline for these libraries to be
less brittle and enable more direct utilization of their functionality.

:::caution

### Missing `v2` functionality

This is a major overhaul of the app, and some features have not yet
been completely reimplemented using new patterns. We anticipate fixing many problems
and omissions in future minor versions in the `3.x` series.

Key missing pieces:

- Planetary projections are harder with `libproj` versions greater than 4, and have not been validated in the current version
- Server connections with PostGIS need major upgrades and currently don't work.
  :::
