## Problem: Custom Select Dropdown Control

30 min · Try to create a custom-styled select dropdown by hiding the default arrow and adding a custom icon with smooth border transitions.

## Problem description

Given an HTML page containing a `div` with class `custom-select-wrapper` that wraps a `<select class="custom-select">` element with several `<option>`s, write CSS to:

1. Remove the native dropdown arrow using `appearance: none` (cross-browser).
2. Style `.custom-select` as follows:
   - Width should be `200px`, height should be `40px`.
   - Padding should be `0 1rem`.
   - Border should be `1px solid #ccc`, `border-radius` should be `4px`.
   - Background color should be `#fff`.
   - Transition should be `border-color 0.2s ease`.
3. Use the `::after` pseudo-element on `.custom-select-wrapper` to display a downward arrow (`"▼"`) positioned at the right (`1rem` from edge), vertically centered, non-interactive (`pointer-events: none`), with `font-size` `0.6rem` and `color` `#666`.
4. Change the `.custom-select` `border-color` to `#0066cc` on hover and on focus, and remove the default focus outline.

## Goal

Write CSS rules so that the dropdown appears as a clean white box with a custom arrow; its border smoothly highlights in blue on hover/focus.

## Constraints

- Use only CSS (no JavaScript).
- Target cross-browser appearance removal with `appearance: none`, `-webkit-appearance: none`, and `-moz-appearance: none`.
- Arrow pseudo-element should be `content: "▼"`, `font-size` should be `0.6rem`, positioned via absolute positioning in the wrapper.
- Transition should apply only to `border-color`, duration should be `0.2s`, and use `ease` timing.
