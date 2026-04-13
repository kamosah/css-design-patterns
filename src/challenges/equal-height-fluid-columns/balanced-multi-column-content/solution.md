## Solution: Balanced Multi-Column Content with CSS Columns

Let's use the CSS multi-column layout module with `column-fill: balance` to balance content across columns of fixed count, maintaining equal height appearances.

## Solution explanation

In the `styles.css` file, you'll find the following:

**Lines 1–3** (`.container p`): Resets paragraph margins and justifies text so the columns look clean and newspaper-like.

**Line 7** (`column-count: 3`): Splits the container into exactly three columns. The browser automatically calculates each column width.

**Line 8** (`column-gap: 1rem`): Sets the gutter space between columns.

**Line 9** (`column-fill: balance`): Distributes content so all columns end at approximately the same height, rather than filling top-to-bottom sequentially.

```css
.container p {
  margin: 0;
  text-align: justify;
}

.container {
  column-count: 3;
  column-gap: 1rem;
  column-fill: balance;
}
```

### Why it works

| Property | Effect |
| --- | --- |
| `column-count: 3` | Creates exactly three columns; the browser calculates their width |
| `column-gap: 1rem` | Adds readable whitespace between columns |
| `column-fill: balance` | Distributes text evenly so all columns finish at the same height |
| `text-align: justify` | Gives columns a clean, editorial appearance |
