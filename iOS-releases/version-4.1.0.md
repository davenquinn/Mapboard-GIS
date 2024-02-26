---
version: 4.1.0
date: 2024-02-26
major: true
in-brief:
  - Adjust map area for an existing project
  - Bug fixes and user-interface improvements
---

### Adjusting map area

- Set the map area for an existing project
- Switch base layer types for map area selection
- Show map area as an editable map layer
- Minor bug fixes and usability improvements

### Bug fixes and internal improvements

- Fix a major bug ([#15](https://github.com/davenquinn/Mapboard-GIS/issues/15)) that caused the app to crash when opening a project
- Removed potential sources of instability in app startup routines
- Reduced duplication and global state, potentially improving memory management and performance
- Refactored app startup code for more efficient and intuitive development
- Updated to Apple's StoreKit 2 for subscription management
- Removed warnings and errors from the app's build process
