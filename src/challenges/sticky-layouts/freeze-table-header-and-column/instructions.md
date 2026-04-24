# Freeze Header and First Column in Table

You have an HTML table with many rows and columns placed inside a container with limited width and height. As the user scrolls vertically, the header row should stay fixed at the top of the container. As they scroll horizontally, the first column should stay fixed on the left. The top-left cell (header of the first column) must handle both stickiness, without visual glitches.

## Goal

Use CSS only to freeze the header row and the first column of the table, ensuring proper stacking order and no overlap issues.

## Constraints

- Do not use JavaScript; solution must be purely CSS
- The container must have fixed dimensions and overflow
- Table must remain responsive to content size (width adapts to content)
- Ensure accessibility; semantic HTML table structure must be preserved
