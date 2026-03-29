## Solution: Blog Sidebar Visibility

Let's hide the sidebar on smaller screens and let the content fill the space.

## Solution explanation

- **Lines 2–5** — `.container` uses `display: flex` and `flex-wrap: wrap` to create the two-column layout at wider viewports while allowing items to stack naturally.
- **Lines 7–10** — `.content` starts at `width: 100%` with padding so it always occupies full width by default — the mobile-first base.
- **Lines 12–16** — `.sidebar` is assigned `width: 25%`, a light `background-color`, and padding as its base styles. Visibility is controlled entirely by media queries rather than here.
- **Lines 19–26** — The `@media (max-width: 1199px)` block targets viewports narrower than 1200px. `.sidebar` is set to `display: none` and `.content` stays `width: 100%`, ensuring the main content fills the screen on smaller devices.
- **Lines 29–41** — The `@media (min-width: 1200px)` block targets desktop widths. `.content` uses `flex: 1 1 0` so it grows to fill remaining space, and `.sidebar` uses `flex: 0 0 300px` to hold a fixed 300px column — producing the classic blog two-column layout.
