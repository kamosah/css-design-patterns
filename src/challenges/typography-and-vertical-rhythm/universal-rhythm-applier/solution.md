## Solution: Universal Rhythm Applier

Let's apply a custom rhythm unit to line-height and bottom margins of headings, paragraphs, and list items to enforce consistent vertical spacing.

## Solution explanation

- **Lines 1–3** — Define the `--rhythm` custom property as `1rem`, establishing the baseline unit.
- **Lines 5–8** — Set the base `font-size` on `body` and apply `line-height: var(--rhythm)` to align text lines to the grid.
- **Lines 10–12** — Apply `margin-bottom: var(--rhythm)` to all headings, paragraphs, and list items, ensuring each element's baseline is spaced uniformly at 1rem intervals.
