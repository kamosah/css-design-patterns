# Solution: Sticky Element with Offset

Set `.sidebar` to `position: sticky` and `top: 20px` to enforce the 20px offset from the top of the viewport. The key addition is `align-self: flex-start` — without it, the sidebar stretches to fill the full height of the flex container and has nowhere to scroll within, so the sticky behaviour never triggers. Setting `flex: 1` on `.content` lets it fill the remaining width.
