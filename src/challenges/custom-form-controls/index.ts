import type { Topic } from '../../types/challenge'
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

export const topic: Topic = {
  id: 'custom-form-controls',
  title: 'Custom Form Controls',
  challenges: [customRadioButton, customFileUpload, customToggleSwitch, customRangeSlider, customSelectDropdown, segmentedControlToggle, floatingLabelInput, customSearchInput, customColorPicker, threeStateCheckbox, floatingLabelValidation],
}
