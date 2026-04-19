# Glass Responsive Dashboard Cards

Given HTML markup for a `.dashboard` section containing three `.card` elements—each with a `.card-header` and `.card-details` div—write CSS to:

1. Set up `.dashboard` as a single-column CSS Grid with `container-type: inline-size`.
2. Switch to two columns at 400px and three columns at 800px using `@media` queries.
3. Style each `.card` as a frosted-glass panel and declare it as its own inline-size container.
4. Apply fluid typography to `.card-header` using `clamp()`.
5. Hide `.card-details` by default and reveal it with a `@container` query when the card itself is at least 300px wide.

## Goal

Combine CSS Container Queries, media queries, and glassmorphic styling to build a dashboard grid where the card's own width—not the viewport—controls whether its details are visible.

## Constraints

- Use only CSS (no JavaScript)
- `.dashboard`: `container-type: inline-size`, `display: grid`, `gap: var(--gap)`, `grid-template-columns: 1fr` by default
- Two columns at `@media (min-width: 400px)`, three columns at `@media (min-width: 800px)`
- `.card`: `background: rgba(255, 255, 255, 0.2)`, `backdrop-filter: blur(8px)`, `border-radius: 12px`, `box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)`, `container-type: inline-size`
- `.card-header`: `font-size: clamp(1rem, 2vw, 2rem)`
- `.card-details`: hidden by default, revealed via `@container (min-width: 300px)`
