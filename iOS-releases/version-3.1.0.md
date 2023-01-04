---
version: 3.1.0
date: 2022-12-29
major: true
pre: true
in-brief: Fixes in preparation for release
---

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
