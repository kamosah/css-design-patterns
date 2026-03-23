import { useId, type ChangeEvent, type CSSProperties } from 'react'
import s from './CustomSelect.module.css'

type SelectSize = 'sm' | 'md' | 'lg'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

interface CustomSelectProps {
  options: SelectOption[]
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  placeholder?: string
  disabled?: boolean
  size?: SelectSize
  id?: string
  /** Override component tokens: --select-border, --select-border-focus, --select-arrow, etc. */
  style?: CSSProperties & Record<string, string | number>
}

export function CustomSelect({
  options,
  value,
  defaultValue,
  onChange,
  placeholder,
  disabled = false,
  size = 'md',
  id: externalId,
  style,
}: CustomSelectProps) {
  const generatedId = useId()
  const id = externalId ?? generatedId

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    onChange?.(e.target.value)
  }

  return (
    <div className={s.wrapper} data-size={size} style={style}>
      {/*
       * PATTERN: appearance: none + wrapper ::after custom arrow
       * The native <select> is kept in the DOM — all keyboard navigation
       * and screen-reader semantics come for free. appearance: none strips
       * the browser-default arrow. The wrapper's ::after injects a "▼"
       * character with pointer-events: none so clicks pass through to the
       * underlying select.
       *
       * PATTERN: Component tokens
       * --select-border and --select-border-focus drive both the default
       * and hover/focus border from a single declaration per state, avoiding
       * duplicated property declarations across selectors.
       */}
      <select
        id={id}
        className={s.select}
        {...(value !== undefined
          ? { value, onChange: handleChange }
          : { defaultValue, onChange: handleChange })}
        disabled={disabled}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}
