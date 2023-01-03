---
version: 2.2.4
in-brief:
  - Completely revamped mapping system based on Mapbox Maps SDK v10
  - New vector tile rendering pipeline
  - Upgraded GIS software libraries (Spatialite, GEOS, and Proj)
    to the latest stable versions
  - Allow opacity to be set for lines, polygons, and raster overlay
    layers
date: 2021-04-19
---

### Better raster-tile layer support

- Improvements and bugfixes for input forms
- Ability to specify tileset parameters (tile size and scheme)
- Tilesets should now be specified using `https://example.com/tiles/{z}/{x}/{y}.png` (a [TileJSON `tiles` spec](https://github.com/mapbox/tilejson-spec/tree/master/2.2.0))

### Project reprojection

**Spatialite** projects can be reprojected from the **Edit project** form by specifying a new SRID. All features will be rewritten, so use this capability with caution!

### Planetary use

Better support for planetary (non-Earth) use by providing a pathway to add custom coordinate systems.
Coordinate systems must be added to the `spatial_ref_sys` table in an external SQLite browser.

Add an optional `spheroid_radius` project configuration setting to adapt map scale reporting to different planetary bodies.
This configuration must be added directly to the project file, as such:

```
INSERT INTO mapboard_config
VALUES ('spheriod_radius', 3396190);
```