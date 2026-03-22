## Problem: Custom Toggle Switch Control

15 min · Try to build a custom toggle switch with a sliding knob and background change using only CSS.

## Problem description

Given an HTML page containing a `label` with the class `.switch` that wraps a native checkbox `input` and a `span` element with the class `.slider`, write CSS to:

1. Hide the native checkbox input.
2. Style the `.slider` as a `50px × 24px` rounded rectangle with a light gray background.
3. Use `::before` on `.slider` to create a `20px × 20px` circular knob positioned on the left.
4. Change the background of the `.slider` to `#2196F3` when the checkbox is checked.
5. Move the knob to the right inside the slider when checked, using `transform`.

## Goal

Write CSS rules so that the switch track changes color and the circular knob slides from left to right when checked, simulating an on/off toggle.

## Constraints

- Use only CSS (no JavaScript).
- `.slider` size should be `50px` width and `24px` height; `border-radius` should be `24px`.
- Knob size should be `20px` diameter; `background-color` should be `#fff`; `border-radius` should be `50%`.
- Checked track background should be `#2196F3`.
- Knob transition should be `0.2s ease-in-out` for smooth sliding.
