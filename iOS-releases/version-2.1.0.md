---
version: 2.1.0
date: 2020-11-27
---

### Changed

- Added the ability to show vertices and endpoints of the line layer (to diagnose topology problems)
- Added topology polygon layer that uses the same display interfaces as
  the line and polygon layers. This takes advances made for the onboard Spatialite
  backend and generalizes them to work with the PostGIS backend as well.
  Using this functionality requires shifting to the Version 2 series of
  the `mapboard-server` project.
