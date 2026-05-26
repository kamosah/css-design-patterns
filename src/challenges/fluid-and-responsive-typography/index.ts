import type { Topic } from '../../types/challenge'
import { challenge as fluidHeadingResize } from './fluid-heading-resize/meta'
import { challenge as fluidParagraphText } from './fluid-paragraph-text/meta'
import { challenge as fluidButtonLabel } from './fluid-button-label/meta'
import { challenge as fluidCaptionText } from './fluid-caption-text/meta'
import { challenge as fluidNavigationLinkText } from './fluid-navigation-link-text/meta'
import { challenge as fluidModularScale } from './fluid-modular-scale/meta'

export const topic: Topic = {
  id: 'fluid-and-responsive-typography',
  title: 'Fluid and Responsive Typography',
  challenges: [fluidHeadingResize, fluidParagraphText, fluidButtonLabel, fluidCaptionText, fluidNavigationLinkText, fluidModularScale],
}
