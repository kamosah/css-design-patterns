import type { Topic } from '../../types/challenge'
import { challenge as singleLineTextTruncation } from './single-line-text-truncation/meta'
import { challenge as multiLineTextClamping } from './multi-line-text-clamping/meta'
import { challenge as responsiveTextTruncationGrid } from './responsive-text-truncation-grid/meta'
import { challenge as accessibleTextTruncationTooltip } from './accessible-text-truncation-tooltip/meta'
import { challenge as textClampingCardPreviews } from './text-clamping-card-previews/meta'
import { challenge as multiLineEllipsisResponsiveBlogLayout } from './multi-line-ellipsis-responsive-blog-layout/meta'
import { challenge as textTruncationFlexboxLayout } from './text-truncation-flexbox-layout/meta'

export const topic: Topic = {
  id: 'text-truncation-and-clamping',
  title: 'Text Truncation and Clamping',
  challenges: [singleLineTextTruncation, multiLineTextClamping, responsiveTextTruncationGrid, accessibleTextTruncationTooltip, textClampingCardPreviews, multiLineEllipsisResponsiveBlogLayout, textTruncationFlexboxLayout],
}
