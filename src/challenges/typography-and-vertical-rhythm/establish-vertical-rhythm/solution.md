## Solution: Baseline Grid Builder

Let's use CSS custom properties to align text elements to a 1rem baseline grid by syncing line height and margins for a consistent vertical rhythm.

## Solution explanation

- **Lines 1–3** — Define the `--rhythm` custom property as our baseline grid unit.
- **Lines 5–8** — Set the base `font-size` on `body` and apply the rhythm variable to `line-height`, ensuring each line of text aligns to the grid.
- **Lines 10–12** — Apply a bottom margin equal to the rhythm unit for all headings and paragraphs, aligning each element's baseline to the 1rem grid.
