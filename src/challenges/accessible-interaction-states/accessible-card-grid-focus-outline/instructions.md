## Problem: Accessible Card Grid with Per-Card Focus Outline

Try to show a clear custom focus ring on focused cards within a responsive grid.

## Problem description

You are given a responsive card grid component, using a container with the class `card-grid` and several `card` elements with the class `card`. Each card is made focusable using `tabindex="0"`.

Write CSS to meet the following requirements:

- The card grid should display cards in responsive columns, with gaps between them and visual separation.
- When a card is `:focus` (e.g., using Tab or arrow keys), it should display a thick blue focus ring (`4px solid #2684FF`) outside the card, offset for clarity and visible on any background.
- Only the focused card displays the focus ring; the rest remain visually neutral.
- The default browser outline should not appear.
- The grid must work well for both light and dark backgrounds.

## Goal

Provide robust, per-card accessible focus indicators in a card grid for keyboard navigation, without visual clutter.

## Constraints

- Do not use JavaScript or change the HTML structure.
