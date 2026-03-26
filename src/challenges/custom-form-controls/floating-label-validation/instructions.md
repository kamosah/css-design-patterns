## Problem: Floating Label Input with Validation Message

Try to create a floating label email input that shows a custom validation message below when invalid and not focused, using only CSS.

## Problem description

Given an HTML page containing a `<div class="validate-wrapper">` that wraps an `<input type="email" id="email" class="validate-input" placeholder=" " required>` and a `<label for="email" data-error="Please enter a valid email address">Email</label>`, write CSS to:

1. Define CSS variables on `.validate-wrapper`: `--primary-color: #0066cc`, `--error-color: #cc0000`, and `--transition-duration: 0.2s`.
2. Set `.validate-wrapper` to `position: relative` with top padding for the floating label and bottom padding for error space.
3. Style `.validate-input` with `width: 100%`, padding, `border: 1px solid #ccc`, `border-radius: 4px`, background `#fff`, and no outline.
4. Absolutely position the label inside the wrapper at `left: 0.5rem`, `top: 2.375rem`, with `transform: translateY(-50%)`, `background: #fff`, and add transitions for `top`, `transform`, and `color`.
5. Float the label above the input using `.validate-input:focus + label` and `.validate-input:not(:placeholder-shown) + label`, setting `top: 1rem`, `transform: translateY(-50%) scale(0.8)`, and `color: var(--primary-color)`.
6. Style `label::after` to show the validation message using `content: attr(data-error)`, placed at `top: 4.5rem`, `left: 0`, with `font-size: 1.1rem`, `color: var(--error-color)`, `opacity: 0`, and `transform: translateY(-0.5rem)`.
7. Reveal the error message when the input is invalid and unfocused using `.validate-input:invalid:not(:focus):not(:placeholder-shown) + label::after`, setting `opacity: 1` and `transform: translateY(0)`.

## Goal

Write CSS rules so that the label floats above the input on focus or when filled, and a red error message appears beneath the field when the input is invalid and the user has moved away from the field.

## Constraints

- Use CSS only (no JavaScript).
- CSS variables must be `--primary-color: #0066cc`, `--error-color: #cc0000`, `--transition-duration: 0.2s`.
- Floating label must use `transform: translateY(-50%) scale(0.8)` and move to `top: 1rem`.
- Error message must use `content: attr(data-error)` to read from the label's `data-error` attribute.
- Error and label transitions must animate `opacity` and `transform` over `--transition-duration`.
- Use `pointer-events: none` on the label and its `::after` pseudo-element.
- The `:not(:placeholder-shown)` trick requires `placeholder=" "` (a single space) on the input.
