# Solution: Overlapping Sticky Banner

## Explanation

`position: sticky` keeps the element in normal document flow until it reaches the specified `top` threshold, at which point it behaves like `position: fixed` — but only within its scroll container.

```css
.content {
  margin-top: 20px;
}

.banner {
  height: 60px;
  position: sticky;
  top: 0;
  background: #333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}
```

- **`position: sticky; top: 0`** — the browser calculates the banner's natural position in flow and starts fixing it at the viewport top the moment scrolling would move it above that threshold.
- **`margin-top: 20px` on `.content`** — prevents the content from sitting flush against the banner before stickiness kicks in. Once sticky, the banner overlaps content rather than pushing it, so no extra spacing is needed from JavaScript.
- **`z-index: 10`** — elevates the banner above the stacking context of `.content`, ensuring it visually overlaps rather than hiding behind subsequent elements.
- **Unlike `position: fixed`**, the sticky banner still occupies its original space in the layout, so there's no jump or layout shift when it activates.
