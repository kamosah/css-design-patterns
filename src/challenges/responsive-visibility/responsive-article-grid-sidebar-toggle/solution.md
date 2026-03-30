# Solution: Responsive Article Grid with Sidebar Toggle

## Explanation

### Base styles (mobile-first)

`.container` starts as `display: flex; flex-direction: column` so content stacks vertically on all screens by default.

`.article-grid` is a CSS Grid with `grid-template-columns: 1fr` — a single column — and a `16px` gap. Each article gets card-like styling (padding, background, border, border-radius) at the base level so these aesthetics apply at every breakpoint.

`.sidebar` starts with `display: none`, ensuring it is invisible until the desktop media query explicitly shows it.

### Mobile (`max-width: 599px`)

The container stays in column flex direction and the article grid keeps its single column. The sidebar remains hidden. These rules are technically redundant with the base styles but make the intent explicit.

### Tablet (`min-width: 600px` and `max-width: 899px`)

The container still stacks vertically (`flex-direction: column`) since the sidebar is still hidden. The article grid switches to `grid-template-columns: repeat(2, 1fr)` — two equal columns — with a `16px` gap.

### Desktop (`min-width: 900px`)

`.container` switches from Flexbox to `display: grid` with `grid-template-columns: 3fr 1fr`, placing the article grid at 75% and the sidebar at 25% side by side, with a `24px` gap between them.

`.article-grid` upgrades to `repeat(3, 1fr)` — three equal columns — and a wider `24px` gap to take advantage of the available space.

`.sidebar` is set to `display: block`, revealing the author section alongside the grid.

### Why `3fr 1fr` instead of `75% 25%`?

`3fr 1fr` expresses the same ratio but respects the `gap` — fractional units divide the *remaining* space after gaps are subtracted, so the columns never overflow their container. Fixed percentages would ignore the gap and could cause overflow at narrow desktop widths.
