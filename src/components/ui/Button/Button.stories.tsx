import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `
**Patterns:** polymorphic \`as\` prop · \`data-variant\` + \`data-size\` · component tokens · \`:focus-visible\` · logical properties

The Button renders as any element (\`<button>\`, \`<a>\`, \`<div>\`) via the \`as\` prop while keeping
fully typed props. All color and spacing is driven by CSS custom properties — override any of them
via \`style={{ '--btn-radius': '0' }}\` without touching the stylesheet.
        `.trim(),
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger', 'warning'],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    shimmer: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: { children: 'Save changes', variant: 'primary' },
}

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="warning">Warning</Button>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button>Default</Button>
      <Button loading>Loading</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
}

export const PolymorphicLink: Story = {
  name: 'Polymorphic as="a"',
  render: () => (
    <Button as="a" href="#" variant="secondary">
      Link that looks like a button
    </Button>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pass `as="a"` to render an `<a>` element with full button styling. The `href` prop becomes type-safe.',
      },
    },
  },
}

export const Shimmer: Story = {
  name: 'Shimmer Effect',
  render: () => (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button shimmer>Primary</Button>
      <Button shimmer variant="danger">Danger</Button>
      <Button shimmer variant="warning">Warning</Button>
      <Button shimmer variant="secondary" style={{ '--btn-shimmer-color': 'rgba(0,0,0,0.08)' }}>Secondary</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Add `shimmer` to any button for the liquid overlay effect. Override `--btn-shimmer-color` for light-background variants like `secondary` or `ghost`.',
      },
    },
  },
}

export const TokenOverride: Story = {
  name: 'Component Token Override',
  render: () => (
    <div style={{ display: 'flex', gap: 10 }}>
      <Button style={{ '--btn-radius': '0px' }}>Sharp corners</Button>
      <Button style={{ '--btn-radius': '9999px' }}>Pill</Button>
      <Button style={{ '--btn-bg': '#a855f7', '--btn-color': '#fff' }}>Purple</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Override `--btn-radius`, `--btn-bg`, `--btn-color` etc. inline — no CSS file changes needed.',
      },
    },
  },
}
