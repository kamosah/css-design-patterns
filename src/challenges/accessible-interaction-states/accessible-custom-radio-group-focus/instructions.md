## Problem: Accessible Custom Radio Group with Visible Focus

Try to style custom radio buttons with clear focus and checked indicators while keeping them accessible.

## Problem description

You are given a group of custom-styled radio buttons using native `<input type="radio">` (with class `custom-radio`) and corresponding labels (with class `custom-radio-label`), all grouped in a container with the class `radio-group`.

Write CSS to meet the following requirements:

- Each radio must be visually replaced with a custom circular indicator, using only CSS (hide the native input visually but keep it accessible).
- When a radio input is `:focus` (e.g., by Tab or arrow keys), its custom indicator must display a bold blue focus ring (`0 0 0 3px #2684FF`) outside the circle, not overlapping the checked indicator.
- The checked state must be clearly visible inside the custom radio indicator (filled circle or checkmark).
- The default browser outline should not appear.
- The group must remain accessible for keyboard users and screen readers (using native radio inputs and labels).

## Goal

Provide accessible, visually robust custom radio buttons with clear focus and checked states, fully supporting keyboard navigation.

## Constraints

- Do not use JavaScript or change the HTML structure.
