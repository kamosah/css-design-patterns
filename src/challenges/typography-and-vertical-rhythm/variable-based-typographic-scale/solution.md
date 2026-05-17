## Solution: Variable-Based Typographic Scale

Let's use CSS variables and `calc()` to build a typographic scale with consistent font sizing and rhythm-aligned spacing for headings and paragraphs.

## Solution explanation

- **Lines 1–4** — Define `--rhythm` as the base unit (1rem) and `--scale-factor` at 1.5.
- **Lines 6–9** — Set the body `font-size` and `line-height` to the rhythm unit, establishing the baseline grid.
- **Lines 11–14** — Calculate the `<h1>` size as 1rem × 1.5² = 2.25rem, and add a bottom margin of 1rem.
- **Lines 16–19** — Calculate the `<h2>` size as 1rem × 1.5 = 1.5rem, with the same bottom margin.
- **Lines 21–29** — Use the base rhythm for `<h3>` and `<p>`, maintaining consistent vertical spacing across all text elements.
