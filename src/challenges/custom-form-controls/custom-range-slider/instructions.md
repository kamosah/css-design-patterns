## Problem: Custom Range Slider Control

15 min · Try to create a custom-styled range slider with a modern track and thumb by overriding the default browser appearance using CSS.

## Problem description

Given an HTML page containing an `<input type="range">` element with the class `custom-range`, write CSS to:

1. Remove the default browser appearance of the range input.
2. Style the track (`::-webkit-slider-runnable-track`) as a `100%` wide, `6px` tall bar with `#ddd` background and `3px` border-radius.
3. Style the thumb (`::-webkit-slider-thumb`) as a `16px × 16px` circle with `#007BFF` background, centered on the track.
4. Remove the focus outline on the input when focused.

## Goal

Write CSS rules to render a horizontal slider track and a circular draggable thumb that match the specified design.

## Constraints

- Use only CSS (no JavaScript).
- Slider track height should be `6px`; `border-radius` should be `3px`.
- Thumb size should be `16px` by `16px`; `border-radius` should be `50%`; `background-color` should be `#007BFF`.
- Center the thumb vertically over the track.
- Target only WebKit browsers using `::-webkit-` pseudo-elements.
