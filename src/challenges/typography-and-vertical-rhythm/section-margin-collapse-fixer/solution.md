## Solution: Section Margin Collapse Fixer

Let's use CSS to apply a 1.5rem rhythm and prevent section margin collapse for consistent vertical spacing.

## Solution explanation

- **Lines 1–3** — Define the `--rhythm` custom property as the 1.5rem baseline unit.
- **Lines 5–7** — Set the body base font-size.
- **Lines 9–12** — Apply `line-height` and `margin-bottom` to `<h2>` and `<p>`, aligning each text element's baseline to the grid.
- **Lines 14–17** — On `<section>`, add `padding-top` equal to the rhythm and a transparent top border to prevent margin collapsing, ensuring the space between sections is preserved.
- **Lines 20–23** — Remove the added padding and border on the first section to avoid extra space at the top of the page.
