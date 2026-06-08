import type { Topic, PatternIntroduction } from '../../types/challenge'
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
import { challenge as fullscreenSectionContentAlignment } from './fullscreen-section-content-alignment/meta'
import { challenge as fullscreenSectionCssOnlyCarousel } from './fullscreen-section-css-only-carousel/meta'

const patternIntro: PatternIntroduction = {
  tagline: "Explore the Adaptive Fullscreen Sections pattern and understand why it's important.",

  overview: `<p>Fullscreen sections are a common design pattern in modern web layouts—used for hero banners, intros, modals, or immersive slides. However, implementing them consistently across devices, especially on mobile, requires adjustments due to viewport quirks. The <strong>Adaptive Fullscreen Sections</strong> pattern is all about creating page sections that always fill the viewport while gracefully adapting to different screen sizes, orientations, and content lengths.</p>`,

  howItWorks: `<p>This pattern uses viewport units (e.g., <code>100vh</code>) to size elements relative to the browser window, along with JavaScript or CSS variables to correct for inconsistencies on mobile devices. For example, setting <code>height: 100vh</code> can fail on mobile Safari due to the address bar, so an adjusted value using custom properties (like <code>--vh</code>) ensures the layout truly fills the visible space.</p>`,

  previewHtml: `<section class="banner">
  <h1>Banner</h1>
</section>`,

  previewCss: `* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: system-ui, sans-serif; }
.banner {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e8eaf6;
  background-image: url('https://ui-avatars.com/api/?name=U&size=80&background=c5cae9&color=9fa8da&rounded=true&bold=false&format=svg');
  background-repeat: repeat;
  background-size: 100px 100px;
}
h1 {
  font-size: 2rem;
  font-weight: 800;
  color: #1e1b4b;
  letter-spacing: -0.01em;
}`,

  previewCaption: 'A banner that contains an image as a background',

  anatomyBlocks: [
    {
      label: 'Below are the CSS examples for this pattern.',
      css: `.fullscreen-section {
  height: calc(var(--vh, 1vh) * 100); /* Fallback if --vh is not set */
}`,
      caption: 'CSS setup with a dynamic height variable',
    },
  ],

  anatomyExplanation: `<p>And an accompanying JavaScript snippet sets the <code>--vh</code> variable to match the true visible viewport on every resize:</p>
<pre><code>window.addEventListener('resize', () => {
  document.documentElement.style.setProperty('--vh', \`\${window.innerHeight * 0.01}px\`);
});

// Call on load as well
window.dispatchEvent(new Event('resize'));</code></pre>
<p>This combination dynamically adjusts the section height based on the true inner viewport height, avoiding the mobile browser chrome problem that breaks plain <code>100vh</code> layouts.</p>`,
}

export const topic: Topic = {
  id: 'adaptive-fullscreen-sections',
  title: 'Adaptive Fullscreen Sections',
  patternIntro,
  challenges: [simpleAdaptiveFullscreenHero, fullscreenSectionBackgroundColor, fullscreenSectionImageBackground, adaptiveFullscreenMobileSafeHeight, fullscreenSectionResponsivePadding, fullscreenSectionScrollIndicator, fullscreenSectionCenteredLogo, fullscreenSectionMaxWidthContent, fullscreenSectionGradientOverlay, fullscreenSectionClampedSubheading, fullscreenSectionSplitLayout, fullscreenSectionImageContentOverlay, fullscreenSectionContentAlignment, fullscreenSectionCssOnlyCarousel],
}
