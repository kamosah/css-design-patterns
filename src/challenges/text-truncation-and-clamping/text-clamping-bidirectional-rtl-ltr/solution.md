## Solution: Text Clamping in Bidirectional (RTL and LTR) Layouts

Let's clamp text to two lines with ellipsis in both LTR and RTL cards, maintaining proper directionality and layout integrity.

## Solution explanation

- **Lines 1–6** — Style the card layout with a fixed width, border, padding, and bottom margin for visual consistency across both directions.
- **Lines 8–16** — `.ltr` sets `direction: ltr` and `text-align: left` for the English card; `.rtl` sets `direction: rtl` and `text-align: right` for the Arabic card. The `direction` property controls the inline flow direction and also determines which side the ellipsis appears on.
- **Lines 18–22** — The `-webkit-line-clamp` bundle (`display: -webkit-box`, `-webkit-line-clamp: 2`, `-webkit-box-orient: vertical`, `overflow: hidden`) limits `.desc` to two visible lines. The ellipsis automatically appears at the inline-end — right for LTR, left for RTL — with no extra CSS required.
