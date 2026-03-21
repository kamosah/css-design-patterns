import type { Topic } from '../../types/challenge'
import { challenge as customRadioButton } from './custom-radio-button/meta'
import { challenge as customFileUpload } from './custom-file-upload/meta'

export const topic: Topic = {
  id: 'custom-form-controls',
  title: 'Custom Form Controls',
  challenges: [customRadioButton, customFileUpload],
}
