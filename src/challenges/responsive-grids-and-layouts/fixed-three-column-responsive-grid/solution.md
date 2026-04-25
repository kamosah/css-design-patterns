# Solution: Fixed Three-Column Responsive Grid

`grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))` creates a responsive grid where each column is at least 200px wide and expands equally to fill available space. `auto-fit` collapses empty tracks, so items on a partial row stretch to fill the full width rather than leaving blank columns.

`max-width: 800px` on the container is what enforces the three-column behaviour at larger viewports. With three 200px columns plus two 16px gaps, the minimum width for three columns is 632px — so between 632px and 800px the grid fits three columns, and below 632px it naturally drops to two, then one.

The `.grid-item` styles use a light background, border, and padding to give each card a clear visual boundary. `text-align: center` centers the label within each cell.
