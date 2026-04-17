# Solution Explanation

## Lines 1–9: `.fullscreen-section`

Sets up `min-height: 100vh` to fill the viewport, uses flexbox to centre content, adds `position: relative` so the absolutely-positioned `.nav` can anchor to it, and `overflow: hidden` to clip any off-screen slides.

## Lines 10–12: `input[type="radio"]`

`display: none` removes the native radio buttons from the layout while keeping them in the DOM so they remain functional. Labels that reference them via `for` still trigger state changes.

## Lines 13–28: `.slides` and `.slide`

`.slides` is a `100vw × 100vh` flex row. Each `.slide` claims `min-width: 100vw` so it would fill the row on its own, but all slides start with `display: none`. Only the checked slide is revealed via the sibling combinator rules below.

## Lines 29–33: General sibling combinator selectors

`#slide1:checked ~ .slides #s1` — the `~` combinator reaches any later sibling, so the checked radio (which precedes `.slides` in the DOM) can target elements inside `.slides`. Setting `display: flex` on the matched slide reveals only the active one.

## Lines 34–50: `.nav` and `.nav label`

`position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%)` pins the nav to the horizontal centre of the section regardless of content width. Labels are styled as pill buttons — `cursor: pointer` is essential so they feel clickable without a wrapping `<button>`.
