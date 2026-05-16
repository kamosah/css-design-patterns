## Solution: Blockquote Rhythm Styler

Let's set up a vertical rhythm for paragraphs and blockquotes using a CSS variable, and add simple blockquote styling (border and padding) without disrupting the baseline grid.

## Solution explanation

- **Lines 1–3** — Define the `--rhythm` custom property as `1.25rem`, our baseline unit.
- **Lines 5–8** — Set the base `font-size` on `body` and apply `line-height: var(--rhythm)`, establishing a consistent baseline grid.
- **Lines 10–12** — Apply `margin-bottom: var(--rhythm)` to `p`, spacing paragraphs uniformly.
- **Lines 14–18** — For `blockquote`, apply the same bottom margin, add `padding-left` matching the rhythm unit, and a `border-left` for visual emphasis — all while preserving the vertical rhythm.
