## Solution: Range Slider with Responsive Tick Marks and Labels

Let's build a custom range slider with tick marks and labels using CSS variables and gradients.

## Solution explanation

- **Lines 1–6** — `.range-container` defines three component-level CSS variables: `--tick-count: 11` (one per step including both endpoints), `--track-height: 8px`, and `--thumb-size: 20px`. `position: relative` anchors the `::before`/`::after` label pseudo-elements; `padding-top` reserves space above the track so the thumb doesn't clip the container edge.

- **Lines 9–18** — `.marked-range` spans the full width and uses `appearance: none` to strip all default browser chrome. The `background: transparent` prevents WebKit from drawing its own track. `--thumb-border-color` and `--thumb-shadow` are declared here as CSS variables so `:focus-visible` can override them in one place rather than reaching into vendor pseudo-elements directly.

- **Lines 21–24** — `.marked-range:focus-visible` updates only the two thumb variables. Because CSS custom properties cascade into pseudo-elements, both `::-webkit-slider-thumb` and `::-moz-range-thumb` automatically pick up the new values — no duplicate vendor-prefixed focus rules needed.

- **Lines 27–38** — The WebKit track uses `repeating-linear-gradient(to right, ...)` to draw tick marks. Each repeat interval is `100% / (var(--tick-count) - 1)` wide. The gradient paints a transparent band then a 1px `#666` line at the very end of each interval. `background-color: #eee` fills the track base (a shorthand background-image doesn't clear the background-color, so both coexist).

- **Lines 41–52** — Firefox uses the same gradient logic on `::-moz-range-track`. The two vendor blocks are kept separate — combining them in a selector list would invalidate the entire rule in any browser that doesn't understand one of the pseudo-elements.

- **Lines 55–67** — The WebKit thumb is sized `var(--thumb-size)` and positioned on the track centerline via `margin-top: calc((var(--track-height) - var(--thumb-size)) / 2)` — a negative value since the thumb is taller than the track. `appearance: none` is required a second time here; without it, WebKit ignores `width` and `height` on the thumb.

- **Lines 70–79** — The Firefox thumb matches the WebKit version. Firefox centers the thumb automatically, so no `margin-top` is needed.

- **Lines 82–95** — `::before` and `::after` on `.range-container` are absolutely positioned at `top: 100%` (just below the container) with a small `translateY` nudge. `content: "0"` and `content: "100"` provide the static min/max labels anchored to `left: 0` and `right: 0` respectively.
