# Solution: Three-Panel Responsive Layout

`display: grid` creates a grid formatting context for the three direct children.  
`grid-template-columns: minmax(200px, max-content) 1fr fit-content(300px)` assigns each column a sizing strategy that matches the requirements:

- `minmax(200px, max-content)` keeps the nav column at least `200px` wide and allows it to grow to the intrinsic width needed by its content.
- `1fr` makes the main column absorb the remaining free space.
- `fit-content(300px)` sizes the ad column to its content up to a hard cap of `300px`.

`gap: 16px` adds consistent spacing between columns so the layout breathes and reflows cleanly as available width changes.

The panel background colors and padding are only present to make each region visually distinct while validating layout behavior.
