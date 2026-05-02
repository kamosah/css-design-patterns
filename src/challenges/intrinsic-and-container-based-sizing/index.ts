import type { Topic } from '../../types/challenge'
import { challenge as fluidImageResizer } from './fluid-image-resizer/meta'

export const topic: Topic = {
  id: 'intrinsic-and-container-based-sizing',
  title: 'Intrinsic and Container Based Sizing',
  challenges: [fluidImageResizer],
}
