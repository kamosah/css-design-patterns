## Problem: Accessible Tab Navigation Focus Highlight

Try to highlight the focused tab with a bold blue bottom border for clear keyboard navigation.

## Problem description

You are given a horizontal navigation component that uses a set of buttons with the class `.tab` (such as "Home", "About", and "Contact") grouped inside a container with the class `.tab-list`.

Write CSS to meet the following requirements:

1. Tabs should look like horizontal navigation buttons with subtle separation between them.
2. When a `.tab` receives `:focus` (e.g., with **Tab** or arrow keys), it should display a bold blue bottom border (`4px solid #2684FF`).
3. The bottom border must only appear for the focused `.tab`.
4. The default browser outline should not appear; only your custom `border-bottom` should show.

## Goal

Provide an accessible tab interface with a custom, visible focus highlight, making keyboard navigation clear and user-friendly.

## Constraints

- Do not use JavaScript or change the HTML structure.
