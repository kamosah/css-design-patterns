# Solution: Dynamic Grid with Named Areas

The base `.grid-container` styles target mobile: a single column (`1fr`), three named areas stacked vertically (`header`, `main`, `footer`), and rows sized `auto 1fr auto` so the main content expands to fill available height.

The `@media (min-width: 768px)` block introduces the tablet layout. The sidebar reappears by adding `"sidebar"` between header and main in `grid-template-areas`. The `.sidebar` is assigned its grid area and styled here rather than in the base styles, since it isn't part of the mobile layout at all.

The `@media (min-width: 1024px)` block switches to two columns (`1fr 3fr`). The template areas string `"header header" / "sidebar main" / "footer footer"` spans header and footer across both columns using the repeated name trick — the grid engine merges adjacent identically-named cells into one area.

The `@media (max-width: 767px)` block hides the sidebar with `display: none`. Even though the mobile base template doesn't place it, the element still exists in the DOM — this ensures it isn't accidentally visible if the sidebar styles are applied before the media query resolves.
