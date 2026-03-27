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

function ControlledDemo() {
  const [val, setVal] = useState(50)
  return (
    <div style={{ maxWidth: 320, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <RangeSlider label="Temperature" value={val} onChange={setVal} />
      <p style={{ fontSize: 12, color: 'var(--text-secondary)', margin: 0 }}>
        Value: <strong style={{ color: 'var(--accent)' }}>{val}</strong>
      </p>
    </div>
  )
}

export const Controlled: Story = {
  name: 'Controlled (value + onChange)',
  render: () => <ControlledDemo />,
}

export const WithTickMarks: Story = {
  name: 'Tick Marks',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 320 }}>
      <RangeSlider label="Step: 10" min={0} max={100} step={10} defaultValue={40} tickMarks />
      <RangeSlider label="Step: 25" min={0} max={100} step={25} defaultValue={50} tickMarks />
      <RangeSlider label="Step: 5 (custom range)" min={0} max={50} step={5} defaultValue={20} tickMarks />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`tickMarks` computes `--range-tick-count` from `(max - min) / step + 1` and sets it inline on the `<input>`. The CSS reads it inside `repeating-linear-gradient` on the track pseudo-element.',
      },
    },
  },
}

export const WithLabels: Story = {
  name: 'Tick Marks + Labels',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28, maxWidth: 320 }}>
      <RangeSlider label="Volume" min={0} max={100} step={10} defaultValue={60} tickMarks showLabels />
      <RangeSlider label="Temperature (°C)" min={16} max={30} step={2} defaultValue={22} tickMarks showLabels />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`showLabels` renders a flex row of `<span>` elements with `justify-content: space-between` — dynamic min/max values from props, no pseudo-element `content:` hardcoding needed.',
      },
    },
  },
}

export const TokenOverrides: Story = {
  name: 'Custom Colors via Tokens',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 320 }}>
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
      <RangeSlider
        label="Custom tick color"
        defaultValue={50}
        step={10}
        tickMarks
        showLabels
        tickColor="#a855f7"
        trackColor="color-mix(in srgb, #a855f7 20%, transparent)"
        thumbColor="#a855f7"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pass `trackColor`, `thumbColor`, and `tickColor` props — they set the corresponding `--range-*` tokens inline.',
      },
    },
  },
}
