# Solution: Complex Subgrid Responsive Layout

The parent grid starts mobile-first with `grid-template-columns: 1fr` and four stacked `grid-template-areas` ("header", "content", "aside", "footer"). Gap is `16px` throughout all breakpoints.

`.content` is declared as `display: grid` with `grid-template-columns: subgrid` so it inherits whatever column tracks the parent exposes in the area it occupies. On mobile this is a single track; on desktop it becomes two tracks (the 3fr and 1fr columns it spans). The subgrid `gap` is set to `8px`.

Inside `.content`, `.title` is pinned to `grid-row: 1; grid-column: 1` and `.card-list` to `grid-row: 2; grid-column: 1`. The card-list is itself a grid using `subgrid` for columns on mobile and tablet, then switching to explicit `repeat(2, 1fr)` at tablet and `repeat(3, 1fr)` at desktop as the parent column structure changes.

At the `640px` breakpoint, the parent gains a second column (`2fr 1fr`) and the template areas rearrange: header and footer span both columns, content takes the left (`2fr`) column, and aside the right (`1fr`). `.content` automatically inherits the narrower single-column subgrid track within its area.

At the `1024px` breakpoint, the parent expands to three columns (`1fr 3fr 1fr`). The template areas move aside to the leftmost column and allow content to span the remaining two columns (`"aside content content"`). With `grid-template-columns: subgrid`, `.content` now inherits two column tracks — the `3fr` and `1fr` columns — enabling finer horizontal alignment of children across the same parent grid lines. The card-list switches to `repeat(3, 1fr)` to fill the wider space with three cards per row.
