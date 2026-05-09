import type { Topic } from '../../types/challenge'
import { challenge as adaptiveCard } from './adaptive-card/meta'
import { challenge as adaptiveProfileCard } from './adaptive-profile-card/meta'
import { challenge as dashboardWidgetLayout } from './dashboard-widget-layout/meta'
import { challenge as featureGridContainerQueries } from './feature-grid-container-queries/meta'
import { challenge as fluidButtonWidth } from './fluid-button-width/meta'
import { challenge as fluidImageResizer } from './fluid-image-resizer/meta'
import { challenge as minMaxResponsiveGridGallery } from './min-max-responsive-grid-gallery/meta'
import { challenge as responsiveVideoEmbed } from './responsive-video-embed/meta'
import { challenge as squareBoxFiller } from './square-box-filler/meta'
import { challenge as threePanelResponsiveLayout } from './three-panel-responsive-layout/meta'

export const topic: Topic = {
  id: 'intrinsic-and-container-based-sizing',
  title: 'Intrinsic and Container Based Sizing',
  challenges: [
    fluidImageResizer,
    squareBoxFiller,
    responsiveVideoEmbed,
    fluidButtonWidth,
    minMaxResponsiveGridGallery,
    threePanelResponsiveLayout,
    adaptiveCard,
    featureGridContainerQueries,
    adaptiveProfileCard,
    dashboardWidgetLayout,
  ],
}
