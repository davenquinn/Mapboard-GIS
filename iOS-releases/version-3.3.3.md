---
version: 3.3.3
date: 2023-04-12
major: false
in-brief:
  - Update project file type to use with external projects
  - Major fixes to user interface controls
---

- Greatly improved the layout of UI controls, especially when considering device rotation
- Return to packaged projects (i.e., `.mapboard-project` file is a directory)
  in order to hide SQLite temporary files and improve interoperability
  with projects stored outside of the application directory.
- Initial steps towards QField compatibility (more on that later).
- Improved SwiftUI code generally
