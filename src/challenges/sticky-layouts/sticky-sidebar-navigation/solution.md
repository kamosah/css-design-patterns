# Solution: Sticky Sidebar Navigation

## Explanation

The two-column layout is built with Flexbox. Adding `position: sticky` and `top: 0` to `.sidebar` makes it stick to the top of the viewport as the main content scrolls.

```css
.layout {
  display: flex;
}

.sidebar {
  position: sticky; /* pins sidebar during scroll */
  top: 0;           /* threshold at which it sticks */
  width: 200px;
}

.content {
  flex: 1;
}
```

- **`display: flex`** on `.layout` places the sidebar and content side by side.
- **`position: sticky` + `top: 0`** on `.sidebar` causes it to behave like `relative` in the normal flow but snap to the top of the viewport once it would otherwise scroll out of view. The sidebar's height stays within its flex row, so `flex: 1` on `.content` continues to fill the remaining width correctly.
- This avoids `position: fixed`, which would remove the sidebar from the flow and require manual width/offset calculations.
