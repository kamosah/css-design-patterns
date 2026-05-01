# Solution: Asymmetrical Magazine-Style Grid

The base `.magazine` styles establish a single-column grid using `grid-template-areas` with all five areas stacked vertically. `grid-auto-rows: auto` lets rows size to their content, and each card class is assigned to its named area with a distinct background color and `padding: 1rem`.

The `@media (min-width: 480px) and (max-width: 767px)` block introduces the tablet layout. `grid-template-areas` promotes `.feature` to span both columns using the repeated-name trick — adjacent identically-named cells in the same row merge into a single placed area. `primary1` and `primary2` sit side by side in the second row, and the secondary cards mirror that pattern below. `grid-template-columns: 1fr 1fr` gives each column equal width.

The `@media (min-width: 768px)` block creates the desktop mosaic with three columns sized `2fr 2fr 1fr`. Repeating `feature` across columns 1–2 in rows 1–2 forms a two-by-two span without any explicit `grid-column` or `grid-row` on the card itself — the named-area rectangle is enough. Repeating `primary2` in column 3 across rows 2–3 makes it tall, contrasting with the shorter `primary1` above it. `secondary1` and `secondary2` fill the bottom-left cells, completing the asymmetric mosaic entirely through area name placement.
