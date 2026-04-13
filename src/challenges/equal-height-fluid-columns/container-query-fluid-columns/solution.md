## Solution: Container Query-Based Fluid Columns

Let's use CSS Container Queries to create a responsive, component-driven layout that adjusts column count based on the container's width.

## Solution explanation

In the `styles.css` file, you'll find the following:

**Lines 1–8** (`.card-container`): Two declarations turn this element into a container context: `container-type: inline-size` tells the browser to track this element's inline (horizontal) size, and `container-name: cards` gives it an identity that `@container` rules can target by name. The remaining declarations (`width: 100%`, `padding: 1rem`, etc.) handle sizing and spacing.

**Lines 10–13** (`.card-list`): Sets up a CSS Grid with `gap: 1rem`. No `grid-template-columns` is defined here — that's intentionally left to the container queries below.

**Lines 16–20** (`@container cards (max-width: 400px)`): When the `.card-container` is narrower than 400px, the grid collapses to a single column (`1fr`).

**Lines 23–27** (`@container cards (min-width: 400px) and (max-width: 800px)`): At medium widths, two equal columns (`repeat(2, 1fr)`) are applied. The `and` condition lets you target a range without needing a separate breakpoint to undo the previous rule.

**Lines 30–34** (`@container cards (min-width: 800px)`): At wider widths, the layout expands to three columns.

**Lines 37–42** (`.card`): Visual styling only — background, padding, and centered bold text to make each card distinguishable.

```css
.card-container {
  container-type: inline-size;
  container-name: cards;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;
}

.card-list {
  display: grid;
  gap: 1rem;
}

@container cards (max-width: 400px) {
  .card-list { grid-template-columns: 1fr; }
}

@container cards (min-width: 400px) and (max-width: 800px) {
  .card-list { grid-template-columns: repeat(2, 1fr); }
}

@container cards (min-width: 800px) {
  .card-list { grid-template-columns: repeat(3, 1fr); }
}

.card {
  background: #eee;
  padding: 2rem;
  text-align: center;
  font-weight: bold;
}
```

### Why it works

| Property / Rule | Effect |
| --- | --- |
| `container-type: inline-size` | Enables container size tracking on the horizontal axis |
| `container-name: cards` | Names the container so `@container cards` rules target it specifically |
| `@container` vs `@media` | Responds to the *component's* width, not the viewport — reusable anywhere |
| `and` range syntax | Targets a size window without needing overrides |
| Grid equal height | All items in a row match the tallest item automatically |
