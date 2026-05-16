## Solution: Form Field Rhythm Enforcer

Let's define a rhythm unit using CSS variables and apply it to form labels and inputs to maintain a uniform vertical rhythm in your forms.

## Solution explanation

- **Lines 1–3** — Define the `--rhythm` custom property as `2rem`, establishing the vertical unit.
- **Lines 5–8** — Set the body `font-size` and apply the rhythm to `line-height`, aligning baselines to the grid.
- **Lines 10–14** — Style `<label>` as `display: block` so it stacks vertically, then apply `line-height` and `margin-bottom` using the rhythm variable for clear separation between each label and its field.
- **Lines 16–19** — Style `<input>` as `display: block` and apply `margin-bottom` to maintain consistent spacing after each field.
