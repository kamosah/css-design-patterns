# Solution: Adaptive Dashboard Widget and Filter Panel Visibility

## Explanation

### Base styles

`.dashboard-container` uses `display: grid` with a single column — sidebar and main content stack vertically by default.

`.sidebar` starts as `display: none`. `.sidebar .label` is also hidden (`display: none`), so even when the sidebar appears it shows icons only until the desktop breakpoint unlocks labels.

`.filter-panel` starts collapsed (`height: 0; overflow: hidden`) with a CSS transition, expanding to 200px on `:focus-within` or `:hover`. `:focus-within` is key — it activates when any descendant (input, select, button) receives keyboard focus, enabling accessible expand/collapse without JavaScript.

`.filter-toggle` is `display: none` by default — it only appears on mobile.

`.widget-detail` starts as `display: none` — each breakpoint explicitly shows only the widgets appropriate for that viewport.

### Mobile (`max-width: 479px`)

`.filter-toggle` becomes `display: block` as a fixed circular button at bottom-right. `.filter-panel` is repositioned to `position: fixed; top: 10%; left: 5%; width: 90%` so it appears as an overlay. On hover/focus it expands to `height: 80vh` with `overflow-y: auto` for scrollable content. Only `.widget-summary` is visible.

### Small tablet (`min-width: 480px` and `max-width: 767px`)

`.filter-toggle` is hidden. `.filter-panel` returns to inline flow (`display: block`) and expands to 200px on hover/focus. `.widget-summary` and `.widget-detail.detail-1` are both shown; others stay hidden.

### Large tablet (`min-width: 768px` and `max-width: 1023px`)

`.dashboard-container` switches to `grid-template-columns: 60px 1fr`, revealing the icon-only sidebar. A nested `@media (min-width: 992px)` inside this block auto-expands the filter panel at the upper end of the tablet range without affecting the desktop breakpoint. `.widgets` becomes a 2-column grid showing summary, detail-1, and detail-2.

### Desktop (`min-width: 1024px`)

`.dashboard-container` expands to `200px 1fr`. `.sidebar .label` becomes `display: inline-block`. The widgets grid uses `repeat(3, 1fr)` with `grid-template-rows: repeat(2, auto)` — `.widget-summary` is placed at `grid-column: 1 / 2; grid-row: 1 / 3`, spanning both rows in the first column while the three detail widgets fill the right two columns.

### Why nested `@media` inside a `@media` block?

CSS allows nesting media queries, and the specificity cascade still applies. The `@media (min-width: 992px)` rule inside the large-tablet block is effectively `@media (min-width: 768px) and (max-width: 1023px) and (min-width: 992px)` — meaning it only fires between 992px and 1023px, auto-expanding the filter panel without needing a separate rule.
