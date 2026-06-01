# Multi-Range Fluid Typography with Media Query Overrides

Given an `<h1>` heading and a `<p>` paragraph, write CSS rules to build a two-range fluid typography system:

- Define CSS custom properties in `:root`:
  - `--min-root-mobile: 14px` and `--max-root-mobile: 18px`
  - `--min-root-desktop: 18px` and `--max-root-desktop: 24px`
  - `--scale-h1: 2.2` — heading size multiplier
  - `--scale-p: 1` — paragraph size multiplier

- Compute `--fluid-root-mobile` using `clamp()` and a linear interpolation for viewport widths from **320px to 768px**.

- Set `h1` to `calc(var(--fluid-root-mobile) * var(--scale-h1))` and `p` to `calc(var(--fluid-root-mobile) * var(--scale-p))`.

- Inside a `@media (min-width: 768px)` block, compute `--fluid-root-desktop` using `clamp()` for viewport widths from **768px to 1440px**, then override `h1` and `p` font sizes using the desktop root instead.

## Goal

Ensure headings and body text scale harmoniously at two different rates: a tighter fluid range on mobile and a wider one on desktop, with a clean handoff at the 768px breakpoint.

## Constraints

- The solution must use an external stylesheet named `styles.css`.
- Do not use JavaScript.
- Mobile range: **320px–768px**; desktop range: **768px–1440px**.
- Custom properties must be:
  - `--min-root-mobile: 14px; --max-root-mobile: 18px`
  - `--min-root-desktop: 18px; --max-root-desktop: 24px`
  - `--scale-h1: 2.2; --scale-p: 1`
