# Solution: Responsive Dashboard Card Layout

The base `.dashboard` rule sets `grid-template-columns: 1fr` — a single full-width column for mobile. `gap: 20px` applies uniformly at all breakpoints from this one declaration.

The `@media (min-width: 600px)` block overrides `grid-template-columns` to `repeat(2, 1fr)`, creating two equal columns for tablet viewports. The `@media (min-width: 900px)` block upgrades to `repeat(4, 1fr)` for desktop — jumping directly to four columns, which aligns cleanly with even-column design systems.

The `.card` styles use `display: flex` with `align-items: center` and `justify-content: center` to center card content, and `height: 100%` to fill the grid row height. CSS Grid stretches all cells in a row to the tallest item by default — `height: 100%` on the flex container ensures any inner elements can also fill that stretched height if needed.
