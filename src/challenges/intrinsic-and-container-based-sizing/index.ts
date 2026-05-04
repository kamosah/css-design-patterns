import type { Topic } from '../../types/challenge'
import { challenge as fluidButtonWidth } from './fluid-button-width/meta'
import { challenge as fluidImageResizer } from './fluid-image-resizer/meta'
import { challenge as responsiveVideoEmbed } from './responsive-video-embed/meta'
import { challenge as squareBoxFiller } from './square-box-filler/meta'

export const topic: Topic = {
  id: 'intrinsic-and-container-based-sizing',
  title: 'Intrinsic and Container Based Sizing',
  challenges: [fluidImageResizer, squareBoxFiller, responsiveVideoEmbed, fluidButtonWidth],
}
