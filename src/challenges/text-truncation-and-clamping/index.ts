import type { Topic } from '../../types/challenge'
import { challenge as singleLineTextTruncation } from './single-line-text-truncation/meta'
import { challenge as multiLineTextClamping } from './multi-line-text-clamping/meta'
import { challenge as responsiveTextTruncationGrid } from './responsive-text-truncation-grid/meta'
import { challenge as accessibleTextTruncationTooltip } from './accessible-text-truncation-tooltip/meta'
import { challenge as textClampingCardPreviews } from './text-clamping-card-previews/meta'
import { challenge as multiLineEllipsisResponsiveBlogLayout } from './multi-line-ellipsis-responsive-blog-layout/meta'
import { challenge as textTruncationFlexboxLayout } from './text-truncation-flexbox-layout/meta'
import { challenge as truncateTextDropdownOptionList } from './truncate-text-dropdown-option-list/meta'
import { challenge as clampTextReadMoreButton } from './clamp-text-read-more-button/meta'
import { challenge as tableCellTextTruncation } from './table-cell-text-truncation/meta'
import { challenge as lineClampHoverToExpand } from './line-clamp-hover-to-expand/meta'
import { challenge as multiLineClampDynamicallySizedCards } from './multi-line-clamp-dynamically-sized-cards/meta'
import { challenge as textClampNestedFlexboxLayout } from './text-clamp-nested-flexbox-layout/meta'
import { challenge as textClampingBidirectionalRtlLtr } from './text-clamping-bidirectional-rtl-ltr/meta'

export const topic: Topic = {
  id: 'text-truncation-and-clamping',
  title: 'Text Truncation and Clamping',
  challenges: [singleLineTextTruncation, multiLineTextClamping, responsiveTextTruncationGrid, accessibleTextTruncationTooltip, textClampingCardPreviews, multiLineEllipsisResponsiveBlogLayout, textTruncationFlexboxLayout, truncateTextDropdownOptionList, clampTextReadMoreButton, tableCellTextTruncation, lineClampHoverToExpand, multiLineClampDynamicallySizedCards, textClampNestedFlexboxLayout, textClampingBidirectionalRtlLtr],
}
