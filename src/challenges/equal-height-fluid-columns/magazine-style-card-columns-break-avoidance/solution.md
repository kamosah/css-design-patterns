## Solution: Magazine-Style Card Columns with Break Avoidance

Let's create a magazine-style multi-column layout using CSS columns and `break-inside: avoid`, with dynamic column count via custom properties.

## Solution explanation

In the `styles.css` file, you'll find the following:

**Lines 1-5** (`.magazine`): `--cols: 3` stores the default number of columns in a custom property, making the layout easy to retune later. `--gap: 1rem` defines the shared spacing value. `column-count: var(--cols)` creates the magazine-style column flow using that variable, and `column-gap: var(--gap)` sets consistent space between columns.

**Lines 7-12** (`.card`): `display: inline-block` lets each card behave as a single box inside the multi-column flow. `width: 100%` makes the card fill the full width of its column. `break-inside: avoid` prevents a card from splitting between columns, so each article stays intact. `margin-bottom: var(--gap)` adds vertical spacing between stacked cards inside each column.

```css
.magazine {
  --cols: 3;
  --gap: 1rem;
  column-count: var(--cols);
  column-gap: var(--gap);
}

.card {
  display: inline-block;
  width: 100%;
  break-inside: avoid;
  margin-bottom: var(--gap);
}
```

### Why it works

| Property | Effect |
| --- | --- |
| `column-count: var(--cols)` | Controls how many columns the magazine layout uses |
| `column-gap: var(--gap)` | Adds consistent gutter spacing between columns |
| `display: inline-block` | Keeps each card as a single box in the column flow |
| `width: 100%` | Makes each card span the full column width |
| `break-inside: avoid` | Prevents cards from being split across columns |
| `margin-bottom: var(--gap)` | Separates stacked cards vertically inside each column |
