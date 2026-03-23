import type { Topic } from '../../types/challenge'
import { challenge as customRadioButton } from './custom-radio-button/meta'
import { challenge as customFileUpload } from './custom-file-upload/meta'
import { challenge as customToggleSwitch } from './custom-toggle-switch/meta'
import { challenge as customRangeSlider } from './custom-range-slider/meta'
import { challenge as customSelectDropdown } from './custom-select-dropdown/meta'
import { challenge as segmentedControlToggle } from './segmented-control-toggle/meta'

export const topic: Topic = {
  id: 'custom-form-controls',
  title: 'Custom Form Controls',
  challenges: [customRadioButton, customFileUpload, customToggleSwitch, customRangeSlider, customSelectDropdown, segmentedControlToggle],
}
