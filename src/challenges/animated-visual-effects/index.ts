import type { Topic, PatternIntroduction } from '../../types/challenge'
import { challenge as hoverZoomImage } from './hover-zoom-image/meta'
import { challenge as fadeInNotificationBanner } from './fade-in-notification-banner/meta'
import { challenge as rotatingLoadingSpinner } from './rotating-loading-spinner/meta'
import { challenge as pulsatingCtaButton } from './pulsating-cta-button/meta'
import { challenge as animatedGradientBackground } from './animated-gradient-background/meta'
import { challenge as slideInSidebarPanel } from './slide-in-sidebar-panel/meta'
import { challenge as staggeredFadeInListItems } from './staggered-fade-in-list-items/meta'
import { challenge as circularPageRevealTransition } from './circular-page-reveal-transition/meta'
import { challenge as shimmerLoadingPlaceholder } from './shimmer-loading-placeholder/meta'
import { challenge as bouncingBallAnimation } from './bouncing-ball-animation/meta'
import { challenge as flipCardEffect } from './3d-flip-card-effect/meta'
import { challenge as morphingBlobBackground } from './morphing-blob-background/meta'
import { challenge as liquidButtonMorphEffect } from './liquid-button-morph-effect/meta'
import { challenge as glitchTextAnimation } from './glitch-text-animation/meta'
import { challenge as rotatingImageCarousel } from './3d-rotating-image-carousel/meta'

const patternIntro: PatternIntroduction = {
  tagline: 'Explore the Animated Visual Effects pattern and understand why it\'s important.',

  overview: `<p>The <strong>Animated Visual Effects</strong> pattern introduces a sense of liveliness and interactivity into user interfaces. Motion can guide the user's attention, indicate changes, create feedback, and enhance the emotional feel of an application. By animating transitions, hover states, background gradients, or element appearance, interfaces feel smoother, more responsive, and more engaging.</p>`,

  howItWorks: `<p>This pattern uses CSS properties such as <code>transition</code>, <code>animation</code>, and <code>transform</code> to apply motion. Transitions allow properties to smoothly interpolate over time in response to user interactions (like hover or focus), while keyframe animations enable more complex sequences, such as fades, rotations, or background shifts. Properties such as <code>opacity</code>, <code>transform</code>, and <code>background-position</code> are commonly animated to improve performance and visual impact.</p>`,

  previewHtml: `<div class="stage">
  <h1 class="glitch" data-text="Glitch Text">Glitch Text</h1>
</div>`,

  previewCss: `* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: #000; display: flex; align-items: center; justify-content: center; height: 100vh; }
.glitch {
  font-family: monospace;
  font-size: 3rem;
  font-weight: 900;
  color: #fff;
  position: relative;
  animation: glitch 2s infinite;
}
.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
}
.glitch::before {
  color: #0ff;
  animation: glitch-top 2s infinite;
  clip-path: polygon(0 0, 100% 0, 100% 40%, 0 40%);
}
.glitch::after {
  color: #f0f;
  animation: glitch-bottom 2s infinite;
  clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
}
@keyframes glitch { 0%, 100% { transform: none; } 20% { transform: skewX(-2deg); } 40% { transform: skewX(1deg); } }
@keyframes glitch-top { 0%, 100% { transform: none; } 20% { transform: translate(-3px, -2px); } 40% { transform: translate(3px, 2px); } }
@keyframes glitch-bottom { 0%, 100% { transform: none; } 20% { transform: translate(3px, 2px); } 40% { transform: translate(-3px, -2px); } }`,

  previewCaption: 'Glitch text animation',

  anatomyBlocks: [
    {
      label: 'Using this pattern, we can add a fade-in animation to our CSS elements.',
      css: `.fade-in {
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
}

@keyframes fadeIn {
  to { opacity: 1; }
}`,
      caption: 'A typical setup for a fade-in animation might look like this',
    },
    {
      label: 'We can also apply animated gradients through our CSS.',
      css: `.animated-gradient {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradientShift 10s ease infinite;
}

@keyframes gradientShift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,
      caption: 'Sample CSS for animated gradients',
    },
  ],

  anatomyExplanation: `<p>The snippets above show how classes define the animation behavior and how <code>@keyframes</code> declare the progression. The <code>forwards</code> fill mode on the fade-in keeps the element visible after the animation completes. The gradient animation shifts <code>background-position</code> on an oversized background to create the color-cycling effect without repainting the gradient itself.</p>`,
}

export const topic: Topic = {
  id: 'animated-visual-effects',
  title: 'Animated Visual Effects',
  challenges: [hoverZoomImage, fadeInNotificationBanner, rotatingLoadingSpinner, pulsatingCtaButton, animatedGradientBackground, slideInSidebarPanel, staggeredFadeInListItems, circularPageRevealTransition, shimmerLoadingPlaceholder, bouncingBallAnimation, flipCardEffect, morphingBlobBackground, liquidButtonMorphEffect, glitchTextAnimation, rotatingImageCarousel],
  patternIntro,
}
