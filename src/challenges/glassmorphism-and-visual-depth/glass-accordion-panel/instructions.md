# Glass Accordion Panel

Given HTML markup for an `.accordion` container with multiple `.accordion-item` elements—each containing a hidden checkbox input, a `<label>` serving as the header, and a `.accordion-content` div—write CSS to:

1. Hide the native checkboxes.
2. Style the `<label>` headers as semi-transparent, blurred panels with rounded corners and shadows.
3. Set `.accordion-content` panels to `max-height: 0` and `overflow: hidden` by default.
4. When the corresponding checkbox is clicked, expand its content section with a smooth `max-height` transition.

## Goal

Write CSS rules leveraging the hidden checkbox pattern, `backdrop-filter`, and `max-height` transitions to build a glassmorphic accordion that expands and collapses panels without JavaScript.

## Constraints

- Use only CSS (no JavaScript)
- Accordion: `width: 100%`, `max-width: 500px`, centered with `margin: 0 auto`
- Header background: `rgba(255, 255, 255, 0.2)` with `backdrop-filter: blur(8px)`
- Content background: `rgba(255, 255, 255, 0.1)` with `backdrop-filter: blur(4px)`
- Header and content panels: `border-radius: 8px` and `box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)`
- Transition duration for `max-height`: `0.4s ease`
