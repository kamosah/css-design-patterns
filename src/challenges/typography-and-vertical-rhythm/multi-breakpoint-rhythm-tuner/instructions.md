## Problem: Multi-Breakpoint Rhythm Tuner

Use media queries to update a rhythm variable across three breakpoints for consistent vertical spacing.

## Problem description

Design a responsive sitewide vertical rhythm that adjusts at three viewport breakpoints: small (`<480px`), medium (`480px–768px`), and large (`>768px`). Use CSS custom properties and `@media` queries to switch the baseline grid unit between `1rem`, `1.5rem`, and `2rem`, and apply it consistently to `h1`, `h2`, `h3`, `p`, `ul`, `ol`, and `blockquote`.

## Goal

Use only HTML and CSS to:

- Define `--rhythm-small` (`1rem`), `--rhythm-medium` (`1.5rem`), and `--rhythm-large` (`2rem`) in `:root`.
- Initialize `--rhythm` to `var(--rhythm-small)`.
- Create a media query for `(min-width: 480px)` to set `--rhythm` to `var(--rhythm-medium)`.
- Create a media query for `(min-width: 768px)` to set `--rhythm` to `var(--rhythm-large)`.
- Apply `line-height` and `margin-bottom` equal to `var(--rhythm)` on `h1`, `h2`, `h3`, `p`, `li`, and `blockquote`.

## Constraints

- Only CSS is allowed.
- Use rem units and CSS custom properties.
- CSS file must be named `styles.css`.
- Do not use JavaScript or alter the provided HTML structure.
