# Solution: Masonry-Style Responsive Grid

`.masonry` starts with `grid-template-columns: repeat(2, 1fr)` for mobile — two equal columns. `grid-auto-flow: dense` is the key property: it tells the grid engine to backtrack and fill empty cells with later items that fit, rather than leaving gaps after a tall item. Without it, a `span 3` item leaves a blank column beside it that never gets filled.

`grid-auto-rows: 80px` gives every implicit row a fixed height, so `span 2` reliably produces 170px (2×80 + 10px gap) and `span 3` produces 250px. Without a fixed row height, spans on auto-sized rows are inconsistent.

The two media queries expand columns to 3 at 600px and 5 at 900px. Only `grid-template-columns` needs to change — `dense`, `gap`, and `grid-auto-rows` cascade from the base rule.

`.item` styling is minimal: background, padding, border, and `border-radius`. The masonry height variation comes entirely from the `style="grid-row: span N"` inline attributes on each element.
