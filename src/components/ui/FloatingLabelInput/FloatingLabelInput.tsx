import { useId, type ChangeEvent, type CSSProperties } from 'react'
import s from './FloatingLabelInput.module.css'

interface FloatingLabelInputProps {
  label: string
  type?: 'text' | 'email' | 'password' | 'search' | 'tel' | 'url'
  value?: string
  defaultValue?: string
  disabled?: boolean
  required?: boolean
  onChange?: (value: string) => void
  /** Override component tokens: --float-accent, --float-border, --float-radius, --float-label-color */
  style?: CSSProperties & Record<string, string | number>
}

export function FloatingLabelInput({
  label,
  type = 'text',
  value,
  defaultValue,
  disabled = false,
  required = false,
  onChange,
  style,
}: FloatingLabelInputProps) {
  const id = useId()

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.value)
  }

  const inputProps =
    value !== undefined
      ? { value, onChange: handleChange }
      : { defaultValue }

  return (
    <div className={s.wrapper} data-disabled={disabled || undefined} style={style}>
      {/*
       * PATTERN: :not(:placeholder-shown) + :focus + adjacent sibling combinator
       * placeholder=" " (single space) is required — it gives :placeholder-shown
       * something to match so its negation fires when the input has real content.
       * The label immediately follows the input so input:focus + .label and
       * input:not(:placeholder-shown) + .label both resolve correctly.
       */}
      <input
        id={id}
        type={type}
        className={s.input}
        placeholder=" "
        disabled={disabled}
        required={required}
        {...inputProps}
      />
      <label htmlFor={id} className={s.label}>
        {label}
      </label>
    </div>
  )
}
