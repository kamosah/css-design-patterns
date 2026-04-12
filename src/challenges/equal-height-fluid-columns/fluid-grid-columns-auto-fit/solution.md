## Solution: Fluid Grid Columns with Auto-Fit

Let's create a responsive grid layout with equal height, auto-wrapping columns using CSS Grid's `auto-fit` and `minmax()` functions.

## Solution explanation

In the `styles.css` file, you'll find the following:

**Line 2** (`display: grid`): Turns `.container` into a Grid container. Unlike Flexbox, CSS Grid controls both axes simultaneously, making it ideal for multi-column responsive layouts.

**Line 3** (`grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))`): The key declaration. It combines three concepts:

- `repeat(...)` — repeats a column definition across the container width.
- `auto-fit` — automatically determines how many columns fit, and collapses empty tracks so items expand to fill the row.
- `minmax(200px, 1fr)` — each column is at least 200px wide, and can grow up to an equal share of remaining space.

Together, this creates a fully responsive grid with no media queries: more columns on wide screens, fewer on narrow ones.

**Line 4** (`gap: 1rem`): Adds equal spacing between all rows and columns. Grid row heights are determined automatically, so all items in a row share the same height.

**Lines 7–8** (`.item` styling): A light background and padding for visual clarity — not part of the layout logic.

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}
.item {
  background: #eee;
  padding: 1rem;
}
```

### Why it works

| Property | Effect |
| --- | --- |
| `display: grid` | Enables CSS Grid layout |
| `auto-fit` | Collapses empty columns so items fill available width |
| `minmax(200px, 1fr)` | Sets a minimum column width; grows proportionally beyond that |
| `gap: 1rem` | Consistent spacing without margin hacks |
| Equal row height | Grid stretches all items in a row to the tallest item by default |
