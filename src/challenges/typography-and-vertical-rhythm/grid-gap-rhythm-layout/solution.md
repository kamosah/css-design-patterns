## Solution: Grid Gap Rhythm Layout

Let's use CSS Grid with a 1.5rem `row-gap` and `line-height` to create a clean, aligned two-column text layout.

## Solution explanation

- **Lines 1–3** — Define the `--rhythm` custom property as the baseline unit (1.5rem).
- **Lines 5–9** — Configure `.grid` to use CSS Grid, two equal columns, and set `row-gap: var(--rhythm)` so vertical spacing aligns with the rhythm grid.
- **Lines 11–15** — Apply `line-height: var(--rhythm)` to text elements and reset margins (`margin: 0`), ensuring text sits exactly on the grid rows without extra spacing from margins.
