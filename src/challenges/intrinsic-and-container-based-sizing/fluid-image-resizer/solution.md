# Solution: Fluid Image Resizer

## Explanation

### `max-width: 100%`

Setting `max-width: 100%` on images allows them to shrink when their container is narrower than their intrinsic width, while preventing them from growing beyond their natural dimensions. This is the key difference from `width: 100%`, which forces every image to stretch to fill the full container width regardless of its intrinsic size.

### `height: auto`

`height: auto` instructs the browser to calculate the image height proportionally to whatever width is applied. Without it, constraining width alone can distort the aspect ratio if a fixed height is inherited or set elsewhere.

### Why intrinsic sizing matters

Browsers already know an image's natural width and height from its metadata. `max-width: 100%` lets the browser's intrinsic size act as a natural upper bound — the image stays crisp at its intended resolution when space allows, and degrades gracefully in narrower containers.
