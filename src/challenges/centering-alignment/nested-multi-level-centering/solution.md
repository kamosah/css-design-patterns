## Solution: Nested Multi-Level Centering (Grid + Flex Nesting)

Learn how to combine CSS Grid and Flexbox across nested containers to precisely center content.

## Solution explanation

- **`height: 100vh` on `.level1`** — Grid centering is relative to the container's size. Without an explicit block size, the grid collapses to fit its content and has nothing to center within. `100vh` gives it the full viewport height to work with.

- **`place-items: center` on `.level1`** — This shorthand sets both `align-items: center` and `justify-items: center` on the grid container, centering the single grid item (`.level2`) in both axes within the grid's only implicit cell.

- **`justify-content: center` on `.level2`** — Centers `.level3` along the flex main axis (horizontal by default). Since `.level2` is itself already centered by the grid, this ensures the marker doesn't drift left if `.level2` has any intrinsic width.

- **`align-items: center` on `.level2`** — Centers `.level3` along the flex cross axis (vertical). Together with `justify-content`, this double-locks the marker in the middle regardless of the text size of ◆.

- **Why two layout systems?** — Grid excels at placing items within a defined area (`place-items` works on the grid cell), while Flex excels at distributing items along an axis. Nesting them is a common real-world pattern: the outer grid establishes the page-level region, the inner flex handles component-level alignment.
