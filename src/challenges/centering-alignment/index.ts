import type { Topic } from '../../types/challenge'
import { challenge as horizontalCentering } from './horizontal-centering-margin-auto/meta'
import { challenge as verticalCentering } from './vertical-centering-flexbox/meta'
import { challenge as fullCentering } from './full-centering-flexbox/meta'

export const topic: Topic = {
  id: 'centering-alignment',
  title: 'Centering & Alignment',
  challenges: [horizontalCentering, verticalCentering, fullCentering],
}
