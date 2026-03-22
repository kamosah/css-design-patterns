import type { Meta, StoryObj } from '@storybook/react-vite'

// ─── Text roles ───────────────────────────────────────────────────────────────

const TEXT_ROLES = [
  { token: '--text-heading',   label: 'Heading',   dark: '#f8fafc', light: '#0f172a', usage: 'Page titles, hero headings' },
  { token: '--text-primary',   label: 'Primary',   dark: '#e2e8f0', light: '#1e293b', usage: 'Default body text, card titles' },
  { token: '--text-body',      label: 'Body',      dark: '#cbd5e0', light: '#475569', usage: 'Long-form markdown prose' },
  { token: '--text-secondary', label: 'Secondary', dark: '#718096', light: '#64748b', usage: 'Labels, metadata, captions' },
  { token: '--text-tertiary',  label: 'Tertiary',  dark: '#a0aec0', light: '#94a3b8', usage: 'Hover states, h3 subheadings' },
  { token: '--text-muted',     label: 'Muted',     dark: '#4a5568', light: '#94a3b8', usage: 'Breadcrumb separators, scrollbar' },
]

// ─── Type scale ───────────────────────────────────────────────────────────────

const TYPE_SCALE = [
  { size: 48, weight: 700, usage: 'Error code (NotFoundPage)',       example: '404' },
  { size: 32, weight: 800, usage: 'Hero heading (CurriculumPage)',   example: 'CSS Patterns' },
  { size: 24, weight: 700, usage: 'Stat values (hero section)',      example: '12' },
  { size: 16, weight: 600, usage: 'Section h2 (markdown panels)',    example: 'Problem description' },
  { size: 15, weight: 400, usage: 'Hero subtext',                    example: 'Practice CSS layout patterns' },
  { size: 14, weight: 600, usage: 'Panel title, challenge name',     example: 'Custom Range Slider' },
  { size: 13, weight: 400, usage: 'Body text, Monaco editor',        example: 'Use CSS to style the range input.' },
  { size: 12, weight: 500, usage: 'Tab labels, breadcrumbs',         example: 'styles.css' },
  { size: 11, weight: 600, usage: 'Uppercase labels, badges',        example: 'EASY · 15 MIN' },
  { size: 10, weight: 700, usage: 'Difficulty badge text',           example: 'MEDIUM' },
]

// ─── Components ───────────────────────────────────────────────────────────────

function TextRolesStory() {
  return (
    <div style={{ background: 'var(--bg-base)', minHeight: '100vh', padding: '32px' }}>
      <h1 style={{ color: 'var(--text-heading)', fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>
        Text Roles
      </h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '40px' }}>
        Six semantic text tokens covering every text role in the UI. All colors respond to theme toggle.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {TEXT_ROLES.map((role) => (
          <div key={role.token} style={{
            display: 'grid',
            gridTemplateColumns: '140px 1fr auto',
            alignItems: 'center',
            gap: '24px',
            padding: '16px 0',
            borderBottom: '1px solid var(--border-subtle)',
          }}>
            <div>
              <div style={{
                fontFamily: 'ui-monospace, monospace',
                fontSize: '11px',
                color: 'var(--text-muted)',
                marginBottom: '2px',
              }}>
                {role.token}
              </div>
              <div style={{
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--text-muted)',
              }}>
                {role.label}
              </div>
            </div>

            <div style={{
              fontSize: '20px',
              fontWeight: 500,
              color: `var(${role.token})`,
            }}>
              The quick brown fox jumps over the lazy dog
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'ui-monospace, monospace' }}>
                Dark: {role.dark}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'ui-monospace, monospace' }}>
                Light: {role.light}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                {role.usage}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TypeScaleStory() {
  return (
    <div style={{ background: 'var(--bg-base)', minHeight: '100vh', padding: '32px' }}>
      <h1 style={{ color: 'var(--text-heading)', fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>
        Type Scale
      </h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '40px' }}>
        Font sizes in use across the app. No design-token variables for size — values are hardcoded
        per-component. This page documents the actual values used.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {TYPE_SCALE.map(({ size, weight, usage, example }) => (
          <div key={size} style={{
            display: 'grid',
            gridTemplateColumns: '80px 1fr 240px',
            alignItems: 'center',
            gap: '24px',
            padding: '20px 0',
            borderBottom: '1px solid var(--border-subtle)',
          }}>
            <div style={{ textAlign: 'right' }}>
              <span style={{
                fontFamily: 'ui-monospace, monospace',
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--accent-subtle)',
              }}>
                {size}px
              </span>
              <div style={{
                fontFamily: 'ui-monospace, monospace',
                fontSize: '11px',
                color: 'var(--text-muted)',
                marginTop: '2px',
              }}>
                {weight}
              </div>
            </div>

            <div style={{
              fontSize: `${size}px`,
              fontWeight: weight,
              color: 'var(--text-primary)',
              lineHeight: 1.2,
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            }}>
              {example}
            </div>

            <div style={{
              fontSize: '12px',
              color: 'var(--text-secondary)',
              lineHeight: 1.4,
            }}>
              {usage}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Stories ──────────────────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Design System/Typography',
  parameters: { layout: 'fullscreen' },
}

export default meta

export const TextRoles: StoryObj = {
  name: 'Text Roles',
  render: () => <TextRolesStory />,
  parameters: {
    docs: {
      description: {
        story: 'The six semantic text-color tokens and where each is used. Colors respond to Dark / Light theme toggle.',
      },
    },
  },
}

export const TypeScale: StoryObj = {
  name: 'Type Scale',
  render: () => <TypeScaleStory />,
  parameters: {
    docs: {
      description: {
        story: 'Font sizes and weights used across the app, from the 48px error code down to the 10px difficulty badge.',
      },
    },
  },
}
