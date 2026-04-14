## Solution: Custom-Property Controlled Column Layout

Let's use CSS custom properties to control column count and gutter spacing in a flexible, theme-ready layout.

## Solution explanation

In the `styles.css` file, you'll find the following:

**Lines 1–2** (`--cols: 3`, `--gutter: 1rem`): Default values are declared directly on `.container`, making them scoped to this element and its children. Any consumer can override them with a single variable reassignment.

**Line 3** (`display: grid`): The container becomes a grid, which gives all children equal height within each row by default (`align-items: stretch`).

**Line 4** (`grid-template-columns: repeat(var(--cols), 1fr)`): The column count is driven entirely by `--cols`. Changing `--cols` to `2` or `4` instantly rewires the grid with no other CSS changes needed.

**Line 5** (`gap: var(--gutter)`): Applies both row and column gaps from a single variable.

**Lines 7–10** (`.box`): Minimal styling to make each cell visible.

```css
.container {
  --cols: 3;
  --gutter: 1rem;
  display: grid;
  grid-template-columns: repeat(var(--cols), 1fr);
  gap: var(--gutter);
}
.box {
  background: #fafafa;
  padding: 1rem;
}
```

### Why it works

| Property | Effect |
| --- | --- |
| `--cols` on `.container` | Scoped variable — overridable per instance without extra classes |
| `repeat(var(--cols), 1fr)` | Translates the variable into equal-width columns at parse time |
| `1fr` units | Each column takes an equal share of remaining space after gaps |
| `gap: var(--gutter)` | Single variable controls both row and column spacing |
| Grid default `align-items: stretch` | All cells in a row automatically match the tallest cell's height |
