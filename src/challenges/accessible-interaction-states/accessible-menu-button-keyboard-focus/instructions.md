## Problem: Accessible Menu Button with Keyboard Focus Highlight

Style a menu trigger button and its dropdown items so that focus rings appear **only during keyboard navigation**, not on mouse click.

## Problem description

You have a `<button class="menu-btn">` that opens a `<ul class="menu-list">` of `<button class="menu-item">` elements. Neither the trigger nor the items have any styles yet.

## Goal

- Style `.menu-btn` as a recognisable trigger button (border, padding, colors).
- Style `.menu-list` as a visually distinct dropdown (shadow, spacing).
- Style `.menu-item` as full-width, text-aligned buttons.
- Use `:focus-visible` to show a custom blue outline **only when navigating by keyboard** — suppress the default outline on mouse click with `outline: none`.

## Constraints

You may only modify CSS; the HTML structure must remain unchanged and JavaScript is not allowed.
