import type { Meta, StoryObj } from '@storybook/react'
import { ResponsiveNav, type NavLink } from './ResponsiveNav'

const LINKS: NavLink[] = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Contact', href: '#' },
]

const meta: Meta<typeof ResponsiveNav> = {
  title: 'Components/ResponsiveNav',
  component: ResponsiveNav,
  parameters: {
    docs: {
      description: {
        component: `
**Patterns:** \`@media\` visibility toggle · \`display: none\` base layer · \`flex\` horizontal list · component tokens

Two sibling \`<nav>\` elements are both hidden by default via \`display: none\`.
A \`max-width: 767px\` query reveals the mobile nav (vertical list) and a \`min-width: 768px\`
query reveals the desktop nav (horizontal flex row). Non-overlapping ranges guarantee
exactly one nav is visible at any viewport width — no JavaScript required.
        `.trim(),
      },
    },
    viewport: { defaultViewport: 'mobile1' },
  },
  args: { links: LINKS },
}

export default meta
type Story = StoryObj<typeof ResponsiveNav>

export const MobileView: Story = {
  name: 'Mobile View (< 768px)',
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story:
          'At viewports below 768px the mobile nav is shown — a vertical list of links. Resize the viewport to see the switch.',
      },
    },
  },
}

export const DesktopView: Story = {
  name: 'Desktop View (≥ 768px)',
  parameters: {
    viewport: { defaultViewport: 'desktop' },
    docs: {
      description: {
        story:
          'At 768px and wider the desktop nav is shown — links in a horizontal flex row. The mobile nav is hidden.',
      },
    },
  },
}

export const TokenOverride: Story = {
  name: 'Token Override',
  args: {
    style: {
      '--nav-bg-mobile': '#1e1b4b',
      '--nav-bg-desktop': '#1e1b4b',
      '--nav-link-color': '#e0e7ff',
      '--nav-gap': '2.5rem',
    },
  },
  parameters: {
    viewport: { defaultViewport: 'desktop' },
    docs: {
      description: {
        story:
          'Override `--nav-bg-mobile`, `--nav-bg-desktop`, `--nav-link-color`, and `--nav-gap` inline — no CSS edits needed.',
      },
    },
  },
}
