
# Changelog

All notable changes to **Mapboard GIS** will be documented in this file.
It is automatically generated from release notes in the
[`iOS-releases`](iOS-releases) directory using the `prepare:changelog` NPM script.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [**Version `3.3.0`**](/iOS-releases/version-3.3.0.md) — *January 22, 2023*

*This is a major release.* 🎉


This release builds atop the base strong base established in the recent `v3.2.0`
update. It has been possible to quickly add a large number of long-awaited features,
with more to come.

### Allow user interface rotation

Since its inception, **Mapboard GIS** has only been usable in portrait mode, due to
the complexity of building an automatically-rescaling user interface. This limitation has
finally been removed. The sidebar is now a floating, resizable panel.

### Allow map movement while editing

When editing with a stylus, it is usually desireable to be able to move the map quickly
in between edits. However, touch types have proven difficult to separate. We've finally removed this limitation,
allowing easier map movement in all editing modes.

:::info
If desired, separation between editing and movement modes can be restored in **Project Settings**
:::

### Enable mapping atop 3D terrain

We have added a new 3D terrain mode, which allows a stunning leap in mapping capabilities.
This system is based on Mapbox's fantastic new [Maps SDK](https://docs.mapbox.com/ios/maps/guides/). It was
incredibly simple to add and performs amazingly well — Mapbox engineers deserve huge congratulations
for this one.
Right now, the only available DEM is Mapbox's [`terrain-dem-v1` tileset](https://docs.mapbox.com/data/tilesets/reference/mapbox-terrain-dem-v1/), but this may change in the future.

### Improvements for tile overlays

- A bug with loading map overlays were fixed, leading to
  a more predictable experience when basemaps are loaded.
- More layer visibility settings were made persistent
- New warning messages were added for invalid MBTiles datasets and
  those missing overviews.
- The zoom range over which underscaled map overlays show up has
  been increased.

### User interface improvements

We made a ton of small improvements to the user interface:

- Ensure the compass is never hidden behind the sidebar
- Rearrange some settings for clarity
- Make some forms more space-efficient
- Make snap panel visible in _Reshape_ mode
- Hide _Reshape_ tool for polygon editing
- Add a scalebar
- Add an experimental globe mode
- Improve map loading indicators
- Fix a small error in reported map scale
- Disable map pitch when 3D mode is disabled

### Editing improvements

We fixed many small bugs with editing features,
enabling more natural editing over larger datasets:

- Fix snapping behavior for multipart lines
- Much quicker internal implementation for snapping
- Improved _Topological erase_ tool to more correctly find
  intersections; partial fix for repetition of lines.
- Fix reshaping of multipart features
- Automatically split large features by number of
  vertices for efficiency
- Improve continuous update mode for topology (although
  this is still pretty buggy).

We also made numerous internal simplifications for efficiency,
improvements to the threading model, and general improvements.
Now that the hard work of upgrading the fundamentals is done,
we're excited to be moving forward at a faster clip!


## [**Version `3.2.0`**](/iOS-releases/version-3.2.0.md) — *January 4, 2023*

*This is a major release.* 🎉


![The upgraded topology engine in action](/docs/v3-editing/topology.mp4)

This is the first public release of **Mapboard GIS** _Version 3_.
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
enhanced in _Version 3_. This includes updated versions of `proj`, `geos`,
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
