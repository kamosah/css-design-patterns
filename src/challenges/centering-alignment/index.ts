import type { Topic } from '../../types/challenge'
import { challenge as horizontalCentering } from './horizontal-centering-margin-auto/meta'
import { challenge as inlineBlockGroupCentering } from './inline-block-group-centering/meta'
import { challenge as verticalCentering } from './vertical-centering-flexbox/meta'
import { challenge as fullCentering } from './full-centering-flexbox/meta'
import { challenge as baselineAlignmentImageText } from './baseline-alignment-image-text/meta'
import { challenge as mediaObjectAlignment } from './media-object-alignment/meta'

export const topic: Topic = {
  id: 'centering-alignment',
  title: 'Centering & Alignment',
  challenges: [horizontalCentering, inlineBlockGroupCentering, verticalCentering, fullCentering, baselineAlignmentImageText, mediaObjectAlignment],
}
