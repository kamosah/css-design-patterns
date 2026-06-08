import type { Topic, PatternIntroduction } from '../../types/challenge'
import { challenge as accessibleButtonFocus } from './accessible-button-focus/meta'
import { challenge as accessibleCardFocusShadow } from './accessible-card-focus-shadow/meta'
import { challenge as accessibleCheckboxFocus } from './accessible-checkbox-focus/meta'
import { challenge as accessibleIconButtonFocus } from './accessible-icon-button-focus/meta'
import { challenge as accessibleInputFocus } from './accessible-input-focus/meta'
import { challenge as accessibleKeyboardFocus } from './accessible-keyboard-focus/meta'
import { challenge as accessibleLinkFocus } from './accessible-link-focus/meta'
import { challenge as accessibleRadioFocus } from './accessible-radio-focus/meta'
import { challenge as accessibleTabFocus } from './accessible-tab-focus/meta'
import { challenge as accessibleToggleFocus } from './accessible-toggle-focus/meta'
import { challenge as accessibleMultiButtonGroupFocus } from './accessible-multi-button-group-focus/meta'
import { challenge as accessibleCardGridFocusOutline } from './accessible-card-grid-focus-outline/meta'
import { challenge as accessibleCustomRadioGroupFocus } from './accessible-custom-radio-group-focus/meta'
import { challenge as accessibleMenuButtonKeyboardFocus } from './accessible-menu-button-keyboard-focus/meta'
import { challenge as accessibleListboxFocusActiveStates } from './accessible-listbox-focus-active-states/meta'

const patternIntro: PatternIntroduction = {
  tagline: "Explore the Accessible Interaction States pattern and understand why it's important.",

  overview: `<p>The <strong>Accessible Interaction States</strong> pattern is all about making sure our UI responds clearly and inclusively to user interactions—whether that's hover, focus, active, disabled, or ARIA-driven state changes. This also helps ensure that users can clearly perceive and navigate through an interface, regardless of their input method or abilities. By providing visible focus styles, hover feedback, active cues, and disabled states, we make interactions understandable and inclusive, especially for keyboard users and screen reader users.</p>`,

  howItWorks: `<p>This pattern uses pseudo-classes like <code>:hover</code>, <code>:focus</code>, <code>:active</code>, and <code>:disabled</code> to define distinct styles for various interaction states. The <code>:focus-visible</code> selector improves accessibility by limiting focus outlines to keyboard interactions. Visual cues like outlines, shadows, or background changes provide feedback that an element is interactive or currently selected.</p>`,

  previewHtml: `<div class="card" tabindex="0">Accessible Card Example</div>`,

  previewCss: `* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #ffffff;
  font-family: system-ui, sans-serif;
}
.card {
  padding: 32px 56px;
  background: #f1f5f9;
  border-radius: 10px;
  font-size: 15px;
  color: #334155;
  cursor: pointer;
  outline: none;
  transition: box-shadow 0.15s, background 0.15s;
}
.card:hover {
  background: #e2e8f0;
}
.card:focus-visible {
  box-shadow: 0 0 0 3px #6366f1;
  background: #eef2ff;
}
.card:active {
  background: #dde4f0;
}`,

  previewCaption: 'Accessible card that will contain a focus shadow upon clicking',

  anatomyBlocks: [
    {
      label: "Here's a simple structure using buttons:",
      css: `/* Base button style */
button {
  background-color: #005fcc;  /* Default background color */
  color: white;               /* Text color */
  border: none;               /* No border */
  padding: 0.75rem 1.25rem;   /* Padding for size */
  border-radius: 4px;         /* Rounded corners */
  cursor: pointer;            /* Pointer cursor on hover */
  transition: background-color 0.2s ease; /* Smooth background transition */
}

/* Hover state */
button:hover {
  background-color: #0047a3;
}

/* Focus-visible state — keyboard users only */
button:focus-visible {
  outline: 3px solid #005fcc;
  outline-offset: 2px;
}

/* Active state */
button:active {
  background-color: #003880;
}

/* Disabled state */
button:disabled {
  background-color: #94a3b8;
  cursor: not-allowed;
}`,
      caption: 'Example CSS for the Accessible Interaction States pattern',
    },
  ],

  anatomyExplanation: `<p>In this example, each state transition is purposeful: <em>hover</em> provides feedback, <em>focus</em> ensures accessibility, <em>active</em> shows responsiveness, and <em>disabled</em> communicates unavailability.</p>`,
}

export const topic: Topic = {
  id: 'accessible-interaction-states',
  title: 'Accessible Interaction States',
  patternIntro,
  challenges: [accessibleButtonFocus, accessibleInputFocus, accessibleLinkFocus, accessibleCheckboxFocus, accessibleRadioFocus, accessibleKeyboardFocus, accessibleTabFocus, accessibleIconButtonFocus, accessibleCardFocusShadow, accessibleToggleFocus, accessibleMultiButtonGroupFocus, accessibleCardGridFocusOutline, accessibleCustomRadioGroupFocus, accessibleMenuButtonKeyboardFocus, accessibleListboxFocusActiveStates],
}
