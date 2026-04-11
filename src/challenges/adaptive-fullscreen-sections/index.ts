import type { Topic } from '../../types/challenge'
import { challenge as simpleAdaptiveFullscreenHero } from './simple-adaptive-fullscreen-hero/meta'
import { challenge as fullscreenSectionBackgroundColor } from './fullscreen-section-background-color/meta'
import { challenge as fullscreenSectionImageBackground } from './fullscreen-section-image-background/meta'

export const topic: Topic = {
  id: 'adaptive-fullscreen-sections',
  title: 'Adaptive Fullscreen Sections',
  challenges: [simpleAdaptiveFullscreenHero, fullscreenSectionBackgroundColor, fullscreenSectionImageBackground],
}
