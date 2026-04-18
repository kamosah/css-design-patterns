import type { Topic } from '../../types/challenge'
import { challenge as hoverZoomImage } from './hover-zoom-image/meta'
import { challenge as fadeInNotificationBanner } from './fade-in-notification-banner/meta'

export const topic: Topic = {
  id: 'animated-visual-effects',
  title: 'Animated Visual Effects',
  challenges: [hoverZoomImage, fadeInNotificationBanner],
}
