---
version: 4.3.0
date: 2024-11-03
major: true
in-brief:
  - Add controls for map layers
  - Improve user interface for new features
  - Fix project update bugs
---

### Map layer controls

- Improve the user interface for showing and hiding map layers
- Add an option to show only one map layer at a time, drastically increasing performance for large, multilayer datasets

### Bug fixes and internal improvements

- Fix project file share sheet
- Properly upgrade projects from older versions on app startup
- More efficient handling of app initialization and project loading
- Improve message passing at the top levels of the app
- Update the underlying database framework to work with iOS 18
