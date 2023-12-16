---
version: 4.0.0
date: 2023-12-15
major: false
in-brief:
  - Editing by map layer
  - New workflow for project creation
  - Ability to set a map area
  - Bug fixes and performance improvements
---

## Layer-based editing

Editing by map layer is extremely useful for capturing overlapping map features
(for instance, "bedrock geology" and "surficial geology" layers).
But it can be used to separate any features that you want to edit
independently.

- Separate layers of mapping that can be independently edited
- Snapping improvements for individual map layers
- Layer reordering

Going forward, this feature will underpin a handling of more complex types of
map data (e.g., notes, point-based sample data, etc.) atop the current topological map.

:::caution

While layer-based editing is functional, some features are still in development and will be released in subsequent versions:

- Layer-based topology management
- Layer deletion
- Layer show/hide
- Layer-specific line/polygon types

:::

## New project creation workflow

- New control to set map area
- Suggests the best projection (UTM zones or WGS84 lat lon) for your mapping area

## User interface improvements

- New visualizations of "in-progress edits"
- New controls: **Zoom to map area**, **Reload map**
- First steps towards reworking Projects page
- New selection functions: **Change layer**

## Performance and internal fixes

- Fixes to topology engine to not delete straight lines
- Fixed CPU leak from map event handlers
- More modern internal map server
- Slightly more efficient map queries
- Improved server-linked mapping mode
- Internal handling of point data sources
- Fixes for several bugs with MBTiles layers
