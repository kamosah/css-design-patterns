import type { Topic } from '../../types/challenge'
import { challenge as simpleAdaptiveFullscreenHero } from './simple-adaptive-fullscreen-hero/meta'
import { challenge as fullscreenSectionBackgroundColor } from './fullscreen-section-background-color/meta'
import { challenge as fullscreenSectionImageBackground } from './fullscreen-section-image-background/meta'
import { challenge as adaptiveFullscreenMobileSafeHeight } from './adaptive-fullscreen-mobile-safe-height/meta'
import { challenge as fullscreenSectionResponsivePadding } from './fullscreen-section-responsive-padding/meta'
import { challenge as fullscreenSectionScrollIndicator } from './fullscreen-section-scroll-indicator/meta'
import { challenge as fullscreenSectionCenteredLogo } from './fullscreen-section-centered-logo/meta'
import { challenge as fullscreenSectionMaxWidthContent } from './fullscreen-section-max-width-content/meta'
import { challenge as fullscreenSectionGradientOverlay } from './fullscreen-section-gradient-overlay/meta'
import { challenge as fullscreenSectionSplitLayout } from './fullscreen-section-split-layout/meta'
import { challenge as fullscreenSectionClampedSubheading } from './fullscreen-section-clamped-subheading/meta'
import { challenge as fullscreenSectionImageContentOverlay } from './fullscreen-section-image-content-overlay/meta'

export const topic: Topic = {
  id: 'adaptive-fullscreen-sections',
  title: 'Adaptive Fullscreen Sections',
  challenges: [simpleAdaptiveFullscreenHero, fullscreenSectionBackgroundColor, fullscreenSectionImageBackground, adaptiveFullscreenMobileSafeHeight, fullscreenSectionResponsivePadding, fullscreenSectionScrollIndicator, fullscreenSectionCenteredLogo, fullscreenSectionMaxWidthContent, fullscreenSectionGradientOverlay, fullscreenSectionClampedSubheading, fullscreenSectionSplitLayout, fullscreenSectionImageContentOverlay],
}
