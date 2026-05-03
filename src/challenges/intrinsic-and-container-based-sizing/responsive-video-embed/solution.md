# Solution: Responsive Video Embed

`position: relative` on `.video-container` creates the containing block for the embedded video. `width: 100%` lets the wrapper expand and shrink with its parent, so the component stays fluid in any layout.

`padding-top: 68.25%` uses the classic intrinsic-ratio technique. Vertical percentage padding is calculated from the element's width, and `68.25%` is `9 / 16`, which produces a 16:9 box without needing JavaScript.

The `<iframe>` is absolutely positioned with `top: 0`, `left: 0`, `width: 100%`, and `height: 100%`, so it fills the ratio box exactly. `border: 0` removes the default frame border for a clean embed.
