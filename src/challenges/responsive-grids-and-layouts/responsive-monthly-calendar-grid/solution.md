# Solution: Responsive Monthly Calendar Grid

`.calendar` is set to `display: grid` with `grid-template-columns: repeat(7, 1fr)`, creating seven equal columns that scale with the viewport. `grid-auto-rows: auto` lets each row size to its content, and `gap: 5px` applies uniform gutters between all cells.

`.weekday` receives `font-weight: bold`, `text-align: center`, and a light `background` so the header row stands out visually from the date cells below it.

`.date` uses `position: relative` and `padding-top: 100%` to enforce a square aspect ratio — percentage padding is always calculated against the element's **width**, so the cell's height always equals its width regardless of how wide the grid column is.

`.date > span` is positioned absolutely with `inset: 0` (top/right/bottom/left all zero) so it overlays the padded space. `display: flex` with `align-items: center` and `justify-content: center` re-centers the date number within that overlay.

`.date.first` sets `grid-column-start: 5` to place the first date under Thursday. Every subsequent `.date` cell is placed automatically by the grid's auto-placement algorithm, wrapping into new rows as needed — no manual positioning required.
