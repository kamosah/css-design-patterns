# Solution: Nested Grid Subgrid Rhythm

## How it works

**`:root`** declares `--rhythm: 1rem` — a single source of truth for the vertical baseline unit used throughout both the parent and child grids.

**`.layout`** sets up the parent grid with `display: grid` and two equal columns via `grid-template-columns: repeat(2, 1fr)`. Crucially, `grid-auto-rows: var(--rhythm)` creates an implicit grid of uniformly sized `1rem` rows — the "baseline grid" that every module will snap to.

**`.module`** turns each card into a subgrid participant. Setting `grid-template-rows: subgrid` tells the browser to inherit the parent's row tracks rather than create new ones. The module must also declare `grid-row: span 10` so the parent allocates 10 rhythm rows for it to work with — without this span, the subgrid has no rows to inherit.

**`.module h3` and `.module p`** receive `margin: 0` to strip browser defaults, and `line-height: var(--rhythm)` so each element occupies exactly one rhythm row. The heading needs a wider track, so `line-height: calc(var(--rhythm) * 2)` makes it span two rows, while `font-size: calc(var(--rhythm) * 1.5)` scales the text proportionally without breaking out of its allocated space.

## Key concept: why subgrid over nested grid?

Without `grid-template-rows: subgrid`, a nested grid creates its own independent row tracks. Two modules that look the same in height might have their headings and paragraphs sitting at different absolute positions if their content differs. Subgrid threads both modules through the *same* set of row tracks, so `h3` in Module A and `h3` in Module B are guaranteed to share the same vertical position — true cross-module alignment that `gap` and `margin` cannot achieve alone.
