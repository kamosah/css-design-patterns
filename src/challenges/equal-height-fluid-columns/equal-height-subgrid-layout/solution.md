## Solution: Equal Height Subgrid Layout

Let's create a multi-level grid layout with consistent row heights by using CSS subgrid to inherit row sizing from the parent grid.

## Solution explanation

In the `styles.css` file, you'll find the following:

**Lines 1–5** (`.parent-grid`): `display: grid` establishes the outer grid. `grid-template-columns: 1fr 1fr` creates two equal columns. `grid-auto-rows: minmax(100px, auto)` defines implicit row tracks — each at least 100px tall, growing with content.

**Line 8** (`grid-row: span 3`): Each `.child-grid` explicitly spans 3 parent row tracks. Without this, the child only occupies 1 row and `grid-template-rows: subgrid` would inherit just 1 track — too few to align the 3 cells.

**Line 9** (`grid-template-columns: subgrid`): The child inherits the parent's column track sizes rather than defining its own.

**Line 10** (`grid-template-rows: subgrid`): The child inherits the 3 parent row tracks it spans, so each `.cell` inside aligns exactly with a parent row. This is the core of the technique — a single row definition in `.parent-grid` drives alignment at every level.

**Lines 11–14** (`.cell`): Basic styling to make each cell visible.

```css
.parent-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(100px, auto);
}
.child-grid {
  display: grid;
  grid-row: span 3;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
}
.cell {
  background: #eee;
  padding: 1rem;
}
```

### Why it works

| Property | Effect |
| --- | --- |
| `grid-auto-rows: minmax(100px, auto)` | Creates equal-height implicit rows in the parent |
| `grid-row: span 3` | Gives the child grid 3 parent rows to inherit |
| `grid-template-rows: subgrid` | Child rows align to parent tracks — no duplicate sizing needed |
| `grid-template-columns: subgrid` | Child columns inherit parent column widths |
