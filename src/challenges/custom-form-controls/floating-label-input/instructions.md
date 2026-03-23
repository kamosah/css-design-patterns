## Problem: Custom Floating Label Input

Try to create a floating-label input where the label moves above the field on focus or when filled, using only CSS.

## Problem description

Given an HTML page containing a `div` with class `.float-label` that wraps an `<input type="text" class="floating-input" placeholder=" " id="username" required>` and its associated `<label for="username">Username</label>`, write CSS to:

1. Position the label inside the input field so it appears as placeholder text.
2. Use the input's `:focus` and `:not(:placeholder-shown)` states to trigger the floating effect via the adjacent sibling combinator.
3. Animate the label to move above the input (`top: 0`), scale down (`scale(0.8)`), and change color (`#0066cc`).
4. Ensure smooth transitions for `top`, `transform`, and `font-size`.

## Goal

Write CSS rules that create a text input where the label floats up and shrinks when the user focuses the field or has entered text, mimicking a material-design style floating label.

## Constraints

- Use only CSS (no JavaScript).
- Input dimensions: `width: 100%`, `padding: 0.75rem 0.5rem`, `border: 1px solid #ccc`, `border-radius: 4px`.
- Label initial state: `position: absolute`, `left: 0.5rem`, `top: 50%`, `transform: translateY(-50%)`, `font-size: 1rem`, `color: #666`.
- Floated label state: `top: 0`, `transform: translateY(-100%) scale(0.8)`, `font-size: 0.8rem`, `color: #0066cc`.
- Transitions: `top`, `transform`, and `font-size` over `0.2s ease`.
