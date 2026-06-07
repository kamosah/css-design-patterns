import type { Topic, PatternIntroduction } from '../../types/challenge'
import { challenge as mobileNavToggle } from './mobile-nav-toggle/meta'
import { challenge as promotionalBannerVisibility } from './promotional-banner-visibility/meta'
import { challenge as blogSidebarVisibility } from './blog-sidebar-visibility/meta'
import { challenge as mobileContactButtonVisibility } from './mobile-contact-button-visibility/meta'
import { challenge as footerSocialIconsVisibility } from './footer-social-icons-visibility/meta'
import { challenge as responsiveArticleGridSidebarToggle } from './responsive-article-grid-sidebar-toggle/meta'
import { challenge as responsiveTestimonialCarouselGridVisibility } from './responsive-testimonial-carousel-grid-visibility/meta'
import { challenge as notificationBannerSidebarToggle } from './notification-banner-sidebar-toggle/meta'
import { challenge as adaptiveDashboardWidgetFilterPanelVisibility } from './adaptive-dashboard-widget-filter-panel-visibility/meta'

const patternIntro: PatternIntroduction = {
  tagline: "Explore the Responsive Visibility pattern and understand why it's important.",

  overview: `<p>The <strong>Responsive Visibility</strong> pattern allows us to control which elements appear or disappear at specific screen sizes or contexts. This is essential for tailoring interfaces to different devices, conserving space, and reducing visual clutter. Whether it's hiding a navigation bar on mobile or showing mobile-only actions, this pattern improves clarity and relevance across screen sizes.</p>`,

  howItWorks: `<p>This pattern relies on media queries combined with CSS <code>display</code>, <code>visibility</code>, or <code>opacity</code> properties to conditionally show or hide elements. We define utility classes or component-specific styles that activate or deactivate based on viewport width breakpoints. This ensures content is present in the DOM (and often still accessible), but only visible when appropriate.</p>`,

  previewHtml: `<header class="site-header">
  <div class="logo">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#4f46e5"/>
      <path d="M7 8h10M7 12h7M7 16h10" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/>
    </svg>
    <span class="logo-text">CSS Lab</span>
  </div>
  <nav class="desktop-nav">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Contact</a>
  </nav>
  <button class="mobile-menu">☰</button>
</header>`,

  previewCss: `* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: system-ui, sans-serif; background: #ffffff; }
.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid #e2e8f0;
}
.logo {
  display: flex;
  align-items: center;
  gap: 8px;
}
.logo-text {
  font-size: 16px;
  font-weight: 700;
  color: #0f172a;
}
.desktop-nav {
  display: flex;
  gap: 28px;
}
.desktop-nav a {
  font-size: 14px;
  color: #475569;
  text-decoration: none;
}
.desktop-nav a:hover { color: #0f172a; }
.mobile-menu {
  display: none;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #475569;
}
@media (max-width: 480px) {
  .desktop-nav { display: none; }
  .mobile-menu { display: block; }
}`,

  previewCaption: 'Responsive header that adapts navigation based on screen size',

  anatomyBlocks: [
    {
      label: 'A basic implementation might look like this:',
      css: `/* mobile-only: visible on small screens */
.mobile-only {
  display: block;
}

@media (min-width: 768px) {
  .mobile-only {
    display: none;
  }
}

/* desktop-only: visible on wider screens */
.desktop-only {
  display: none;
}

@media (min-width: 768px) {
  .desktop-only {
    display: block;
  }
}`,
      caption: 'Example CSS for the Responsive Visibility pattern',
    },
  ],

  anatomyExplanation: `<p>This approach toggles visibility at a common breakpoint (<code>768px</code>), but the classes can be extended for any responsive range.</p>`,
}

export const topic: Topic = {
  id: 'responsive-visibility',
  title: 'Responsive Visibility',
  patternIntro,
  challenges: [mobileNavToggle, promotionalBannerVisibility, blogSidebarVisibility, mobileContactButtonVisibility, footerSocialIconsVisibility, responsiveArticleGridSidebarToggle, responsiveTestimonialCarouselGridVisibility, notificationBannerSidebarToggle, adaptiveDashboardWidgetFilterPanelVisibility],
}
