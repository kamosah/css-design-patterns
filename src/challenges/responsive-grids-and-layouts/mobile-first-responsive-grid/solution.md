# Solution: Mobile-First Responsive Grid

The base `.responsive-grid` rule sets `grid-template-columns: 1fr`, which gives a single full-width column — the starting point for mobile-first CSS. The `gap: 20px` applies to all breakpoints from one declaration.

The first media query at `min-width: 400px` overrides `grid-template-columns` to `repeat(2, 1fr)`, creating two equal columns. Because this is `min-width`, it only activates on viewports 400px wide and above, leaving the single-column layout untouched on narrower screens.

The second media query at `min-width: 800px` overrides again to `repeat(3, 1fr)`, adding the third column. Only the `grid-template-columns` property needs to change at each breakpoint — `gap` and all other properties cascade from the base rule without repetition.

The `.grid-item` styles apply uniformly across all breakpoints: a pale background, padding, light border, rounded corners, and centered text.
