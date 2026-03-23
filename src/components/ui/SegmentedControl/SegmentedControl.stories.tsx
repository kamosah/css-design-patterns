import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { SegmentedControl } from './SegmentedControl'

const THEME_OPTIONS = [
  { value: 'system', label: 'System' },
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
]

const VIEW_OPTIONS = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
]

const meta: Meta<typeof SegmentedControl> = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
  parameters: {
    docs: {
      description: {
        component: `
**Patterns:** hidden radio inputs · \`input:checked + label\` adjacent sibling · \`:first-of-type\`/\`:last-of-type\` border-radius · \`overflow: hidden\` pill shape

Each option is a hidden \`<input type="radio">\` followed by a \`<label>\`. All visual state — active segment, disabled option, focus ring — is driven entirely by CSS pseudo-classes and the adjacent sibling combinator. No JavaScript class toggling needed.
        `.trim(),
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof SegmentedControl>

export const Default: Story = {
  args: {
    options: THEME_OPTIONS,
    defaultValue: 'system',
    size: 'md',
  },
}

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
      <SegmentedControl options={VIEW_OPTIONS} defaultValue="day" size="sm" />
      <SegmentedControl options={VIEW_OPTIONS} defaultValue="day" size="md" />
      <SegmentedControl options={VIEW_OPTIONS} defaultValue="day" size="lg" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '`sm`, `md` (default), `lg` — driven by `--seg-py`, `--seg-px`, and `--seg-font-size` component tokens set per `data-size` variant.',
      },
    },
  },
}

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
      <SegmentedControl options={VIEW_OPTIONS} defaultValue="day" />
      <SegmentedControl
        options={[
          { value: 'day', label: 'Day' },
          { value: 'week', label: 'Week', disabled: true },
          { value: 'month', label: 'Month' },
        ]}
        defaultValue="day"
      />
      <SegmentedControl options={VIEW_OPTIONS} defaultValue="week" disabled />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Default · one option disabled (`input:disabled + label`) · entire control disabled (`data-disabled` on root).',
      },
    },
  },
}

function ControlledDemo() {
  const [view, setView] = useState('week')
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <SegmentedControl options={VIEW_OPTIONS} value={view} onChange={setView} />
      <p style={{ fontSize: 12, color: 'var(--text-secondary)', margin: 0 }}>
        Selected: <strong style={{ color: 'var(--accent)' }}>{view}</strong>
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
        story: 'Pass `value` + `onChange` for controlled mode. The parent owns state; CSS still drives all transitions.',
      },
    },
  },
}

export const TokenOverride: Story = {
  name: 'Custom Colors via Tokens',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
      <SegmentedControl
        options={THEME_OPTIONS}
        defaultValue="light"
        style={{ '--seg-active-bg': '#22c55e', '--seg-radius': '999px' }}
      />
      <SegmentedControl
        options={THEME_OPTIONS}
        defaultValue="dark"
        style={{ '--seg-active-bg': '#ef4444', '--seg-radius': '2px' }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Override `--seg-active-bg` and `--seg-radius` inline to retheme without touching the CSS file.',
      },
    },
  },
}
