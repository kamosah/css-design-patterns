## Problem: Segmented Control Toggle

Try to build a segmented control toggle using hidden radio inputs and styled labels with distinct active states and smooth transitions.

## Problem description

Given an HTML page containing a `div` with class `.segmented-control` that wraps three pairs of radio inputs (`name="segment"`) and their corresponding labels (e.g., Option 1, Option 2, and Option 3), write CSS to:

1. Hide the native radio inputs.
2. Display the `.segmented-control` as a horizontal flex container.
3. Style each label to flex equally, center text, add padding, and a `1px solid #ccc` border.
4. Remove the right border on all labels except the last.
5. Apply a `4px` border-radius to the first and last labels (outer corners only).
6. Change the `background-color` to `#0066cc` and text color to `#fff` for the label immediately following a checked input.
7. Include smooth transitions (`0.2s ease`) for `background-color` and `color` changes.

## Goal

Write the CSS rules to render a three-segment toggle where clicking a segment highlights it in blue with white text, while the others remain with a white background and gray border.

## Constraints

- Use only CSS (no JavaScript).
- There should be equal-width segments via `flex: 1` on labels.
- `.segmented-control` should not overflow its container.
- Use adjacent sibling selectors (`input:checked + label`) and label pseudo-class selectors (`:first-of-type` and `:last-of-type`).
- Transitions should be `background-color 0.2s ease` and `color 0.2s ease`.
