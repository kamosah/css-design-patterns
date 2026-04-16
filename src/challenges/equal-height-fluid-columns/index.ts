import type { Topic } from '../../types/challenge'
import { challenge as flexEqualHeightColumns } from './flex-equal-height-columns/meta'
import { challenge as tableDisplayEqualHeight } from './table-display-equal-height/meta'
import { challenge as gridAlignItemsStretch } from './grid-align-items-stretch/meta'
import { challenge as columnsFluidLayout } from './columns-fluid-layout/meta'
import { challenge as flexWrapFluidColumns } from './flex-wrap-fluid-columns/meta'
import { challenge as fluidGridColumnsAutoFit } from './fluid-grid-columns-auto-fit/meta'
import { challenge as containerQueryFluidColumns } from './container-query-fluid-columns/meta'
import { challenge as responsiveFlexboxVariableColumns } from './responsive-flexbox-variable-columns/meta'
import { challenge as balancedMultiColumnContent } from './balanced-multi-column-content/meta'
import { challenge as customPropertyControlledColumnLayout } from './custom-property-controlled-column-layout/meta'
import { challenge as masonryStyleGridEqualColumnWidths } from './masonry-style-grid-equal-column-widths/meta'
import { challenge as equalHeightSubgridLayout } from './equal-height-subgrid-layout/meta'
import { challenge as horizontallyScrollableEqualHeightCards } from './horizontally-scrollable-equal-height-cards/meta'
import { challenge as legacyFallbackEqualHeightColumnsIe11 } from './legacy-fallback-equal-height-columns-ie11/meta'

export const topic: Topic = {
  id: 'equal-height-fluid-columns',
  title: 'Equal Height & Fluid Columns',
  challenges: [flexEqualHeightColumns, tableDisplayEqualHeight, gridAlignItemsStretch, columnsFluidLayout, flexWrapFluidColumns, fluidGridColumnsAutoFit, containerQueryFluidColumns, responsiveFlexboxVariableColumns, balancedMultiColumnContent, customPropertyControlledColumnLayout, masonryStyleGridEqualColumnWidths, equalHeightSubgridLayout, horizontallyScrollableEqualHeightCards, legacyFallbackEqualHeightColumnsIe11],
}
