# Solution: Min-Max Responsive Grid Gallery

`display: grid` turns `.gallery` into a grid container. `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))` creates as many columns as will fit, keeps each track at least `200px` wide, and lets each one grow with `1fr` to share any extra space.

`gap: 16px` adds consistent spacing between items without needing margins on individual cards.

For the items, `background-color`, `padding`, and `text-align` provide a simple readable presentation so the layout behavior is easy to see while testing different container widths.
