import type { Topic } from '../../types/challenge'
import { challenge as hoverZoomImage } from './hover-zoom-image/meta'
import { challenge as fadeInNotificationBanner } from './fade-in-notification-banner/meta'
import { challenge as rotatingLoadingSpinner } from './rotating-loading-spinner/meta'
import { challenge as pulsatingCtaButton } from './pulsating-cta-button/meta'
import { challenge as animatedGradientBackground } from './animated-gradient-background/meta'
import { challenge as slideInSidebarPanel } from './slide-in-sidebar-panel/meta'
import { challenge as staggeredFadeInListItems } from './staggered-fade-in-list-items/meta'
import { challenge as shimmerLoadingPlaceholder } from './shimmer-loading-placeholder/meta'

export const topic: Topic = {
  id: 'animated-visual-effects',
  title: 'Animated Visual Effects',
  challenges: [hoverZoomImage, fadeInNotificationBanner, rotatingLoadingSpinner, pulsatingCtaButton, animatedGradientBackground, slideInSidebarPanel, staggeredFadeInListItems, shimmerLoadingPlaceholder],
}
