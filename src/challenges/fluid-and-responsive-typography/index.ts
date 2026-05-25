import type { Topic } from '../../types/challenge'
import { challenge as fluidHeadingResize } from './fluid-heading-resize/meta'
import { challenge as fluidParagraphText } from './fluid-paragraph-text/meta'
import { challenge as fluidButtonLabel } from './fluid-button-label/meta'

export const topic: Topic = {
  id: 'fluid-and-responsive-typography',
  title: 'Fluid and Responsive Typography',
  challenges: [fluidHeadingResize, fluidParagraphText, fluidButtonLabel],
}
