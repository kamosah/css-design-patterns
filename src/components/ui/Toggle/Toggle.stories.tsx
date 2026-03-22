import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Toggle } from './Toggle'

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component: `
**Patterns:** \`:checked\` + adjacent sibling combinator · \`::before\` pseudo-element animation · \`translateX()\` · component tokens

The native \`<input type="checkbox">\` is visually hidden via \`clip\`/\`position\` but stays
in the DOM so keyboard focus and screen readers work. All visual state is driven by CSS —
\`input:checked + .track\` — no JavaScript state needed for the animation.
        `.trim(),
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Toggle>

export const Default: Story = {
  args: { label: 'Dark mode', defaultChecked: true },
}

export const Uncontrolled: Story = {
  name: 'Uncontrolled (defaultChecked)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Toggle label="Notifications" defaultChecked />
      <Toggle label="Auto-save" />
      <Toggle label="Disabled" disabled />
    </div>
  ),
}

export const Controlled: Story = {
  name: 'Controlled (value + onChange)',
  render: () => {
    const [on, setOn] = useState(false)
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Toggle label="Feature flag" checked={on} onChange={setOn} />
        <p style={{ fontSize: 12, color: 'var(--text-secondary)', margin: 0 }}>
          State: <strong style={{ color: 'var(--accent)' }}>{on ? 'on' : 'off'}</strong>
        </p>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'In controlled mode, pass `checked` + `onChange`. The parent owns the state; the CSS still drives all transitions.',
      },
    },
  },
}

export const TokenOverride: Story = {
  name: 'Custom Colors via Tokens',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Toggle
        label="Green on"
        defaultChecked
        style={{ '--toggle-on': '#22c55e' }}
      />
      <Toggle
        label="Red on"
        defaultChecked
        style={{ '--toggle-on': '#ef4444' }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Override `--toggle-on` and `--toggle-off` to retheme without touching the CSS file.',
      },
    },
  },
}
