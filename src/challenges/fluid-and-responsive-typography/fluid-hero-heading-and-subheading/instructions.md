# Fluid Hero Heading and Subheading

## Problem

Create fluid typography for hero section headings and subheadings using CSS variables that interpolate between min and max sizes based on viewport width.

## Goal

Given a `.hero` section containing `<h2>` and `<h3>`, write CSS rules to:

1. Define CSS custom properties `--min-heading` (`32`) and `--max-heading` (`56`).
2. Define CSS custom properties `--min-subheading` (`24`) and `--max-subheading` (`32`).
3. Create fluid font-size variables `--fluid-heading` and `--fluid-subheading` using `clamp()` with `calc()` to interpolate between these minimum and maximum values for viewport widths from `360px` to `1440px`.
4. Apply `--fluid-heading` to `h2` and `--fluid-subheading` to `h3`.

Use CSS custom properties and `clamp()` with a linear interpolation to maintain a consistent typographic scale for both headings and subheadings across viewports.

## Constraints

- The solution must use an external stylesheet named `styles.css`.
- Do not use JavaScript.
- Support all modern browsers.
- Viewport widths should be between `360px` and `1440px`.
- Headings (`h2`) must have a minimum font size of `32px` and a maximum font size of `56px`.
- Subheadings (`h3`) must have a minimum font size of `24px` and a maximum font size of `32px`.
