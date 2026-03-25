import { type CSSProperties, type ChangeEvent, useRef, useEffect } from 'react'
import s from './TriStateCheckbox.module.css'

interface TriStateCheckboxProps {
  checked?: boolean
  defaultChecked?: boolean
  /** Sets the native input.indeterminate DOM property — not an HTML attribute */
  indeterminate?: boolean
  label?: string
  disabled?: boolean
  onChange?: (checked: boolean) => void
  /** Override component tokens: --checkbox-size, --checkbox-border, --checkbox-accent, --checkbox-radius */
  style?: CSSProperties & Record<string, string | number>
}

export function TriStateCheckbox({
  checked,
  defaultChecked = false,
  indeterminate = false,
  label = 'Agree to terms',
  disabled = false,
  onChange,
  style,
}: TriStateCheckboxProps) {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (ref.current) {
      /*
       * PATTERN: indeterminate is a DOM property, not an HTML attribute.
       * It cannot be set via JSX — a ref is the only way to drive it from
       * React. The CSS :indeterminate pseudo-class reacts to this property,
       * so all visual state is still owned entirely by CSS.
       */
      ref.current.indeterminate = indeterminate
    }
  }, [indeterminate])

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.checked)
  }

  const inputProps =
    checked !== undefined
      ? { checked, onChange: handleChange }
      : { defaultChecked }

  return (
    <label className={s.label} data-disabled={disabled || undefined} style={style}>
      <input
        ref={ref}
        type="checkbox"
        className={s.input}
        disabled={disabled}
        aria-checked={indeterminate ? 'mixed' : checked}
        {...inputProps}
      />
      <span className={s.checkmark} />
      {label}
    </label>
  )
}
