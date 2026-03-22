import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { Button } from '../Button/Button'
import { Badge } from '../Badge/Badge'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component: `
**Patterns:** compound components (\`Card.Header\` / \`Card.Body\` / \`Card.Footer\`) · \`@container\` queries · \`data-variant\` · \`overflow: hidden\` corner clipping

Sub-components (\`Card.Header\`, \`Card.Body\`, \`Card.Footer\`) are attached as static properties
on the \`Card\` function — no React Context needed. The card establishes a container context
(\`container-type: inline-size\`) so \`@container\` queries respond to the card's own width,
not the viewport.
        `.trim(),
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'elevated', 'flat', 'ghost'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card style={{ maxWidth: 360 }}>
      <Card.Header
        title="Project overview"
        subtitle="Last updated 2 minutes ago"
        action={<Badge variant="success">Live</Badge>}
      />
      <Card.Body>
        This card uses the compound component pattern. Sub-components are composed
        freely — mix and match Header, Body, and Footer as needed.
      </Card.Body>
      <Card.Footer>
        <Button variant="ghost" size="sm">Cancel</Button>
        <Button size="sm">Save</Button>
      </Card.Footer>
    </Card>
  ),
}

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
      {(['outlined', 'elevated', 'flat', 'ghost'] as const).map((v) => (
        <Card key={v} variant={v}>
          <Card.Header title={`Variant: ${v}`} />
          <Card.Body>Card body content demonstrating the <strong>{v}</strong> style.</Card.Body>
        </Card>
      ))}
    </div>
  ),
}

export const BodyOnly: Story = {
  name: 'Body Only (no Header/Footer)',
  render: () => (
    <Card style={{ maxWidth: 320 }}>
      <Card.Body>
        Sub-components are optional — use only what you need.
      </Card.Body>
    </Card>
  ),
}

export const ContainerQuery: Story = {
  name: 'Container Query (narrow card)',
  render: () => (
    <div style={{ maxWidth: 240 }}>
      <Card>
        <Card.Header title="Narrow card" subtitle="Footer actions stack below 280px" />
        <Card.Body>Resize the story canvas to see the container query trigger.</Card.Body>
        <Card.Footer>
          <Button variant="ghost" size="sm">Cancel</Button>
          <Button size="sm">Confirm</Button>
        </Card.Footer>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'At container widths ≤ 280px the footer actions stack vertically — driven by `@container`, not media queries.',
      },
    },
  },
}
