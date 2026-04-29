# Solution: Fluid-Width Responsive Grid with Aspect Ratio Elements

`grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))` is the core of the layout. `auto-fit` creates as many columns as will fit, collapsing empty tracks to zero — so items fill the row instead of leaving a gap. `minmax(200px, 1fr)` means each column is at least 200px wide and grows equally to share available space. No media queries are needed; the browser recalculates column count as the viewport changes.

`aspect-ratio: 16 / 9` on `.grid-item` is an intrinsic sizing instruction. Because grid items stretch to fill their column by default, the item's width is always determined by the column width. The browser then derives height from that width using the 16:9 ratio — so the box resizes correctly at every breakpoint without JavaScript or the old padding-top hack.

`overflow: hidden` clips any content that overflows the fixed ratio box. `position: relative` establishes a stacking context for any absolutely-positioned children inside the item. `display: flex` with `align-items` and `justify-content` centers the label text without affecting the aspect-ratio constraint.
