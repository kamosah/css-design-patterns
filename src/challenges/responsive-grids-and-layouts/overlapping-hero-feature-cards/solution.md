# Solution: Overlapping Hero and Feature Cards Layout

## Explanation

### Base layout (mobile)

`.layout` uses `grid-template-areas` with `"hero"` and `"features"` stacked in a single column. `gap: 16px` spaces the two grid items. Each named area maps to a child via `grid-area`.

### Hero stacking

`.hero` gets `position: relative` and `z-index: 2`. `.features` gets `z-index: 1`. This stacking context ensures the hero always paints on top of the card grid when the two overlap.

### Overlap via negative margin

At tablet width (≥ 600px), `.features` gains `margin-top: -20px`, pulling the whole card container 20px up into the hero's painted area. At desktop (≥ 900px) this increases to `margin-top: -40px` for a deeper overlap. Negative `margin-top` is the right tool here because it shifts the element in the block axis without disrupting the parent grid's track sizing.

### Responsive card columns

`.features` is itself a nested grid. At mobile it uses a single column, at tablet `repeat(2, 1fr)` creates the 2-column card layout, and at desktop `repeat(4, 1fr)` spreads all eight cards into one row.
