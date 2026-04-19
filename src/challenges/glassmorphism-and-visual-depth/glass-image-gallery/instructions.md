# Glass Image Gallery

Given an HTML structure with a `.gallery` grid containing `.gallery-item` divs — each with an `<img>` and an `.overlay` panel — write CSS to create a responsive image gallery with glassmorphic overlays that reveal on hover.

## Goal

Style `.gallery` as a responsive grid, `.gallery-item` as a clipping container, and `.overlay` with the glass effect hidden by default. Use `.gallery-item:hover .overlay` to slide the overlay into view.

## Constraints

- Use only CSS — no JavaScript
- `.gallery`: `display: grid`, `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))`, `gap: 1rem`
- `.gallery-item`: `position: relative`, `overflow: hidden`, `border-radius: 8px`
- `.gallery-item img`: `display: block`, `width: 100%`, `height: auto`
- `.overlay`: `position: absolute`, anchored to the bottom, `background: rgba(255, 255, 255, 0.2)`, `backdrop-filter: blur(6px)`, hidden via `opacity: 0` and `transform: translateY(20px)`
- On hover: `opacity: 1`, `transform: translateY(0)` with `transition: opacity 0.3s ease, transform 0.3s ease`
