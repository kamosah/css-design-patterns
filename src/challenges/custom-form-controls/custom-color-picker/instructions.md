## Problem: Custom Color Picker Control with Styled Swatch

Try to create a custom color picker by styling the color swatch, removing native appearance, and adding interactive hover and focus effects using only CSS.

## Problem description

Given an HTML page containing a `<label>` with class `.color-picker` that wraps an `<input type="color" class="custom-color">` and the text `Choose color`, write CSS to:

1. Remove the default appearance of the color input across browsers using `appearance: none` and `-webkit-appearance: none`.
2. Set `.custom-color` to `32px` by `32px`, remove padding and border, and apply `cursor: pointer`.
3. Use `::-webkit-color-swatch-wrapper` to remove any built-in padding.
4. Style `::-webkit-color-swatch` to have a `2px solid #ccc` border and `4px` border-radius.
5. Use `::-moz-color-swatch` to apply the same border and border-radius for Firefox.
6. Add a `0.2s ease` transition to `border-color` and `transform` on the swatch.
7. On `.custom-color:hover`, increase the swatch `border-color` to `#0066cc` and scale it up slightly (`scale(1.1)`).
8. On `.custom-color:focus`, remove the outline and apply a `box-shadow` of `0 0 0 3px rgba(0,102,204,0.3)`.

## Goal

Write CSS rules so that the native color picker displays as a `32px × 32px` swatch with custom border, rounded corners, smooth hover scaling, and a focus ring, without relying on JavaScript.

## Constraints

- Use only CSS (no JavaScript).
- Remove all native padding and borders via `appearance: none` and vendor resets.
- Style both WebKit and Mozilla pseudo-elements to ensure consistent cross-browser control.
- Apply transitions on `border-color` and `transform` over `0.2s ease`.
- Define focus styling via `box-shadow` instead of using `outline`.
