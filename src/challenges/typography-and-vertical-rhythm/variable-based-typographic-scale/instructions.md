## Problem: Variable-Based Typographic Scale

Use CSS variables and `calc()` to build a typographic scale with consistent font sizing and rhythm-aligned spacing for headings and paragraphs.

## Problem description

Define a variable-based typographic scale and apply it to headings and paragraphs to maintain a consistent 1rem baseline grid across your document.

## Goal

Use only HTML and CSS to:

- Define `--rhythm` (1rem) and `--scale-factor` (1.5) in `:root`.
- Apply `font-size` to `<h1>`, `<h2>`, `<h3>`, and `<p>` using `calc()` with these variables.
- Set `margin-bottom` on all text elements to `var(--rhythm)` to maintain the baseline grid.

## Constraints

- Only HTML and CSS.
- Use rem units and CSS variables.
- Maintain a 1rem baseline grid for margins.
- Do not use JavaScript or modify the HTML structure.
