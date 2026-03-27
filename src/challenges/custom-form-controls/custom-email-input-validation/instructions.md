## Problem: Custom Email Input with Inline Validation Icons

Try to create a styled email input that shows a check or cross icon for valid or invalid states using only CSS and relational selectors.

## Problem description

Given an HTML page containing a `<div class="input-wrapper">` that wraps an `<input type="email" id="email" class="validation-input" placeholder="Enter your email" required>`, write CSS to:

1. Define CSS variables on `.input-wrapper`: `--valid-color`, `--invalid-color`, and `--transition-duration`.
2. Style `.validation-input` in the following manner:
   - Width should be `100%`, `padding-right` should be `2rem` (space for icon), `padding-left` should be `0.5rem`, and height should be `2rem`.
   - Border should be `1px solid #ccc`, `border-radius` should be `4px`.
   - Transition on `border-color` over `var(--transition-duration)`.
   - Remove default outline.
3. Use `.input-wrapper` pseudo-element `::after` to:
   - Insert dynamic icon content (initially none) via CSS.
   - Position at right inside the input (e.g. `right: 0.5rem; top: 50%; transform: translateY(-50%) translateX(10px)`).
   - Set `opacity: 0`, transition on `opacity` and `transform`, and `pointer-events: none`.
4. Use relational selectors (requires CSS `:has()`) to detect validation state:
   - `.input-wrapper:has(input:valid:not(:placeholder-shown))::after` — set `content: "✔"`, color `var(--valid-color)`, and `opacity: 1`, `transform: translateY(-50%) translateX(0)`, and change input `border-color`.
   - `.input-wrapper:has(input:invalid:not(:placeholder-shown))::after` — set `content: "✖"`, color `var(--invalid-color)`, and `opacity: 1`, `transform: translateY(-50%) translateX(0)`, and change input `border-color`.

## Goal

Write CSS rules so that when users enter a valid email, a green check appears inside the field; if invalid, a red cross appears, with smooth icon transitions and border-color feedback, all without JavaScript.

## Constraints

- Use only CSS (no JavaScript).
- CSS variables should be `--valid-color: #28a745;`, `--invalid-color: #dc3545;`, and `--transition-duration: 0.2s;`.
- Utilize the CSS relational selector `:has()` to detect input states.
- Icons should be inserted via `content` in `::after` pseudo-element on the wrapper.
- Position icons absolutely inside the wrapper and make them non-interactive.
- Ensure transitions on `opacity`, `transform`, and `border-color`.
