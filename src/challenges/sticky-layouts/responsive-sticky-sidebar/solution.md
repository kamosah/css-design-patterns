# Solution: Responsive Sticky Sidebar

## Explanation

The layout uses Flexbox to place the sidebar and content side by side. The base sidebar styles use the default `position: static`, so on mobile it scrolls with the page. A `min-width: 768px` media query then enables sticky positioning for desktop.

```css
.container {
  display: flex;
}

.sidebar {
  flex: 0 0 200px;
  padding: 1rem;
  background: #f5f5f5;
  /* position: static by default — scrolls on mobile */
}

.content {
  flex: 1;
  padding: 1rem;
}

@media (min-width: 768px) {
  .sidebar {
    position: sticky; /* pins sidebar during scroll */
    top: 0;           /* stick at top of viewport */
    align-self: flex-start; /* prevents flex stretch from disabling sticky */
  }
}
```

- **`display: flex`** on `.container` places sidebar and content side by side.
- **`position: sticky` + `top: 0`** causes the sidebar to behave like `relative` in normal flow, then snap to the top once it would otherwise scroll out of view.
- **`align-self: flex-start`** is essential — without it, the sidebar stretches to the full height of the flex row, leaving no room to "stick" (the element is already as tall as its scroll container).
- Wrapping only in `@media (min-width: 768px)` means mobile gets the default `position: static` with no extra code needed — a mobile-first progressive enhancement pattern.
