## Problem: Baseline Grid Builder

Use CSS custom properties to align text elements to a 1rem baseline grid by syncing line height and margins for a consistent vertical rhythm.

## Problem description

A page has two headings (`h1`, `h2`) and two paragraphs (`p`). Your task is to create a predictable vertical rhythm by applying the shared `--rhythm` variable to both `line-height` on the body and `margin-bottom` on all text elements.

## Goal

Wire up the `--rhythm` custom property so that every heading and paragraph shares the same bottom spacing, and the body's line height matches that same unit.

## Constraints

- Use only the `--rhythm` custom property already defined in `:root` — do not introduce new values.
- No JavaScript allowed.
- Do not modify the HTML.
