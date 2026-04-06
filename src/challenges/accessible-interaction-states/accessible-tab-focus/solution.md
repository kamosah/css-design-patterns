## Solution: Accessible Tab Navigation Focus Highlight

Let's highlight the focused tab with a bold blue bottom border for clear keyboard navigation.

## Solution explanation

- **Lines 1–7** — `.tab-list` uses `display: flex` to arrange tabs horizontally. A `border-bottom: 2px solid #dde1e7` draws the nav underline, and light background plus padding frame the tab strip.
- **Lines 9–20** — `.tab` strips default button chrome (`background: none`, `border: none`, `outline: none`), adds padding, color, and top-only border-radius for a tab shape. `margin-bottom: -2px` overlaps the container's `border-bottom` so the focused tab's indicator appears flush rather than stacked.
- **Lines 22–25** — `:focus` applies `border-bottom: 4px solid #2684FF`, visually marking only the focused tab. `outline: none` suppresses the browser default so only the custom border-bottom shows.
