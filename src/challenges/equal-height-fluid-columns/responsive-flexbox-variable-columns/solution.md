## Solution: Responsive Flexbox with Variable Columns

Let's build a responsive Flexbox layout that adapts from one to three equal height columns based on screen width.

## Solution explanation

In the `styles.css` file, you'll find the following:

**Lines 2–3** (`display: flex; flex-wrap: wrap`): The container becomes a wrapping Flexbox. `flex-wrap: wrap` allows panels to flow onto new rows when they hit their `flex-basis` limit.

**Line 6** (`flex: 1 1 100%`): Panels default to full width — a single column for screens ≤ 600px. The shorthand sets `flex-grow: 1`, `flex-shrink: 1`, and `flex-basis: 100%`.

**Line 9** (`flex: 1 1 50%`): At 601px and above, each panel takes up 50% of the row — two per row. Equal height is maintained automatically because all panels in the same row stretch to the tallest sibling.

**Line 12** (`flex: 1 1 33.333%`): At 901px and above, each panel takes up one third — three per row.

```css
.container {
  display: flex;
  flex-wrap: wrap;
}
.panel {
  flex: 1 1 100%;
}
@media (min-width: 601px) {
  .panel { flex: 1 1 50%; }
}
@media (min-width: 901px) {
  .panel { flex: 1 1 33.333%; }
}
```

### Why it works

| Property | Effect |
| --- | --- |
| `display: flex` + `flex-wrap: wrap` | Enables wrapping row-based layout |
| `flex-basis: 100%` | One panel per row (single column) by default |
| `flex-basis: 50%` | Two panels per row at medium widths |
| `flex-basis: 33.333%` | Three panels per row at wide widths |
| `flex-grow: 1` | Panels fill remaining row space evenly |
| Equal height | Flexbox stretches all items in a row to the tallest panel automatically |
