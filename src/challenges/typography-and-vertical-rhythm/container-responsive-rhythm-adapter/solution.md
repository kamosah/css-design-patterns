## Solution: Container-Responsive Rhythm Adapter

Let's use container queries to switch a card's vertical rhythm between `1rem` and `2rem` based on its width.

## Solution explanation

- **Lines 1–4** — Define the minimum (`--rhythm-min`) and maximum (`--rhythm-max`) rhythm values at the root.
- **Lines 6–10** — Enable container queries on `.card` by setting `container-type: inline-size` and `container-name: rhythm-card`, then default the local `--rhythm` to `--rhythm-min`.
- **Lines 12–17** — Apply `line-height` and `margin-bottom` using `var(--rhythm)` to all text elements within the card, ensuring baseline alignment.
- **Lines 19–23** — In the `@container rhythm-card (min-width: 600px)` rule, update the local `--rhythm` to `--rhythm-max`, doubling the spacing when the card's width exceeds 600px.
