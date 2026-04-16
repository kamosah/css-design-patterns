## Solution: Legacy Fallback Equal Height Columns for IE11

Let's implement an equal height column layout using CSS Grid with a table-cell fallback for IE11 via feature queries.

## Solution explanation

In the `styles.css` file, you'll find the following:

**Lines 1-4** (`.layout`): `--gap: 1rem` stores the shared spacing value in a custom property. `gap: var(--gap)` applies that spacing in browsers that support Grid, so the modern layout has consistent column separation.

**Lines 6-11** (`@supports (display: grid)`): This feature query detects browsers with Grid support. Inside it, `display: grid` turns `.layout` into a grid container, and `grid-template-columns: 1fr 1fr` creates two equal-width columns in modern browsers.

**Lines 13-22** (`@supports not (display: grid)`): Browsers without Grid support fall back to table layout. `display: table` makes the container behave like a table, `width: 100%` keeps it spanning the available space, and `border-spacing: var(--gap)` recreates the visual gap between columns. On each `.panel`, `display: table-cell` and `vertical-align: top` create equal-height cells aligned from the top edge.

```css
.layout {
  --gap: 1rem;
  gap: var(--gap);
}

@supports (display: grid) {
  .layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

@supports not (display: grid) {
  .layout {
    display: table;
    width: 100%;
    border-spacing: var(--gap);
  }

  .panel {
    display: table-cell;
    vertical-align: top;
  }
}
```

### Why it works

| Property | Effect |
| --- | --- |
| `@supports (display: grid)` | Enables the modern Grid layout only where supported |
| `grid-template-columns: 1fr 1fr` | Creates two equal-width columns in modern browsers |
| `@supports not (display: grid)` | Sends legacy browsers down the fallback path |
| `display: table` | Gives the container table-style layout behavior |
| `display: table-cell` | Makes panels share the tallest cell height automatically |
| `border-spacing: var(--gap)` | Recreates column spacing in the fallback layout |
