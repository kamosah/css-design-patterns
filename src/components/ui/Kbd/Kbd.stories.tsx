import type { Meta, StoryObj } from '@storybook/react'
import type { CSSProperties } from 'react'
import { Kbd } from './Kbd'

const meta: Meta<typeof Kbd> = {
  title: 'Components/Kbd',
  component: Kbd,
  parameters: {
    docs: {
      description: {
        component: `
**Patterns:** component tokens · \`border-bottom-width: 2px\` keycap depth

Semantic \`<kbd>\` element styled to look like a physical keyboard key.
Token overrides let callers restyle the key without a new variant.
        `.trim(),
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Kbd>

export const Default: Story = {
  args: { children: '⌘' },
}

export const CommonKeys: Story = {
  name: 'Common Keys',
  render: () => (
    <div style={{ display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap' }}>
      <Kbd>⌘</Kbd>
      <Kbd>Ctrl</Kbd>
      <Kbd>Alt</Kbd>
      <Kbd>⇧</Kbd>
      <Kbd>⌫</Kbd>
      <Kbd>↵</Kbd>
      <Kbd>Esc</Kbd>
      <Kbd>Tab</Kbd>
      <Kbd>.</Kbd>
      <Kbd>K</Kbd>
    </div>
  ),
}

export const ShortcutCombo: Story = {
  name: 'Shortcut Combo',
  render: () => (
    <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
      <Kbd>⌘</Kbd>
      <span style={{ fontSize: 10, color: 'var(--text-muted)' }}>+</span>
      <Kbd>.</Kbd>
    </div>
  ),
  parameters: {
    docs: {
      description: { story: 'Combine multiple Kbd elements to represent a shortcut chord.' },
    },
  },
}

export const TokenOverride: Story = {
  name: 'Token Override',
  render: () => (
    <div style={{ display: 'flex', gap: 6 }}>
      <Kbd style={{ '--kbd-color': '#818cf8', '--kbd-border': '#818cf8', '--kbd-bg': 'color-mix(in srgb, #818cf8 12%, transparent)' } as CSSProperties & Record<string, string>}>⌘</Kbd>
      <Kbd style={{ '--kbd-color': '#f59e0b', '--kbd-border': '#f59e0b', '--kbd-bg': 'color-mix(in srgb, #f59e0b 12%, transparent)' } as CSSProperties & Record<string, string>}>⇧</Kbd>
    </div>
  ),
  parameters: {
    docs: {
      description: { story: 'Pass `--kbd-color`, `--kbd-border`, and `--kbd-bg` as inline styles for one-off color overrides.' },
    },
  },
}
