import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { RangeSlider } from './RangeSlider'

const meta: Meta<typeof RangeSlider> = {
  title: 'Components/RangeSlider',
  component: RangeSlider,
  parameters: {
    docs: {
      description: {
        component: `
**Patterns:** \`::-webkit-slider-runnable-track\` · \`::-webkit-slider-thumb\` · \`-webkit-appearance: none\` · centering formula · component tokens

Both \`-webkit-appearance: none\` calls are required: once on the \`<input>\` to unlock track
styling, and once inside \`::-webkit-slider-thumb\` to unlock thumb sizing. The centering
formula \`margin-top: (trackHeight - thumbSize) / 2\` works with CSS \`calc()\` and component tokens.
        `.trim(),
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof RangeSlider>

export const Default: Story = {
  args: { label: 'Volume', min: 0, max: 100, defaultValue: 50 },
}

export const Uncontrolled: Story = {
  name: 'Uncontrolled (defaultValue)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 320 }}>
      <RangeSlider label="Brightness" defaultValue={75} />
      <RangeSlider label="Contrast" defaultValue={50} />
      <RangeSlider label="Saturation" defaultValue={25} />
    </div>
  ),
}

export const Controlled: Story = {
  name: 'Controlled (value + onChange)',
  render: () => {
    const [val, setVal] = useState(50)
    return (
      <div style={{ maxWidth: 320, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <RangeSlider label="Temperature" value={val} onChange={setVal} />
        <p style={{ fontSize: 12, color: 'var(--text-secondary)', margin: 0 }}>
          Value: <strong style={{ color: 'var(--accent)' }}>{val}</strong>
        </p>
      </div>
    )
  },
}

export const TokenOverrides: Story = {
  name: 'Custom Colors via Tokens',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 320 }}>
      <RangeSlider
        label="Warning"
        defaultValue={60}
        thumbColor="var(--warning-text)"
        trackColor="color-mix(in srgb, var(--warning-text) 30%, transparent)"
      />
      <RangeSlider
        label="Success"
        defaultValue={80}
        thumbColor="#22c55e"
        trackColor="color-mix(in srgb, #22c55e 30%, transparent)"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pass `trackColor` and `thumbColor` props — they set `--range-track-color` and `--range-thumb-color` tokens inline.',
      },
    },
  },
}
