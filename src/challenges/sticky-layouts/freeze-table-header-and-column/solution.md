# Solution: Freeze Header and First Column in Table

`.table-container` sets a fixed width of 400px and height of 200px, with `overflow: auto` to enable scrolling when the table content exceeds the container's dimensions.

`.freeze-table` uses `border-collapse: collapse` to remove spacing between table borders and sets `width: max-content` so the table can expand horizontally based on its content.

`.sticky-header` uses `position: sticky; top: 0` to pin the table header row to the top of the container during vertical scrolling, with `z-index: 2` to layer it above the other cells.

`.sticky-column` uses `position: sticky; left: 0` to freeze the first column during horizontal scrolling, with `z-index: 1` to sit beneath the sticky header if they overlap.

`.top-left` combines `position: sticky; top: 0; left: 0` to freeze the top-left cell, ensuring it remains visible during both vertical and horizontal scrolling, with `z-index: 3` to layer it above all other sticky headers and columns.
