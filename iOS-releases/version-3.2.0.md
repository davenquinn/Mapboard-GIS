---
version: 3.2.0
date: 2023-01-04
major: true
in-brief:
  - Modernize mapping stack
  - Stabilized and upgraded the GIS software stack
  - New reshape and topological editing tools for lines
  - Faster and more robust topological operations
  - Allow setting opacity on lines, polygons, and raster overlay layers
---

This is the first public release of the `3.x` series of **Mapboard GIS**.
It is a major rework of the app's internals and spatial editing capabilities,
in preparation for coming functional enhancements.

### Mapbox Maps SDK

The mapping user interface has been greatly improved to transition
from Mapbox's legacy iOS SDK to the newer
[Mapbox Maps SDK for iOS](https://docs.mapbox.com/ios/maps/guides/).
This required significant retooling of the app's backend data flows
and structures, including with an internal vector tile

### Upgraded spatial stack

**Mapboard GIS** is powered by open-source geospatial libraries, and its
software stack has been greatly enhanced in the `3.0` release.

### Potential pain points

Since this is a major overhaul of the app, some functionality was not
completely ported over for expediency. We anticipate fixing many problems
and omissions in future minor versions in the `3.x` series.

### Small user-interface changes
