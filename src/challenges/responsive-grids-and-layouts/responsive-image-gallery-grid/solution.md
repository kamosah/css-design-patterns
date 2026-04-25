# Solution: Responsive Image Gallery Grid

The key technique is `grid-template-columns: repeat(auto-fill, minmax(150px, 1fr))`.

`repeat(auto-fill, ...)` tells the grid engine to create as many column tracks as will fit in the available space. `minmax(150px, 1fr)` constrains each column to a minimum of 150px while allowing it to grow and fill remaining space equally across all columns.

`auto-fill` (rather than `auto-fit`) preserves empty grid tracks, which keeps column widths consistent when there are fewer items than the maximum column count — the remaining cells simply stay empty rather than stretching existing items to fill the row.

`gap: 10px` applies uniform 10px spacing between both rows and columns in a single declaration. Setting `width: 100%` on the images makes each thumbnail fill its grid cell responsively without overflowing.
