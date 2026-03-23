import { Button, Badge, Toggle } from '../ui'
import s from './DesignSystemPreview.module.css'

const STORYBOOK_URL = import.meta.env.VITE_STORYBOOK_URL as string | undefined

const colorGroups = [
  {
    label: 'Backgrounds',
    swatches: [
      { token: '--bg-base',     name: 'Base' },
      { token: '--bg-surface',  name: 'Surface' },
      { token: '--bg-elevated', name: 'Elevated' },
      { token: '--bg-inset',    name: 'Inset' },
    ],
  },
  {
    label: 'Text',
    swatches: [
      { token: '--text-heading',   name: 'Heading' },
      { token: '--text-primary',   name: 'Primary' },
      { token: '--text-secondary', name: 'Secondary' },
      { token: '--text-muted',     name: 'Muted' },
    ],
  },
  {
    label: 'Accent',
    swatches: [
      { token: '--accent',        name: 'Accent' },
      { token: '--accent-hover',  name: 'Hover' },
      { token: '--accent-subtle', name: 'Subtle' },
    ],
  },
  {
    label: 'Border',
    swatches: [
      { token: '--border',        name: 'Border' },
      { token: '--border-subtle', name: 'Subtle' },
    ],
  },
]

export function DesignSystemPreview() {
  return (
    <section className={s.section}>
      <div className={s.headingRow}>
        <h2 className={s.heading}>Design System</h2>
        {STORYBOOK_URL && (
          <a href={STORYBOOK_URL} target="_blank" rel="noreferrer" className={s.storybookLink}>
            View in Storybook ↗
          </a>
        )}
      </div>

      <div className={s.block}>
        <span className={s.blockLabel}>Tokens</span>
        <div className={s.colorGroups}>
          {colorGroups.map(group => (
            <div key={group.label} className={s.group}>
              <span className={s.groupLabel}>{group.label}</span>
              <div className={s.swatches}>
                {group.swatches.map(({ token, name }) => (
                  <div key={token} className={s.swatchItem} title={`${name} · ${token}`}>
                    <div
                      className={s.swatch}
                      style={{ background: `var(${token})` }}
                    />
                    <span className={s.swatchName}>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={s.block}>
        <span className={s.blockLabel}>Buttons</span>
        <div className={s.row}>
          <Button size="sm" variant="primary">Primary</Button>
          <Button size="sm" variant="secondary">Secondary</Button>
          <Button size="sm" variant="ghost">Ghost</Button>
          <Button size="sm" variant="danger">Danger</Button>
          <Button size="sm" variant="warning">Warning</Button>
          <Button size="sm" variant="primary" loading>Loading</Button>
        </div>
      </div>

      <div className={s.block}>
        <span className={s.blockLabel}>Badges</span>
        <div className={s.row}>
          <Badge variant="accent">Accent</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="neutral">Neutral</Badge>
        </div>
      </div>

      <div className={s.block}>
        <span className={s.blockLabel}>Toggle</span>
        <div className={s.row}>
          <Toggle label="Off" />
          <Toggle label="On" defaultChecked />
          <Toggle label="Disabled" disabled />
        </div>
      </div>
    </section>
  )
}
