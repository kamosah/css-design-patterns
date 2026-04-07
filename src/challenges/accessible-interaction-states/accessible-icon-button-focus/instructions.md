## Problem: Accessible Icon Button Focus Highlight

Add a clear, accessible focus ring to an icon-only button for keyboard users.

## Problem description

You are given an icon-only `<button>` with the class `.icon-btn` and an `aria-label` for accessibility. It contains an SVG search icon.

Write CSS to meet the following requirements:

1. The button should be **48×48px**, circular (`border-radius: 50%`), with no border and a transparent background.
2. The icon should be centered both horizontally and vertically.
3. When `.icon-btn` receives `:focus`, a **3px solid blue** (`#2684FF`) ring should appear around the button using `box-shadow`, not `outline`.
4. The default browser outline should be removed; only the custom `box-shadow` ring should show.

## Goal

Provide an accessible icon button that is visually clear to keyboard users, using `box-shadow` so the focus ring follows the circular shape of the button.

## Constraints

- Do not use JavaScript or change the HTML structure.
