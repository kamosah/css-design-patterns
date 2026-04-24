# Sticky Timeline Year Labels

You have a scrollable vertical list of events grouped under year headings. As the user scrolls, the heading for the current year should stick to the top of its container until the next year's heading reaches that position and replaces it. Implement this purely with CSS.

## Goal

Use CSS only to make year labels in a grouped timeline sticky so that as you scroll through events, the label for the active year remains visible at the top until the next label takes its place.

## Constraints

- No JavaScript is allowed; solution must be purely CSS
- Timeline must use semantic HTML (`<h2>` for year labels and `<div>` for events)
- The container has a fixed height with `overflow-y: auto`
- Ensure smooth handoff between sticky headers without overlap or flicker
