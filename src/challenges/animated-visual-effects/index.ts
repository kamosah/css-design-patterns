import type { Topic } from '../../types/challenge'
import { challenge as hoverZoomImage } from './hover-zoom-image/meta'
import { challenge as fadeInNotificationBanner } from './fade-in-notification-banner/meta'
import { challenge as rotatingLoadingSpinner } from './rotating-loading-spinner/meta'
import { challenge as pulsatingCtaButton } from './pulsating-cta-button/meta'

export const topic: Topic = {
  id: 'animated-visual-effects',
  title: 'Animated Visual Effects',
  challenges: [hoverZoomImage, fadeInNotificationBanner, rotatingLoadingSpinner, pulsatingCtaButton],
}
