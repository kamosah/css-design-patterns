## Solution: Accessible Card Grid with Per-Card Focus Outline

Learn how to build a responsive card grid with robust per-card keyboard focus indicators.

## Solution explanation

- **`body` background + dark mode** — A light `background: #f7fafc` on body ensures the focus ring is visible against the page. The `@media (prefers-color-scheme: dark)` block flips both the page and card backgrounds so the blue ring remains legible in either theme.

- **`repeat(auto-fit, minmax(220px, 1fr))`** — This single-line grid definition creates responsive columns without media queries. `auto-fit` collapses empty tracks, `minmax(220px, 1fr)` keeps cards at least 220px wide and stretches them to fill remaining space.

- **`outline: none` on `.card`** — Suppresses the browser's default focus ring. This is only appropriate here because we replace it with an explicit custom ring on `:focus`.

- **`outline: 4px solid #2684FF` + `outline-offset: 2px`** — Unlike `box-shadow`, `outline` renders outside the element's border box and is never clipped by `overflow: hidden` on a parent. `outline-offset` adds a small gap between the card edge and the ring, making it visible even against dark card backgrounds.

- **`z-index: 2` on `:focus`** — Grid items share a stacking context. Without `z-index`, the focus outline of a card can be obscured by the adjacent card's background. Raising the focused card to `z-index: 2` ensures the ring always renders on top.
