import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { TriStateCheckbox } from './TriStateCheckbox'

const meta: Meta<typeof TriStateCheckbox> = {
  title: 'Components/TriStateCheckbox',
  component: TriStateCheckbox,
  parameters: {
    docs: {
      description: {
        component: `
**Patterns:** Hidden native input · adjacent sibling combinator · CSS tick geometry · \`input:indeterminate\` · \`@keyframes\` animation

The native \`<input>\` is hidden with \`position: absolute\` + \`opacity: 0\` + zero size — it stays in the DOM so \`:checked\` and \`:indeterminate\` pseudo-classes remain active. The adjacent sibling combinator (\`.input:checked + .checkmark\`) drives all visual state entirely in CSS.

\`indeterminate\` is a DOM property, not an HTML attribute — it must be set via \`inputEl.indeterminate = true\`. A \`useRef\` + \`useEffect\` handles this so the CSS \`:indeterminate\` pseudo-class responds correctly.

The tick is drawn with two CSS border edges (\`border-width: 0 2px 2px 0\`) rotated 45°. The indeterminate dash animates with \`@keyframes pulse\` scaling \`scaleX\` between \`0.8×\` and \`1.2×\`.
        `.trim(),
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof TriStateCheckbox>

export const Default: Story = {
  args: {
    label: 'Agree to terms',
    indeterminate: false,
    disabled: false,
  },
}

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
      <TriStateCheckbox label="Unchecked" defaultChecked={false} />
      <TriStateCheckbox label="Checked" defaultChecked={true} />
      <TriStateCheckbox label="Indeterminate (pulsing dash)" indeterminate={true} />
      <TriStateCheckbox label="Disabled unchecked" disabled />
      <TriStateCheckbox label="Disabled checked" defaultChecked={true} disabled />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All five visual states: unchecked · checked (blue fill + white tick) · indeterminate (pulsing dash) · disabled unchecked · disabled checked.',
      },
    },
  },
}

type TriState = 'unchecked' | 'indeterminate' | 'checked'

function CycleDemo() {
  const [state, setState] = useState<TriState>('unchecked')

  const next: Record<TriState, TriState> = {
    unchecked: 'indeterminate',
    indeterminate: 'checked',
    checked: 'unchecked',
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
      <TriStateCheckbox
        label="Click to cycle states"
        checked={state === 'checked'}
        indeterminate={state === 'indeterminate'}
        onChange={() => setState(next[state])}
      />
      <p style={{ fontSize: 12, color: 'var(--text-secondary)', margin: 0 }}>
        Current state:{' '}
        <strong style={{ color: 'var(--accent)' }}>{state}</strong>
        {' '}— click to advance to{' '}
        <strong>{next[state]}</strong>
      </p>
    </div>
  )
}

export const Controlled: Story = {
  name: 'Controlled (cycle through all three states)',
  render: () => <CycleDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Cycles unchecked → indeterminate → checked → unchecked on each click. React manages which state to show; CSS handles all rendering.',
      },
    },
  },
}

const ITEMS = ['Read the docs', 'Run the tests', 'Open a PR'] as const

function SelectAllDemo() {
  const [checked, setChecked] = useState<Record<string, boolean>>({
    'Read the docs': true,
    'Run the tests': false,
    'Open a PR': false,
  })

  const total = ITEMS.length
  const selectedCount = Object.values(checked).filter(Boolean).length
  const allChecked = selectedCount === total
  const someChecked = selectedCount > 0 && selectedCount < total

  function toggleAll() {
    const next = !allChecked
    setChecked({ 'Read the docs': next, 'Run the tests': next, 'Open a PR': next })
  }

  function toggleItem(label: string) {
    setChecked((prev) => ({ ...prev, [label]: !prev[label] }))
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
      <TriStateCheckbox
        label="Select all"
        checked={allChecked}
        indeterminate={someChecked}
        onChange={toggleAll}
        style={{ fontWeight: 600 }}
      />
      <div style={{ width: '100%', height: 1, background: 'var(--border, #e2e8f0)' }} />
      {ITEMS.map((item) => (
        <TriStateCheckbox
          key={item}
          label={item}
          checked={checked[item]}
          onChange={() => toggleItem(item)}
          style={{ paddingInlineStart: '1.5rem' }}
        />
      ))}
      <p style={{ fontSize: 12, color: 'var(--text-secondary, #666)', margin: 0 }}>
        {selectedCount} of {total} selected
      </p>
    </div>
  )
}

export const SelectAll: Story = {
  name: 'Select All (real-world indeterminate use case)',
  render: () => <SelectAllDemo />,
  parameters: {
    docs: {
      description: {
        story:
          '`indeterminate` is designed for "select all" parent checkboxes. When some — but not all — children are checked, the parent is set to `indeterminate` by JS logic, not by the user. Clicking the parent toggles all children; the indeterminate state is computed, never manually assigned.',
      },
    },
  },
}

export const TokenOverride: Story = {
  name: 'Custom Sizes and Colors via Tokens',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
      <TriStateCheckbox
        label="Large (28px)"
        defaultChecked={true}
        style={{ '--checkbox-size': '28px' }}
      />
      <TriStateCheckbox
        label="Green accent"
        defaultChecked={true}
        style={{ '--checkbox-accent': '#22c55e' }}
      />
      <TriStateCheckbox
        label="Purple + pill radius"
        defaultChecked={true}
        style={{ '--checkbox-accent': '#a855f7', '--checkbox-radius': '999px' }}
      />
      <TriStateCheckbox
        label="Indeterminate — green dash"
        indeterminate={true}
        style={{ '--checkbox-border': '#22c55e', '--checkbox-accent': '#22c55e' }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Override `--checkbox-size`, `--checkbox-accent`, `--checkbox-border`, and `--checkbox-radius` inline. Token values cascade from the label wrapper into the pseudo-element selectors without touching the CSS file.',
      },
    },
  },
}
