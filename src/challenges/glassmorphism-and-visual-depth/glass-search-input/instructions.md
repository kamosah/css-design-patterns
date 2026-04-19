# Glass Search Input

Given an HTML page with a `.search-container` div wrapping an `<input type="search" class="glass-search">`, write CSS to apply a frosted-glass effect to the input with clear focus feedback.

## Goal

Style `.glass-search` with a semi-transparent background, `backdrop-filter` blur, rounded corners, and a smooth border transition on focus.

## Constraints

- Use only CSS — no JavaScript
- `.search-container`: `width: 300px`
- `.glass-search`: `width: 100%`, `background: rgba(255, 255, 255, 0.2)`, `backdrop-filter: blur(6px)`, `border-radius: 12px`, `outline: none`
- Use `border: 1px solid transparent` by default so the focus border doesn't shift layout
- On `:focus`: `border-color: rgba(255, 255, 255, 0.6)`
- Transition `border-color` for a smooth fade: `transition: border-color 0.3s ease`
