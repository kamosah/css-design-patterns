import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { CustomSelect, type SelectOption } from './CustomSelect'

const FRUITS: SelectOption[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'durian', label: 'Durian', disabled: true },
  { value: 'elderberry', label: 'Elderberry' },
]

const FRAMEWORKS: SelectOption[] = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'angular', label: 'Angular' },
]

const meta: Meta<typeof CustomSelect> = {
  title: 'Components/CustomSelect',
  component: CustomSelect,
  parameters: {
    docs: {
      description: {
        component: `
**Patterns:** \`appearance: none\` · \`::after\` custom arrow · \`pointer-events: none\` · component tokens · \`data-size\` variants · \`:has()\` compound state

The native \`<select>\` stays in the DOM for full keyboard navigation and screen-reader support.
\`appearance: none\` (plus \`-webkit-\` and \`-moz-\` vendor prefixes) strips the browser-default arrow.
The wrapper's \`::after\` injects a \`"▼"\` character with \`pointer-events: none\` so clicks pass through.
\`--select-border-focus\` drives both hover and \`:focus-visible\` border from one token, avoiding duplicated declarations.
        `.trim(),
      },
    },
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
  },
  args: {
    options: FRUITS,
    size: 'md',
  },
}

export default meta
type Story = StoryObj<typeof CustomSelect>

export const Default: Story = {
  args: {
    placeholder: 'Select a fruit…',
    defaultValue: '',
  },
}

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
      <CustomSelect options={FRUITS} size="sm" defaultValue="apple" />
      <CustomSelect options={FRUITS} size="md" defaultValue="banana" />
      <CustomSelect options={FRUITS} size="lg" defaultValue="cherry" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '`data-size` drives `--select-height`, `--select-width`, and `--select-font-size` via component tokens — one attribute change, no class name juggling.',
      },
    },
  },
}

function ControlledDemo() {
  const [value, setValue] = useState('react')
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start' }}>
      <CustomSelect options={FRAMEWORKS} value={value} onChange={setValue} />
      <p style={{ fontSize: 12, color: 'var(--text-secondary)', margin: 0 }}>
        Selected: <strong style={{ color: 'var(--accent)' }}>{value}</strong>
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
        story: 'Pass `value` + `onChange` to take control. The native `<select>` handles all keyboard events; the component just surfaces the value.',
      },
    },
  },
}

export const States: Story = {
  name: 'States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
      <CustomSelect options={FRUITS} defaultValue="apple" />
      <CustomSelect options={FRUITS} placeholder="Select a fruit…" defaultValue="" />
      <CustomSelect options={FRUITS} defaultValue="apple" disabled />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Default · with placeholder · disabled. The disabled arrow dims via `.wrapper:has(.select:disabled)::after` — CSS compound state, no extra JS.',
      },
    },
  },
}

export const TokenOverride: Story = {
  name: 'Custom Colors via Tokens',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
      <CustomSelect
        options={FRUITS}
        defaultValue="apple"
        style={{ '--select-border-focus': '#22c55e', '--select-arrow': '#22c55e' }}
      />
      <CustomSelect
        options={FRUITS}
        defaultValue="banana"
        style={{ '--select-border-focus': '#f59e0b', '--select-arrow': '#f59e0b', '--select-width': '240px' }}
      />
      <CustomSelect
        options={FRUITS}
        defaultValue="cherry"
        style={{ '--select-border-focus': '#ef4444', '--select-arrow': '#ef4444', '--select-radius': '20px' }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Override `--select-border-focus`, `--select-arrow`, `--select-width`, and `--select-radius` inline — no CSS file edits needed.',
      },
    },
  },
}
