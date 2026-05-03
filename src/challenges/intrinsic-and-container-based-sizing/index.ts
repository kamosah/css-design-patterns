import type { Topic } from '../../types/challenge'
import { challenge as fluidImageResizer } from './fluid-image-resizer/meta'
import { challenge as squareBoxFiller } from './square-box-filler/meta'

export const topic: Topic = {
  id: 'intrinsic-and-container-based-sizing',
  title: 'Intrinsic and Container Based Sizing',
  challenges: [fluidImageResizer, squareBoxFiller],
}
