import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { FloatingLabelInput } from './FloatingLabelInput'

const meta: Meta<typeof FloatingLabelInput> = {
  title: 'Components/FloatingLabelInput',
  component: FloatingLabelInput,
  parameters: {
    docs: {
      description: {
        component: `
**Patterns:** \`placeholder=" "\` trick · \`:not(:placeholder-shown)\` · \`:focus + label\` adjacent sibling · component tokens

The label is positioned absolutely over the input to mimic placeholder text. \`placeholder=" "\` (a single space) is the key — it makes \`:placeholder-shown\` detectable, so \`:not(:placeholder-shown)\` fires when real content is present. Combined with \`:focus\`, the adjacent sibling combinator drives the float entirely in CSS with no JavaScript state.
        `.trim(),
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof FloatingLabelInput>

export const Default: Story = {
  args: {
    label: 'Username',
    type: 'text',
    disabled: false,
  },
}

export const AllTypes: Story = {
  name: 'All Input Types',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 320 }}>
      <FloatingLabelInput label="Username" type="text" />
      <FloatingLabelInput label="Email address" type="email" />
      <FloatingLabelInput label="Password" type="password" />
      <FloatingLabelInput label="Search" type="search" />
      <FloatingLabelInput label="Phone number" type="tel" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The same pattern works across all text-like input types — the float behaviour is driven by CSS, not the input type.',
      },
    },
  },
}

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 320 }}>
      <FloatingLabelInput label="Empty" type="text" />
      <FloatingLabelInput label="Pre-filled (floated)" type="text" defaultValue="john_doe" />
      <FloatingLabelInput label="Email pre-filled" type="email" defaultValue="user@example.com" />
      <FloatingLabelInput label="Disabled" type="text" disabled defaultValue="locked value" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Empty (label at rest) · pre-filled (label floated via `:not(:placeholder-shown)`) · disabled (`data-disabled` on wrapper).',
      },
    },
  },
}

function ControlledDemo() {
  const [email, setEmail] = useState('')
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 320 }}>
      <FloatingLabelInput
        label="Email address"
        type="email"
        value={email}
        onChange={setEmail}
      />
      <p style={{ fontSize: 12, color: 'var(--text-secondary)', margin: 0 }}>
        Value: <strong style={{ color: 'var(--accent)' }}>{email || '(empty)'}</strong>
      </p>
    </div>
  )
}

export const Controlled: Story = {
  name: 'Controlled (value + onChange)',
  render: () => <ControlledDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Pass `value` + `onChange` for controlled mode. The CSS still owns the float — React only tracks the value.',
      },
    },
  },
}

export const TokenOverride: Story = {
  name: 'Custom Colors via Tokens',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 320 }}>
      <FloatingLabelInput
        label="Green accent"
        type="text"
        defaultValue="filled state"
        style={{ '--float-accent': '#22c55e', '--float-radius': '8px' }}
      />
      <FloatingLabelInput
        label="Red accent"
        type="text"
        defaultValue="filled state"
        style={{ '--float-accent': '#ef4444', '--float-radius': '999px' }}
      />
      <FloatingLabelInput
        label="Custom border"
        type="text"
        defaultValue="filled state"
        style={{ '--float-accent': '#a855f7', '--float-border': '#a855f7', '--float-radius': '2px' }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Override `--float-accent`, `--float-border`, and `--float-radius` inline to retheme without touching the CSS file.',
      },
    },
  },
}
