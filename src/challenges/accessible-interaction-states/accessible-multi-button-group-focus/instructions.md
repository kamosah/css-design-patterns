## Problem: Accessible Multi-Button Group Focus

Try to create visually grouped icon buttons with a clear custom focus outline for keyboard users.

## Problem description

You are given a `.toolbar-group` containing three `.toolbar-btn` icon buttons (Bold, Italic, Underline). Write CSS to meet the following requirements:

- The `.toolbar-group` should display the buttons in a row with a shared background and rounded corners.
- Each `.toolbar-btn` should be a circular button (`48×48px`) that centers its SVG icon.
- When a button receives `:focus`, a bold blue focus ring (`0 0 0 3px #2684FF`) must appear around it, clearly visible above its siblings.
- On `:hover`, the button background should change to give mouse users visual feedback.
- The default browser outline should not appear; only your custom ring should show.

## Goal

Make the toolbar accessible and visually polished, ensuring keyboard users can track which button has focus.

## Constraints

- Do not use JavaScript or change the HTML structure.
