## Problem: Blockquote Rhythm Styler

Set up a vertical rhythm for paragraphs and blockquotes using a CSS variable, and add simple blockquote styling (border and padding) without disrupting the baseline grid.

## Problem description

You have paragraphs (`<p>`) and blockquotes (`<blockquote>`) in your document. Define a CSS custom property for a `1.25rem` rhythm unit and apply it to the `line-height` and `margin-bottom` of all `<p>` and `<blockquote>` elements. Additionally, style blockquotes with a left border and indentation for visual emphasis while maintaining consistent vertical spacing.

## Goal

Use only HTML and CSS to:

- Define `--rhythm` as `1.25rem` in `:root`.
- Apply `line-height: var(--rhythm)` and `margin-bottom: var(--rhythm)` to `<p>` and `<blockquote>`.
- Style `<blockquote>` with a left border (`4px solid #ccc`) and left padding equal to the rhythm unit.

## Constraints

- Only CSS is allowed.
- Use `rem` units and CSS variables.
- CSS file must be named `styles.css`.
- Do not alter the HTML structure or add inline styles.
