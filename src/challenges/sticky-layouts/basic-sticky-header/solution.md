# Solution: Basic Sticky Header

## Explanation

Setting `position: sticky` and `top: 0` on `.site-header` causes it to stick to the top of the viewport as the user scrolls.

```css
.site-header {
  position: sticky;
  top: 0;
  background: #333;
  color: white;
  padding: 1rem;
  width: 100%;
}
```

- **`position: sticky`** — the element behaves like `relative` until it would scroll out of view, at which point it acts like `fixed` within its scroll container.
- **`top: 0`** — defines the threshold offset at which the element "sticks". Without this, `sticky` has no effect.
- **`background`** — an opaque background is required so the sticky header covers the scrolling content beneath it rather than overlapping transparently.
- **`width: 100%`** — ensures the header spans the full viewport width.
