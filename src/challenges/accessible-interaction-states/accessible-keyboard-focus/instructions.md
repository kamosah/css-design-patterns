## Problem: Accessible Focus Indicator Using :focus-visible

Try to show a custom focus ring on a button only during keyboard navigation.

## Problem description

Given an HTML page with a `<button class="keyboard-focus">Accessible Action</button>`, write CSS to meet the following requirements:

1. When the button receives keyboard focus (e.g., by pressing **Tab**), display a visible `3px solid #2684FF` (blue) outline offset by `2px`.
2. When the button is clicked with a mouse, the custom focus ring should **not** appear.
3. Use the `:focus-visible` pseudo-class.
4. Remove any default browser outline.

## Goal

Demonstrate how to use the `:focus-visible` selector to provide an accessible and visually clear focus ring only for keyboard users, improving both accessibility and aesthetics.

## Constraints

- Do not use JavaScript or change the HTML structure.
