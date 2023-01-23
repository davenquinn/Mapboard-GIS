---
version: 3.3.0
date: 2023-01-23
major: true
in-brief:
  - Allow user interface rotation
  - Allow map movement while in editing mode
  - Enable mapping atop 3D terrain
  - Numerous fixes for UI, overlay management, and editing
---

This release builds atop the strong base established just a few weeks ago with the public release of **Version 3**.
Here, we shift focus from restructuring the app's internals
towards adding several long-awaited features.

![Multi-perspective mapping atop 3D terrain](/docs/v3-editing/3d-mapping.mp4)

### Mapping atop 3D terrain

![Portrait user interface, experimental globe, and fast multiscale editing of large datasets](/docs/v3-editing/vertical-zoom.mp4)

We have added a new 3D terrain mode, allowing stunning new capabilities for multi-view mapping.
This system is based on Mapbox's fantastic new [Maps SDK](https://docs.mapbox.com/ios/maps/guides/).
This functionality was simple to add and performs amazingly well — Mapbox engineers deserve huge congratulations
for making this possible.
Right now, the only available DEM is Mapbox's [`terrain-dem-v1` tileset](https://docs.mapbox.com/data/tilesets/reference/mapbox-terrain-dem-v1/), but this may change in the future.

### User interface rotation

Since its inception, **Mapboard GIS** has only been usable in landscape mode,
due to the complexity of building an automatically-rescaling user interface.
This limitation has finally been removed. The sidebar is now a floating panel,
and the app can be freely rotated.

### Map movement while editing

When editing with a stylus, it is often useful to reposition the map between
edits. However, touch types have proven difficult to separate. We've finally
removed this limitation, allowing easier map movement in all editing modes.

:::note
If desired, separation between _Move_ and edit modes can be restored in **Project Settings**
:::

### Tile overlay improvements

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

### Editing bug fixes

We fixed many small bugs with editing features:

- Fix snapping behavior for multipart lines
- Improved _Topological erase_ tool to more correctly find
  intersections; partial fix for repetition of lines.
- Fix reshaping of multipart features
- Fixes for larger datasets in Spatialite:
  - Much quicker internal implementation for snapping
  - Automatically split large features by number of
    vertices for efficiency
- Improve continuous update mode for topology (although
  this still has a few notable bugs).
- Improvements to internal threading model

Now that the hard work of upgrading the fundamentals is done,
we're excited to be moving forward at a faster clip!
