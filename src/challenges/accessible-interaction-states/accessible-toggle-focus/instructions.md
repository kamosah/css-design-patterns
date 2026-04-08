## Problem: Accessible Toggle Switch Focus Ring

Try to add a visible custom focus ring to a toggle switch for clear keyboard accessibility.

## Problem description

You are given a checkbox `<input class="toggle-input">` and a `<label class="toggle-label">` that form a toggle switch UI. The label visually displays the switch; the input is hidden but accessible.

Write CSS to meet the following requirements:

- The switch must look like a rounded slider with a movable knob and clear on/off state.
- When the checkbox is `:focus` (e.g., via the Tab key), a bold blue focus ring (`0 0 0 3px #2684FF`) must appear around the switch — clearly visible and not overlapping the knob.
- The default browser outline must not appear; only your custom ring should show.
- The focus indicator should be visible regardless of background color.

## Goal

Make the toggle switch visually clear and accessible, ensuring keyboard users can easily identify focus state.

## Constraints

- Do not use JavaScript or change the HTML structure.
