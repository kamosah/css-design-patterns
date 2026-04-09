import type { Topic } from '../../types/challenge'
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

export const topic: Topic = {
  id: 'accessible-interaction-states',
  title: 'Accessible Interaction States',
  challenges: [accessibleButtonFocus, accessibleInputFocus, accessibleLinkFocus, accessibleCheckboxFocus, accessibleRadioFocus, accessibleKeyboardFocus, accessibleTabFocus, accessibleIconButtonFocus, accessibleCardFocusShadow, accessibleToggleFocus, accessibleMultiButtonGroupFocus],
}
