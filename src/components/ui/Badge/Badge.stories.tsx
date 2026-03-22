import type { Meta, StoryObj } from '@storybook/react'
import type { CSSProperties } from 'react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: `
**Patterns:** \`data-variant\` · single-token \`color-mix()\` tint · inline token override

A single CSS custom property \`--badge-color\` fans out to all three derived values:
background (\`color-mix(...13%)\`), border (\`color-mix(...25%)\`), and text color.
Adding a new variant is one line: set \`--badge-color\`.
        `.trim(),
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'warning', 'danger', 'accent', 'info', 'neutral'],
    },
    size: { control: 'select', options: ['sm', 'md'] },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: { children: 'New', variant: 'accent' },
}

export const SemanticVariants: Story = {
  name: 'Semantic Variants',
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge variant="success">Easy</Badge>
      <Badge variant="warning">Medium</Badge>
      <Badge variant="danger">Hard</Badge>
      <Badge variant="accent">New</Badge>
      <Badge variant="info">Updated</Badge>
      <Badge variant="neutral">Draft</Badge>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Badge size="sm" variant="accent">Small</Badge>
      <Badge size="md" variant="accent">Medium</Badge>
    </div>
  ),
}

export const CustomColor: Story = {
  name: 'Custom Color via Token',
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Badge style={{ '--badge-color': '#a855f7' } as CSSProperties}>Purple</Badge>
      <Badge style={{ '--badge-color': '#ec4899' } as CSSProperties}>Pink</Badge>
      <Badge style={{ '--badge-color': '#14b8a6' } as CSSProperties}>Teal</Badge>
      <Badge style={{ '--badge-color': '#f97316' } as CSSProperties}>Orange</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pass `--badge-color` as an inline style to get a fully-tinted badge with no variant needed. The `color-mix()` ratios handle the rest automatically.',
      },
    },
  },
}
