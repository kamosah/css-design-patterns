import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { ColorPicker } from './ColorPicker'

const meta: Meta<typeof ColorPicker> = {
  title: 'Components/ColorPicker',
  component: ColorPicker,
  parameters: {
    docs: {
      description: {
        component: `
**Patterns:** \`appearance: none\` vendor reset · swatch pseudo-element styling · hover/focus interactivity via CSS only

\`appearance: none\` + \`-webkit-appearance: none\` strip the native color widget entirely. The visible swatch is rebuilt via two pseudo-element layers: \`::-webkit-color-swatch-wrapper\` (padding host, zeroed out) and \`::-webkit-color-swatch\` / \`::-moz-color-swatch\` (the colored area, styled with border, border-radius, and transitions).

Hover state compounds the pseudo-element selector — \`.input:hover::-webkit-color-swatch\` — which reads as "when the input is hovered, style its swatch". Focus ring uses \`box-shadow\` instead of \`outline\` because \`outline\` on a stripped color input renders inconsistently across browsers.
        `.trim(),
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ColorPicker>

export const Default: Story = {
  args: {
    label: 'Choose color',
    defaultValue: '#3b82f6',
    disabled: false,
  },
}

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
      <ColorPicker label="Default" defaultValue="#3b82f6" />
      <ColorPicker label="Green" defaultValue="#22c55e" />
      <ColorPicker label="Disabled" defaultValue="#a855f7" disabled />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Default swatch · alternate color · disabled state (`data-disabled` on label, `opacity: 0.5` + `pointer-events: none`).',
      },
    },
  },
}

function ControlledDemo() {
  const [color, setColor] = useState('#3b82f6')
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
      <ColorPicker value={color} onChange={setColor} label="Pick a color" />
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div
          style={{
            width: 24,
            height: 24,
            borderRadius: 4,
            background: color,
            border: '1px solid var(--border)',
          }}
        />
        <code style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{color}</code>
      </div>
    </div>
  )
}

export const Controlled: Story = {
  name: 'Controlled (value + onChange)',
  render: () => <ControlledDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Pass `value` + `onChange` for controlled mode. The hex value updates live as the user drags the color picker — all interactivity is still CSS-driven; React only manages the value.',
      },
    },
  },
}

export const TokenOverride: Story = {
  name: 'Custom Sizes and Colors via Tokens',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
      <ColorPicker
        label="Large swatch (48px)"
        defaultValue="#f59e0b"
        style={{ '--color-picker-size': '48px' }}
      />
      <ColorPicker
        label="Pill radius"
        defaultValue="#ec4899"
        style={{ '--color-picker-radius': '999px' }}
      />
      <ColorPicker
        label="Green accent + focus ring"
        defaultValue="#22c55e"
        style={{ '--color-picker-accent': '#16a34a', '--color-picker-focus-ring': 'rgba(22, 163, 74, 0.3)' }}
      />
      <ColorPicker
        label="Purple accent"
        defaultValue="#a855f7"
        style={{ '--color-picker-accent': '#9333ea', '--color-picker-focus-ring': 'rgba(147, 51, 234, 0.3)' }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Override `--color-picker-size`, `--color-picker-radius`, `--color-picker-accent`, and `--color-picker-focus-ring` inline. Tokens cascade from the label wrapper into the swatch pseudo-elements without any JS.',
      },
    },
  },
}
