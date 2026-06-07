import type { Topic, PatternIntroduction } from '../../types/challenge'
import { challenge as customRadioButton } from './custom-radio-button/meta'
import { challenge as customFileUpload } from './custom-file-upload/meta'
import { challenge as customToggleSwitch } from './custom-toggle-switch/meta'
import { challenge as customRangeSlider } from './custom-range-slider/meta'
import { challenge as customSelectDropdown } from './custom-select-dropdown/meta'
import { challenge as segmentedControlToggle } from './segmented-control-toggle/meta'
import { challenge as floatingLabelInput } from './floating-label-input/meta'
import { challenge as customSearchInput } from './custom-search-input/meta'
import { challenge as customColorPicker } from './custom-color-picker/meta'
import { challenge as threeStateCheckbox } from './three-state-checkbox/meta'
import { challenge as floatingLabelValidation } from './floating-label-validation/meta'
import { challenge as rangeSliderTickMarks } from './range-slider-tick-marks/meta'
import { challenge as customEmailInputValidation } from './custom-email-input-validation/meta'
const patternIntro: PatternIntroduction = {
  tagline: "Explore the Custom Form Controls pattern and understand why it's important.",

  overview: `<p>The <strong>Custom Form Controls</strong> pattern is about transforming default HTML inputs, selects, checkboxes, radios, and buttons into cohesive, branded UI elements, while retaining accessibility and native behaviors. Native form elements often appear differently across browsers, leading to inconsistencies and limiting branding options. Custom form controls solve this by allowing designers and developers to fully style inputs, checkboxes, radios, and selects while still preserving their usability and accessibility. This makes interfaces more cohesive and user-friendly. In this pattern, instead of listing every pseudo-element or ARIA attribute up front, we'll take a hands-on approach through real-world challenges that demonstrate custom form controls in action.</p>`,

  howItWorks: `<p>This pattern uses CSS to visually replace or enhance native form elements while keeping their functionality intact. Typically, the native input is visually hidden (but remains accessible), and a styled element (like a <code>span</code> or <code>div</code>) is used to represent its state. Interactions are synced using pseudo-classes and adjacent sibling selectors. Accessibility is maintained through the correct use of labels and focus management.</p>`,

  previewHtml: `<div class="field">
  <div class="input-wrapper">
    <svg class="icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="5" width="16" height="11" rx="2" stroke="currentColor" stroke-width="1.5"/>
      <path d="M2 7l8 5 8-5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
    </svg>
    <input type="email" placeholder="Enter your email" />
  </div>
</div>`,

  previewCss: `* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #ffffff;
  font-family: system-ui, sans-serif;
}
.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}
.icon {
  position: absolute;
  left: 12px;
  width: 16px;
  height: 16px;
  color: #94a3b8;
  pointer-events: none;
}
input {
  padding: 10px 14px 10px 38px;
  width: 240px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  color: #1e293b;
  outline: none;
  transition: border-color 0.15s;
}
input::placeholder { color: #94a3b8; }
input:focus { border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15); }`,

  previewCaption: 'Email input with validation icons',

  anatomyBlocks: [
    {
      label: 'An example of a custom checkbox:',
      css: `/* Container for the checkbox and its label */
.custom-checkbox {
  display: inline-flex;  /* Aligns the checkbox and label inline */
  align-items: center;   /* Vertically centers content */
  cursor: pointer;       /* Changes cursor to pointer on hover */
}

/* Hide the native checkbox while keeping it accessible */
.custom-checkbox input {
  display: none;         /* Completely hides the checkbox */
}`,
      caption: 'An example of a custom checkbox',
    },
  ],

  anatomyExplanation: `<p>The above CSS hides the checkbox input but retains functionality, while the <code>.checkmark</code> visually represents its state. The use of adjacent sibling combinators allows CSS to react to the input's checked state.</p>`,
}

export const topic: Topic = {
  id: 'custom-form-controls',
  title: 'Custom Form Controls',
  patternIntro,
  challenges: [customRadioButton, customFileUpload, customToggleSwitch, customRangeSlider, customSelectDropdown, segmentedControlToggle, floatingLabelInput, customSearchInput, customColorPicker, threeStateCheckbox, floatingLabelValidation, rangeSliderTickMarks, customEmailInputValidation],
}
