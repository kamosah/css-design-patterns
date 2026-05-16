## Problem: Universal Rhythm Applier

Apply a custom rhythm unit to line-height and bottom margins of headings, paragraphs, and list items to enforce consistent vertical spacing.

## Problem description

You have headings (`h1`, `h2`), paragraphs (`p`), and list items (`li`) within your document. Your task is to establish a 1rem baseline grid using a CSS custom property and apply it to the `line-height` and `margin-bottom` of all these text elements, ensuring uniform vertical spacing.

## Goal

Use only HTML and CSS to:

- Define `--rhythm` as `1rem` in `:root`.
- Apply `line-height: var(--rhythm)` to `body`.
- Apply `margin-bottom: var(--rhythm)` to `h1`, `h2`, `p`, and `li`.

## Constraints

- Only CSS is allowed.
- Use rem units and CSS variables.
- Do not alter the HTML structure or add inline styles.
