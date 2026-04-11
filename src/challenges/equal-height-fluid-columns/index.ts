import type { Topic } from '../../types/challenge'
import { challenge as flexEqualHeightColumns } from './flex-equal-height-columns/meta'
import { challenge as tableDisplayEqualHeight } from './table-display-equal-height/meta'
import { challenge as gridAlignItemsStretch } from './grid-align-items-stretch/meta'

export const topic: Topic = {
  id: 'equal-height-fluid-columns',
  title: 'Equal Height & Fluid Columns',
  challenges: [flexEqualHeightColumns, tableDisplayEqualHeight, gridAlignItemsStretch],
}
