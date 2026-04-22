# Solution: CSS Grid Sticky Sidebar and Header

## Explanation

The layout uses CSS Grid to place the header, sidebar, and content, then relies on `position: sticky` to keep the header and sidebar visible during scroll.

```css
:root {
  --header-height: 60px;
}

.grid-container {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: var(--header-height) 1fr;
  min-height: 100vh;
}

.site-header {
  grid-column: 1 / -1;
  position: sticky;
  top: 0;
  z-index: 10;
  height: var(--header-height);
}

.sidebar {
  position: sticky;
  top: var(--header-height);
  align-self: start;
  height: calc(100vh - var(--header-height));
}
```

## Why it works

| Technique | Purpose |
|---|---|
| `grid-column: 1 / -1` on `.site-header` | Spans the header across all columns (sidebar + content) |
| `position: sticky; top: 0` on `.site-header` | Pins the header at the viewport top as the page scrolls |
| `align-self: start` on `.sidebar` | Collapses the sidebar to its natural height — without this, the grid item stretches to fill the row and `sticky` has no scroll delta to act on |
| `top: var(--header-height)` on `.sidebar` | Ensures the sidebar sticks immediately below the header with no gap or overlap |
| `--header-height` custom property | Single source of truth: the grid row size and the sidebar offset stay in sync automatically |
| `min-height: 100vh` on `.grid-container` | Allows the grid to grow beyond the viewport so the page scrolls and sticky elements have room to activate |

- **`align-self: start`** is the non-obvious key — by default grid items stretch to fill their cell height, making the sticky offset meaningless because the item is already as tall as its scroll container.
- **`--header-height`** is set on `:root` and reused in both `grid-template-rows` and the sidebar's `top`, so changing it in one place updates both.
