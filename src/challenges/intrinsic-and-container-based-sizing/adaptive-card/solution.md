# Solution: Adaptive Card Component

Setting `container-type: inline-size` on `body` makes the page a named container (`page`) so `.card` can query its parent's inline size and update its own `grid-template-columns`. Setting a second `container-type: inline-size` directly on `.card` (named `card`) lets its descendants — `h2`, `img`, `.content` — query the card's own width independently.

`aspect-ratio: 4 / 3` locks the image proportions. `object-fit: cover` fills the box without distortion, cropping if needed.

Inside `@container page (min-width: 300px)`, the card switches from `1fr` to `1fr 1.2fr`, placing the image on the left and content on the right. Inside `@container card (min-width: 300px)`, the heading grows from `0.875rem` to `1.25rem` — querying the card's own size rather than the page's, so typography always tracks the card's actual rendered width.
