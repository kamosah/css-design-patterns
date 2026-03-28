import type { Meta, StoryObj } from '@storybook/react'
import { ValidationInput } from './ValidationInput'

const meta: Meta<typeof ValidationInput> = {
  title: 'Components/ValidationInput',
  component: ValidationInput,
  parameters: {
    docs: {
      description: {
        component: `
**Patterns:** \`:has()\` relational selector · \`::after\` icon on wrapper · \`pointer-events: none\` · component tokens · \`:not(:placeholder-shown)\` guard

A native \`<input type="email">\` wrapped in a div that uses CSS \`:has()\` to detect
\`:valid\` / \`:invalid\` states and drive both border-color feedback and a slide-in ✔/✖ icon
via \`::after\` — no JavaScript required.

\`:not(:placeholder-shown)\` prevents the red invalid state from firing on an empty
required field before the user has typed anything.
        `.trim(),
      },
    },
  },
  args: {
    placeholder: 'Enter your email',
    required: true,
    disabled: false,
  },
}

export default meta
type Story = StoryObj<typeof ValidationInput>

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Empty state — no validation icons shown until the user types.',
      },
    },
  },
}

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
      <ValidationInput placeholder="Empty (no feedback)" />
      <ValidationInput defaultValue="user@example.com" placeholder="Valid email" />
      <ValidationInput defaultValue="not-an-email" placeholder="Invalid email" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Empty · valid email (✔ green) · invalid value (✖ red). All state transitions are driven by `:has()` — no class toggling.',
      },
    },
  },
}

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
      <ValidationInput placeholder="Empty — no icon" />
      <ValidationInput defaultValue="user@example.com" placeholder="Valid — green ✔" />
      <ValidationInput defaultValue="bad-value" placeholder="Invalid — red ✖" />
      <ValidationInput defaultValue="user@example.com" disabled placeholder="Disabled — icons hidden" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Empty · valid · invalid · disabled. The disabled state hides the icon via `:has(.input:disabled)::after { display: none }` — CSS compound state without JS.',
      },
    },
  },
}

export const TokenOverride: Story = {
  name: 'Token Override',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
      <ValidationInput
        defaultValue="user@example.com"
        style={{ '--valid-color': '#6366f1', '--input-width': '360px' }}
        placeholder="Indigo valid color"
      />
      <ValidationInput
        defaultValue="bad-value"
        style={{ '--invalid-color': '#f59e0b', '--input-radius': '20px' }}
        placeholder="Amber invalid + pill shape"
      />
      <ValidationInput
        defaultValue="user@example.com"
        style={{ '--valid-color': '#22d3ee', '--input-border': '#22d3ee', '--transition-duration': '0.5s' }}
        placeholder="Cyan with slow transition"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Override `--valid-color`, `--invalid-color`, `--input-radius`, `--input-width`, `--input-border`, and `--transition-duration` inline — no CSS edits needed.',
      },
    },
  },
}
