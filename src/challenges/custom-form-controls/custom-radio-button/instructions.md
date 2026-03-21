## Custom Radio Button Control

Native browser radio buttons are notoriously difficult to style. The solution is to **hide the native input** and replace it visually with a styled element driven entirely by CSS — no JavaScript required.

### The Core Technique

The `:checked` pseudo-class on an `<input>` lets you conditionally style its siblings using the **adjacent sibling combinator** (`+`):

```css
input:checked + .radio-mark {
  border-color: #4CAF50;
}
```

Because the `.radio-mark` span sits immediately after the `<input>` in the DOM, this selector activates whenever the radio is selected — even though the input itself is hidden.

### Drawing the Inner Dot

The filled center dot is drawn with `::after` — a pseudo-element that requires `content: ''` to appear, and `position: absolute` to be placed freely inside the `.radio-mark`:

```css
input:checked + .radio-mark::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #4CAF50;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

The `top: 50% / left: 50% / transform: translate(-50%, -50%)` pattern is the standard way to center an absolutely positioned element when you know its size.

### HTML Structure

```html
<label class="custom-radio">
  <input type="radio" name="option" value="A">
  <span class="radio-mark"></span>
  Option A
</label>
```

Wrapping everything in a `<label>` means clicking anywhere on the label — including the text — toggles the radio. The `<span>` is the purely decorative element you'll style.

### Your Task

Given two `.custom-radio` labels (Option A and Option B), write CSS to:

1. Hide the native `input[type="radio"]`
2. Style `.radio-mark` as a **20×20px circle** with a 2px solid `#666` border
3. Change `.radio-mark`'s border-color to `#4CAF50` when `:checked`
4. Draw a **10×10px green dot** centered inside `.radio-mark` via `::after` when `:checked`
