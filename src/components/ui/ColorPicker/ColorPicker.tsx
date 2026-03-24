import { type CSSProperties, type ChangeEvent } from 'react'
import s from './ColorPicker.module.css'

interface ColorPickerProps {
  value?: string
  defaultValue?: string
  label?: string
  disabled?: boolean
  onChange?: (value: string) => void
  /** Override component tokens: --color-picker-size, --color-picker-border, --color-picker-accent, --color-picker-radius, --color-picker-focus-ring */
  style?: CSSProperties & Record<string, string | number>
}

export function ColorPicker({
  value,
  defaultValue = '#3b82f6',
  label = 'Choose color',
  disabled = false,
  onChange,
  style,
}: ColorPickerProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.value)
  }

  const inputProps =
    value !== undefined
      ? { value, onChange: handleChange }
      : { defaultValue }

  return (
    <label className={s.label} data-disabled={disabled || undefined} style={style}>
      {/*
       * PATTERN: appearance: none + vendor prefix strip the browser's native
       * color widget completely. The actual colored area is then restyled via
       * ::-webkit-color-swatch-wrapper (layout/padding host) and
       * ::-webkit-color-swatch / ::-moz-color-swatch (the visible swatch).
       * Transitions on border-color and transform are declared on the swatch
       * pseudo-elements — the browser's compositor handles the animation.
       */}
      <input
        type="color"
        className={s.input}
        disabled={disabled}
        aria-label={label}
        {...inputProps}
      />
      {label}
    </label>
  )
}
