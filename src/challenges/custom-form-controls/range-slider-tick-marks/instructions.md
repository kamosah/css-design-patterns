## Problem: Range Slider with Responsive Tick Marks and Labels

Try to build a custom range slider with tick marks and labels using CSS variables and gradients.

## Problem description

Given an HTML page containing a `<div class="range-container">` that wraps an `<input type="range" class="marked-range" min="0" max="100" step="10">`, write CSS to:

1. Define CSS variables (`--tick-count`, `--track-height`, and `--thumb-size`) on `.range-container` for easy theming.
2. Remove the default browser appearance of the range input and set its width to 100%. Also, use a transparent background and define custom variables like `--thumb-border-color` and `--thumb-shadow` for better styling control.
3. Style the track (`::-webkit-slider-runnable-track` and `::-moz-range-track`) to:
   - Have a height of `var(--track-height)` and be vertically aligned.
   - Show tick marks using a `repeating-linear-gradient` background that repeats every `(100% / (var(--tick-count) - 1))`. Use a 1px line in `#666` with a neutral `#eee` background.
4. Style the thumb (`::-webkit-slider-thumb` and `::-moz-range-thumb`) to:
   - Be a white circular handle sized `var(--thumb-size)` with a `2px solid` border of `#666`.
   - Transition the border color to `#0066cc` and apply a subtle box-shadow when the input is focused via keyboard (using `:focus-visible`).
5. Use `.range-container`'s `::before` and `::after` pseudo-elements to display `0` on the left and `100` on the right below the track, mimicking min/max labels.

## Goal

Write CSS rules so that users see a full-width slider with clear tick marks at each step, numeric labels at both ends, and consistent styling across WebKit and Firefox.

## Constraints

- Use only CSS (no JavaScript).
- Define and utilize CSS variables on the container for theming.
- Draw tick marks via `background-image: repeating-linear-gradient`.
- Target both WebKit and Mozilla pseudo-elements for track and thumb styling.
- Include transitions for focus states of the thumb using `:focus-visible`.
