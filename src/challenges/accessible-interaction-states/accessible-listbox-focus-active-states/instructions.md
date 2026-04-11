## Problem: Accessible Listbox with Visible Focus and Active States

Try to style listbox options with clear focus and selection states for accessibility.

## Problem description

You are given a listbox widget using a container with the class `listbox` and a set of `div` elements with the class `listbox-option`. Each option may be selected (with `aria-selected="true"`) or not. Focusable options have `tabindex="0"` and receive keyboard focus.

Write CSS to meet the following requirements:

- The listbox should be visually distinct, with a vertical list of options and clear spacing.
- When a listbox option is `:focus`, it must display a bold blue focus ring visible on any background.
- When a listbox option is selected (`aria-selected="true"`), it must have a filled blue background and white text, even when not focused.
- When both focused and selected, the focus ring must be visible around the selected background.
- The default browser outline should not appear.

## Goal

Provide accessible, visually robust listbox options that clearly indicate both focus and selected (active) states, fully supporting ARIA accessibility patterns.

## Constraints

Do not use JavaScript or change the HTML structure.
