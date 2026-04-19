# Glass Card Component

Given an HTML structure with a `.container` wrapping a `.glass-card`, write CSS to create a frosted-glass panel centered over a fullscreen gradient background.

## Goal

Style `.container` as a full-viewport canvas with a colorful background, and style `.glass-card` with a semi-transparent background, `backdrop-filter` blur, rounded corners, and a subtle shadow to achieve the glassmorphism effect.

## Constraints

- Use only CSS — no JavaScript
- `.container`: fill the viewport (`height: 100vh`), use flexbox to center the card, use a vivid gradient as the background
- `.glass-card`: `background: rgba(255, 255, 255, 0.2)`, `backdrop-filter: blur(10px)`, `border-radius: 16px`, `border: 1px solid rgba(255, 255, 255, 0.3)`, `box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)`
- Card must have `padding: 2rem`, `max-width: 300px`, and `text-align: center`
- No fixed widths that break responsiveness
