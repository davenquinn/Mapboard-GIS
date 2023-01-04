
# Changelog

All notable changes to **Mapboard GIS** will be documented in this file.
It is automatically generated from release notes in the
[`iOS-releases`](iOS-releases) directory using the `prepare:changelog` NPM script.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [**Version `3.2.0`**](/iOS-releases/version-3.2.0.md) — *Unreleased*

*This is a major release.* 🎉


This is the first public release of the `3.x` series of **Mapboard GIS**.
It is a major rework of the app's internals and spatial editing capabilities,
in preparation for coming functional enhancements.

### Backend updates

**Mapboard GIS** is powered by open-source geospatial libraries, and its
software stack has been greatly enhanced in the `3.0` release.

### Potential pain points

Since this is a major overhaul of the app, some functionality was not
completely ported over for expediency. We anticipate fixing many problems
and omissions in future minor versions in the `3.x` series.

### Small user-interface changes


## [**Version `3.1.0`**](/iOS-releases/version-3.1.0.md) — *December 28, 2022*

*This is a pre-release.*


### Small user-interface changes

- Fixed demo counter views
- Fix some small UI bugs with map interface

### Purchase handling

- Fixed handling of in-app purchases (for **Full version** subscription)
- Fixed rate limiting of edits in demo mode

### Editing tool fixes

Revamped the _Reshape_ and _New line_ tools for more cohesive snapping
behavior.

### Layer filtering

- Restored show/hide and filter-by-type capabilities for line and polygon layers.
- Filtering behavior now prevents lines from being erased and modified when
  the layer is not shown.

:::caution
Features are still modified for hidden layers when in _Topological_ or _All_ editing modes.
This behavior needs to be improved, probably by overriding filtering settings when in
these edit modes, or removing filtering options altogether in favor of a more advanced
"layers" system.
:::


## [**Version `3.0.0`**](/iOS-releases/version-3.0.0.md) — *Unreleased*

*This is a pre-release.*


- Completely revamped mapping system based on Mapbox Maps SDK v10
- Fixes to editing tools and map views
- New vector tile rendering pipeline
- Upgraded GIS software libraries


## [**Version `2.3.0`**](/iOS-releases/version-2.3.0.md) — *November 27, 2021*


### Offline access to Mapbox tile layers

Added a user interface for creating and managing Mapbox GL offline tile packs.
This currently has a very basic user interface, but it allows Mapbox-provided basemaps
to be used effectively in the field.

### Bugfixes

- Fixed a bug with the control panel for creating tile layers from external URLs
- Fixed some minor display bugs

## [**Version `2.2.4`**](/iOS-releases/version-2.2.4.md) — *April 18, 2021*


### Better raster-tile layer support

- Improvements and bugfixes for input forms
- Ability to specify tileset parameters (tile size and scheme)

Tilesets should now be specified using a [TileJSON `tiles` spec](https://github.com/mapbox/tilejson-spec/tree/master/2.2.0), e.g. `https://example.com/tiles/{z}/{x}/{y}.png`

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


## [**Version `2.2.3`**](/iOS-releases/version-2.2.3.md) — *March 20, 2021*


### Initial public App Store release! 🎉

See the [release announcement](https://davenquinn.com/blog/2021/3/mapboard-gis-released)
for more information!

- Added some links
- Small optimizations


## [**Version `2.2.0`**](/iOS-releases/version-2.2.0.md) — *March 18, 2021*

*This is a pre-release.*


- Fixed prerelease bugs
- Make line certainty control dash pattern
- Add experimental geological symbols
- `.mapboard-project` files are now bare SQLite databases rather than packages.
  This allows direct opening in GIS software and database browsers.
- Many small UI fixes
- Deduplicated some frameworks


## [**Version `2.1.0`**](/iOS-releases/version-2.1.0.md) — *November 26, 2020*

*This is a pre-release.*


### Changed

- Added the ability to show vertices and endpoints of the line layer (to diagnose topology problems)
- Added topology polygon layer that uses the same display interfaces as
  the line and polygon layers. This takes advances made for the onboard Spatialite
  backend and generalizes them to work with the PostGIS backend as well.
  Using this functionality requires shifting to the Version 2 series of
  the `mapboard-server` project.


## [**Version `2.0.1`**](/iOS-releases/version-2.0.1.md) — *October 28, 2020*

*This is a pre-release.*


### Fixes

- Fixed showing and hiding of map layers and data types
- More functional topology control panel, now accessible
  directly from the polygons panel.


## [**Version `2.0.0`**](/iOS-releases/version-2.0.0.md) — *October 19, 2020*

*This is a pre-release.*


### Added

- New topology mode for Spatialite backend

### Changed

- User interface rewritten in SwiftUI
- Moved to **Mapbox GL** for mapping backend


## [**Version `1.0.0`**](/iOS-releases/version-1.0.0.md) — *2018–2020*

*This is a pre-release.*


The 1.0 series of Mapboard GIS was the initial release for internal use. It supported
basic field mapping functionality, such as `mbtiles` basemaps and the
onboard Spatialite GIS backend.
