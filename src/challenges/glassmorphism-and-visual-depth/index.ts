import type { Topic, PatternIntroduction } from '../../types/challenge'
import { challenge as glassCardComponent } from './glass-card-component/meta'
import { challenge as glassHeaderNavbar } from './glass-header-navbar/meta'
import { challenge as glassToggleSwitch } from './glass-toggle-switch/meta'
import { challenge as glassImageGallery } from './glass-image-gallery/meta'
import { challenge as glassFlipCard } from './glass-flip-card/meta'
import { challenge as glassAccordionPanel } from './glass-accordion-panel/meta'
import { challenge as glass3dCarousel } from './glass-3d-carousel/meta'
import { challenge as glassResponsiveDashboardCards } from './glass-responsive-dashboard-cards/meta'
import { challenge as glassTabbedInterface } from './glass-tabbed-interface/meta'
import { challenge as glassMegaDropdownMenu } from './glass-mega-dropdown-menu/meta'

const patternIntro: PatternIntroduction = {
  tagline: "Explore the Glassmorphism and Visual Depth pattern and understand why it's important.",

  overview: `<p>The <strong>Glassmorphism and Visual Depth</strong> can be used to create the illusion of depth and layering through translucency, frosted-glass blurs, and subtle shadows. It helps separate foreground content from background elements while maintaining visual cohesion. Inspired by modern OS interfaces, it brings a sleek, polished look that feels modern and tactile.</p>`,

  howItWorks: `<p>This pattern uses semi-transparent backgrounds (via <code>rgba</code> or <code>hsla</code> values), backdrop blurs, and soft borders to emulate a frosted glass effect. The combination of <code>background: rgba(...)</code>, <code>backdrop-filter: blur(...)</code>, and subtle shadows or border highlights gives UI elements a sense of translucency and spatial separation. Layering background content (like gradients or images) behind these panels enhances the glass effect.</p>`,

  previewHtml: `<div class="scene">
  <div class="card">
    <div class="face front">Front Side</div>
    <div class="face back">Back Side</div>
  </div>
</div>`,

  previewCss: `* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #ffffff;
}
.scene {
  perspective: 800px;
}
.card {
  width: 220px;
  height: 180px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.7s ease;
  cursor: pointer;
}
.scene:hover .card {
  transform: rotateY(180deg);
}
.face {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: system-ui, sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: #0f172a;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  backface-visibility: hidden;
}
.back {
  transform: rotateY(180deg);
}`,

  previewCaption: 'A glass card that flips upon hover',

  anatomyBlocks: [
    {
      label: 'A typical implementation of a glass-like panel might look like:',
      css: `.glass {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}`,
      caption: 'Example CSS for Glassmorphism and Visual Depth pattern',
    },
  ],

  anatomyExplanation: `<p>This combination ensures the background shines through subtly while the element remains readable and distinct. The <code>backdrop-filter</code> applies blur to whatever is rendered behind the element, so placing the glass panel over a rich gradient or image is what makes the frosted effect visible. The semi-transparent <code>border</code> adds a subtle rim-light that reinforces the illusion of a physical glass surface.</p>`,
}

export const topic: Topic = {
  id: 'glassmorphism-and-visual-depth',
  title: 'Glassmorphism and Visual Depth',
  patternIntro,
  challenges: [glassCardComponent, glassHeaderNavbar, glassToggleSwitch, glassImageGallery, glassFlipCard, glassAccordionPanel, glass3dCarousel, glassResponsiveDashboardCards, glassTabbedInterface, glassMegaDropdownMenu],
}
