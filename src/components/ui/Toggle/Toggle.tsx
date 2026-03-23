import { useId, type ChangeEvent, type CSSProperties } from 'react'
import s from './Toggle.module.css'

interface ToggleProps {
  label?: string
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
  /** Override component tokens: --toggle-on, --toggle-off, --toggle-size, etc. */
  style?: CSSProperties & Record<string, string | number>
}

export function Toggle({
  label,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  style,
}: ToggleProps) {
  const id = useId()

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.checked)
  }

  return (
    <label className={s.wrapper} htmlFor={id} style={style}>
      {/*
       * PATTERN: :checked + adjacent sibling
       * The input is visually hidden via clip/position but stays in the DOM
       * so keyboard focus and screen readers still work. The CSS :checked
       * pseudo-class + the adjacent sibling combinator (+) handle all
       * visual state — no JS state needed for the animation.
       */}
      <input
        id={id}
        type="checkbox"
        className={s.input}
        {...(checked !== undefined
          ? { checked, onChange: handleChange }
          : { defaultChecked }
        )}
        disabled={disabled}
      />
      <span className={s.track} aria-hidden="true" />
      {label && <span className={s.label}>{label}</span>}
    </label>
  )
}
