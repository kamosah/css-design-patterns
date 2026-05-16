## Problem: Form Field Rhythm Enforcer

Define a rhythm unit using CSS variables and apply it to form labels and inputs to maintain a uniform vertical rhythm in your forms.

## Problem description

You have a simple form with multiple `<label>` and `<input>` pairs. Your task is to define a CSS custom property for a 2rem rhythm unit and apply it to the `line-height` and `margin-bottom` of each `<label>` and `<input>`, ensuring consistent vertical spacing throughout the form.

## Goal

Use only HTML and CSS to:

- Define `--rhythm` as `2rem` in `:root`.
- Apply `line-height: var(--rhythm)` and `margin-bottom: var(--rhythm)` to all `<label>` elements.
- Apply `margin-bottom: var(--rhythm)` to all `<input>` elements.

## Constraints

- Only CSS is allowed.
- Use rem units and CSS variables.
- Do not alter the HTML structure or add inline styles.
