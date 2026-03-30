import type { Topic } from '../../types/challenge'
import { challenge as mobileNavToggle } from './mobile-nav-toggle/meta'
import { challenge as promotionalBannerVisibility } from './promotional-banner-visibility/meta'
import { challenge as blogSidebarVisibility } from './blog-sidebar-visibility/meta'
import { challenge as mobileContactButtonVisibility } from './mobile-contact-button-visibility/meta'
import { challenge as footerSocialIconsVisibility } from './footer-social-icons-visibility/meta'

export const topic: Topic = {
  id: 'responsive-visibility',
  title: 'Responsive Visibility',
  challenges: [mobileNavToggle, promotionalBannerVisibility, blogSidebarVisibility, mobileContactButtonVisibility, footerSocialIconsVisibility],
}
