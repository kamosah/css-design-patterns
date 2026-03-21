## Solution: Custom File Upload Button

Let's create a custom file upload button by hiding the native input and styling a visible span with hover effects using only CSS.

## Solution explanation

In the `styles.css` file, you'll find the following:

**Lines 1–4:** Set `.custom-file` as an `inline-block` container and enable the `pointer` cursor so the button is clickable.

**Lines 6–8:** Hide the native file input by setting `display: none`.

**Lines 10–20:** Style `.button-text` as a centered flex container with the specified size, blue background, white text, `4px` border-radius, and `1rem` font size.

**Lines 22–24:** Define a hover state to change the background to a darker blue for feedback.

```css
.custom-file {
  display: inline-block;
  cursor: pointer;
}

.custom-file input {
  display: none;
}

.custom-file .button-text {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 40px;
  background-color: #007BFF;
  color: #FFF;
  border-radius: 4px;
  font-size: 1rem;
}

.custom-file .button-text:hover {
  background-color: #0056B3;
}
```

### Why it works

| Technique | Purpose |
| --- | --- |
| `<label>` wrapping `<input>` | Clicking anywhere inside the label — including the styled span — triggers the hidden file input |
| `display: none` on `input` | Removes the native control from layout entirely; the label keeps it interactive |
| `inline-flex` on `.button-text` | Enables `align-items` and `justify-content` to center text both axes without extra markup |
| `:hover` on `.button-text` | CSS-only interactivity — no JavaScript needed for the darker shade on mouse-over |
