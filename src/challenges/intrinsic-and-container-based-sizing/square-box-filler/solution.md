# Solution: Square Box Filler

`width: 100%` on `.square` makes each element expand to match the width of its containing block. Because the width is derived from the container, the square automatically responds to changes in container size instead of relying on fixed dimensions.

`aspect-ratio: 1 / 1` tells the browser to calculate height from width using a one-to-one ratio. That keeps every `.square` perfectly square as the available width changes.

The `.container` width and border simply make the sizing behavior visible in the exercise. `margin-bottom: 16px` adds spacing between squares, and `background-color: lightgray` makes each filled square easy to see.
