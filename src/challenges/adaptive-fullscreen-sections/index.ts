import type { Topic } from '../../types/challenge'
import { challenge as simpleAdaptiveFullscreenHero } from './simple-adaptive-fullscreen-hero/meta'
import { challenge as fullscreenSectionBackgroundColor } from './fullscreen-section-background-color/meta'
import { challenge as fullscreenSectionImageBackground } from './fullscreen-section-image-background/meta'
import { challenge as adaptiveFullscreenMobileSafeHeight } from './adaptive-fullscreen-mobile-safe-height/meta'

export const topic: Topic = {
  id: 'adaptive-fullscreen-sections',
  title: 'Adaptive Fullscreen Sections',
  challenges: [simpleAdaptiveFullscreenHero, fullscreenSectionBackgroundColor, fullscreenSectionImageBackground, adaptiveFullscreenMobileSafeHeight],
}
