# Glass Floating Button

Given an HTML page with a `<button class="glass-btn">Click Me</button>` element, write CSS to position it as a translucent glass panel fixed at the bottom center of the screen, with smooth hover feedback.

## Goal

Apply glassmorphism styles to the button, fix it at the bottom center, and define a `:hover` state that increases background opacity and shadow depth.

## Constraints

- Use only CSS — no JavaScript
- Button must be `position: fixed` at the bottom center regardless of viewport size
- Use `backdrop-filter: blur(8px)` for the glass effect
- Include `transition: background 0.3s ease, box-shadow 0.3s ease` for smooth hover
- Base state: `background: rgba(255, 255, 255, 0.2)`, `box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)`
- Hover state: `background: rgba(255, 255, 255, 0.5)`, `box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4)`
- `border-radius: 24px`, `padding: 1rem 2rem`, `font-size: 1rem`
