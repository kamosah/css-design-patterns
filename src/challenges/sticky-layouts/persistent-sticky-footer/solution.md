# Solution: Persistent Sticky Footer

## Explanation

`position: sticky` with `bottom: 0` pins the footer to the bottom of the viewport once it would otherwise scroll out of view.

```css
.content {
  height: 2000px; /* simulate long content */
}

.sticky-footer {
  position: sticky; /* stays in document flow until threshold */
  bottom: 0;        /* sticks when it reaches the bottom edge */
  background: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
}
```

- **`position: sticky`** lets the element behave like `position: relative` during normal scroll, but snaps to the specified edge when it would otherwise leave the viewport.
- **`bottom: 0`** sets the threshold — the footer sticks once its bottom edge aligns with the bottom of the scroll container.
- Unlike `position: fixed`, sticky keeps the element in document flow, so no additional offset calculations or layout shifts are needed.
- The footer must be a direct child of the scrolling container (`<body>`) — any `overflow: hidden` or `overflow: auto` ancestor between the footer and the viewport would confine the sticky context and break the effect.
