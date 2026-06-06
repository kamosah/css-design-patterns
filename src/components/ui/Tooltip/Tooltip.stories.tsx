import type { Meta, StoryObj } from '@storybook/react'
import { Kbd } from '../Kbd/Kbd'
import { Tooltip } from './Tooltip'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: `
**Patterns:** CSS-only hover · \`:focus-within\` keyboard access · data-attribute placement

Zero JS state — visibility is driven entirely by CSS \`:hover\` and \`:focus-within\` on the wrapper.
Content is a \`ReactNode\`, so \`<Kbd>\` elements and icons render inside the tooltip.
        `.trim(),
      },
    },
    layout: 'centered',
  },
  argTypes: {
    placement: { control: 'select', options: ['top', 'bottom'] },
  },
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  args: {
    content: 'Open curriculum map',
    placement: 'bottom',
    children: <button style={{ padding: '6px 12px', cursor: 'pointer' }}>Hover me</button>,
  },
}

export const WithKeyboardShortcut: Story = {
  name: 'With Keyboard Shortcut',
  render: () => (
    <Tooltip
      placement="bottom"
      content={
        <>
          Open map
          <Kbd>⌘</Kbd>
          <Kbd>.</Kbd>
        </>
      }
    >
      <button style={{ padding: '6px 12px', cursor: 'pointer' }}>Mini Map</button>
    </Tooltip>
  ),
  parameters: {
    docs: {
      description: { story: 'Combine text with `<Kbd>` elements to document keyboard shortcuts inline in the tooltip.' },
    },
  },
}

export const Placements: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 40, padding: 40, alignItems: 'center' }}>
      <Tooltip content="Appears above" placement="top">
        <button style={{ padding: '6px 12px', cursor: 'pointer' }}>Top</button>
      </Tooltip>
      <Tooltip content="Appears below" placement="bottom">
        <button style={{ padding: '6px 12px', cursor: 'pointer' }}>Bottom</button>
      </Tooltip>
    </div>
  ),
}

export const KeyboardAccessible: Story = {
  name: 'Keyboard Accessible',
  render: () => (
    <Tooltip content="Tab to this button to trigger" placement="bottom">
      <button style={{ padding: '6px 12px', cursor: 'pointer' }}>Tab to me</button>
    </Tooltip>
  ),
  parameters: {
    docs: {
      description: { story: 'Focus the button with the keyboard (Tab) — the tooltip appears via `:focus-within` without any JS.' },
    },
  },
}
