import type { Topic } from '../../types/challenge'
import { challenge as horizontalCentering } from './horizontal-centering-margin-auto/meta'
import { challenge as inlineBlockGroupCentering } from './inline-block-group-centering/meta'
import { challenge as verticalCentering } from './vertical-centering-flexbox/meta'
import { challenge as fullCentering } from './full-centering-flexbox/meta'
import { challenge as fullCenteringGrid } from './full-centering-grid/meta'
import { challenge as baselineAlignmentImageText } from './baseline-alignment-image-text/meta'
import { challenge as mediaObjectAlignment } from './media-object-alignment/meta'
import { challenge as toolbarSpaceBetween } from './toolbar-space-between/meta'
import { challenge as flexboxCenteringMixedHeight } from './flexbox-centering-mixed-height/meta'
import { challenge as absolutePositionCenteringPadded } from './absolute-position-centering-padded/meta'
import { challenge as cssModalCenteringFallbacks } from './css-modal-centering-fallbacks/meta'
import { challenge as rotatedCenterTransform } from './rotated-center-transform/meta'
import { challenge as parallaxContainerCentering } from './parallax-container-centering/meta'
import { challenge as flexboxEvenSpacingCentering } from './flexbox-even-spacing-centering/meta'

export const topic: Topic = {
  id: 'centering-alignment',
  title: 'Centering & Alignment',
  challenges: [horizontalCentering, inlineBlockGroupCentering, verticalCentering, fullCentering, fullCenteringGrid, baselineAlignmentImageText, mediaObjectAlignment, toolbarSpaceBetween, flexboxCenteringMixedHeight, absolutePositionCenteringPadded, cssModalCenteringFallbacks, rotatedCenterTransform, parallaxContainerCentering, flexboxEvenSpacingCentering],
}
