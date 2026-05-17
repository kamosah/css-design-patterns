## Solution: Context-Aware Rhythm with Container Queries

Let's use CSS Container Queries and custom properties to adjust vertical rhythm in different container widths, ensuring consistent baseline alignment within each context.

## Solution explanation

- **Lines 1–3** — The `:root` sets a global custom property `--rhythm` with a default value of `1rem`.
- **Lines 5–9** — `.container` is declared as a CSS inline-size container, and defines local rhythm (`--rhythm: 1rem`) and scale (`--scale: 1.5`).
- **Lines 11–15** — `.container h1` uses `clamp()` for fluid typography: `font-size` grows from rhythm × scale up to rhythm × scale², `line-height` and `margin-bottom` adapt between rhythm and rhythm × scale.
- **Lines 17–21** — `.container p` also uses `clamp()`: `font-size`, `line-height`, and `margin-bottom` all adapt between the rhythm and rhythm × scale.
- **Lines 23–28** — A container query for `min-width: 400px` increases rhythm to `1.5rem` and scale to `2`.
- **Lines 30–35** — A container query for `min-width: 800px` further increases rhythm to `2rem` and scale to `2.5`.
