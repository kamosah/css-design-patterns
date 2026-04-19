# Solution: Morphing Blob Background

Define four CSS custom properties (`--clip1` through `--clip4`) on `:root`, each holding a `polygon()` value with the **same number of points**. Point count must match across all shapes — the browser can only interpolate `clip-path` smoothly when the vertex count is identical; mismatched counts cause a hard snap rather than a smooth morph.

Style `.blob` to span the full viewport with `width: 100vw; height: 100vh`, apply the gradient background, set the initial `clip-path: var(--clip1)`, then attach the `blobMorph` animation at `8s ease-in-out infinite`.

In `@keyframes blobMorph`, step through each clip variable at 0%, 25%, 50%, and 75%, returning to `var(--clip1)` at 100% to close the loop seamlessly.
