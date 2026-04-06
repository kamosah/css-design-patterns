import type { Topic } from '../../types/challenge'
import { challenge as accessibleButtonFocus } from './accessible-button-focus/meta'
import { challenge as accessibleInputFocus } from './accessible-input-focus/meta'
import { challenge as accessibleLinkFocus } from './accessible-link-focus/meta'

export const topic: Topic = {
  id: 'accessible-interaction-states',
  title: 'Accessible Interaction States',
  challenges: [accessibleButtonFocus, accessibleInputFocus, accessibleLinkFocus],
}
