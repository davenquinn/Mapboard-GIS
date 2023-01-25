---
version: 3.3.1
date: 2023-01-25
major: false
in-brief:
  - Optimizations for a smoother editing experience
  - Prevent database writes from freezing the user interface
  - Speed up some database queries
---

This release includes bugfixes atop [Version `3.3.0`](/docs/ios/releases/3.3.0),
focused on providing a smoother editing experience for large feature datasets.

### Bug fixes

- Refactor many synchronous database writes, which block the user interface causing stuttering
- Fix error that prevented access to select panel
- Make some feature queries much faster through better spatial indexing
- Improve the sequencing of editing actions and topology updates, cancelling in-progress
  topology solving when new features are added. "Continuous topology" mode now has minimal
  negative effects on the editing experience (although it does still take a lot of battery power).
- Fix bug that prevented editing after device is rotated to portrait mode
- Reduce unnecessary work upon a "cold start" of the app
