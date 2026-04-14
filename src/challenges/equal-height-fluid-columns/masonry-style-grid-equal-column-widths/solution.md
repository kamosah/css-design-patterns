## Solution: Masonry-Style Grid with Equal Column Widths

Let's simulate a masonry layout using CSS Grid with equal-width columns, dense packing, and dynamic row spans to eliminate vertical gaps.

## Solution explanation

In the `styles.css` file, you'll find the following:

**Line 2** (`grid-template-columns: repeat(3, 1fr)`): Three equal-width columns that share the container width.

**Line 3** (`grid-auto-rows: 1rem`): Defines the implicit row track height as `1rem`. Cards span multiple row tracks via `--span`, so their visual height equals `--span × 1rem` (plus gap contributions).

**Line 4** (`grid-auto-flow: dense`): Instructs the auto-placement algorithm to backfill earlier gaps with smaller items, creating the tight masonry packing. Without this, short cards after a tall card would leave an empty cell above them.

**Line 5** (`gap: 1rem`): Uniform spacing between columns and rows.

**Line 8** (`grid-row: span var(--span)`): Each card reads `--span` from its inline style (e.g. `style="--span: 4"`) and spans that many row tracks. Because `data-span` attributes alone can't be consumed by CSS custom properties, the HTML supplies `--span` as an inline custom property alongside the semantic `data-span` attribute.

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1rem;
  grid-auto-flow: dense;
  gap: 1rem;
}
.card {
  grid-row: span var(--span);
}
```

### Why it works

| Property | Effect |
| --- | --- |
| `grid-auto-rows: 1rem` | Creates a fine-grained row grid; cards span N tracks to achieve their height |
| `grid-auto-flow: dense` | Backfills gaps so short cards fill holes left by tall neighbors |
| `grid-row: span var(--span)` | Each card controls its own height via a scoped CSS custom property |
| Inline `style="--span: N"` | The only pure-CSS mechanism to pass per-element numeric values to CSS |
