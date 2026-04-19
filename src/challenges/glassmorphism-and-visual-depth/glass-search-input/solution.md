# Solution: Glass Search Input

## Explanation

The glass search input applies `backdrop-filter` and a translucent background directly to the `<input>` element, then uses a transparent border by default so the focus ring can appear without shifting the layout.

```css
.search-container {
  width: 300px;
}

.glass-search {
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(6px);
  border: 1px solid transparent;
  border-radius: 12px;
  font-size: 1rem;
  color: #333;
  outline: none;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
}

.glass-search:focus {
  border-color: rgba(255, 255, 255, 0.6);
}
```

- **`border: 1px solid transparent` by default** — using `border: none` and then adding `border: 1px solid ...` on focus would push surrounding elements by 1px each time the input is focused. Keeping a transparent 1px border at all times eliminates that shift; only the color changes on focus.
- **`transition: border-color 0.3s ease`** — transitioning only `border-color` instead of `border` keeps the animation smooth and avoids browser quirks with shorthand property transitions.
- **`outline: none`** — browsers apply a default focus outline that would overlap the custom border. Removing it here is safe because the `border-color` change provides an equivalent, more visually coherent focus indicator.
- **`box-sizing: border-box`** — ensures `width: 100%` includes the padding and border, so the input fills the container without overflowing.
- **`backdrop-filter` on `<input>`** — inputs are replaced elements; the `background` must have `alpha < 1` for `backdrop-filter` to be visible, which `rgba(255, 255, 255, 0.2)` satisfies.
