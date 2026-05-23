## Solution: Multi-Breakpoint Rhythm Tuner

Let's use media queries to update a rhythm variable across three breakpoints for consistent vertical spacing.

## Solution explanation

- **Lines 1–6** — Define three rhythm values (`--rhythm-small`, `--rhythm-medium`, and `--rhythm-large`) and initialize `--rhythm` to the smallest unit. This establishes the mobile-first default.
- **Lines 8–12** — Override `--rhythm` in a media query at `min-width: 480px`, updating to the medium rhythm value for mid-size viewports.
- **Lines 14–18** — Override `--rhythm` again at `min-width: 768px` to the large rhythm unit, giving wide viewports more generous vertical spacing.
- **Lines 20–25** — Apply the active `--rhythm` value to `line-height` and `margin-bottom` for all specified text elements, ensuring a consistent baseline grid that shifts at the defined breakpoints.
