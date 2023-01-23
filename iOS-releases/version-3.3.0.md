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
