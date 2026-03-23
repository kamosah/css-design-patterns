## Solution: Segmented Control Toggle

Let's build a segmented control toggle using hidden radio inputs and styled labels with distinct active states and smooth transitions.

## Solution explanation

- **Lines 1–4** — Set `.segmented-control` as a `flex` container and `overflow: hidden` so the rounded corners form a continuous pill shape without gaps.
- **Lines 6–8** — `display: none` hides the native radio inputs entirely. The `<label for="...">` association keeps them interactive — clicking a label still checks its input.
- **Lines 10–17** — Labels get `flex: 1` for equal widths, `text-align: center`, full border on all sides, a `pointer` cursor, and `transition` declarations for `background-color` and `color` at `0.2s ease`.
- **Lines 19–21** — `border-right: none` on all but the last label merges adjacent borders so only one `1px` line appears between segments, not a doubled `2px` gap.
- **Lines 23–31** — `:first-of-type` and `:last-of-type` round only the outer two corners, keeping the inner joins sharp for the pill-segment look.
- **Lines 33–36** — The adjacent sibling combinator (`input:checked + label`) targets the label that immediately follows a checked radio input, applying the blue background and white text for the active state.
