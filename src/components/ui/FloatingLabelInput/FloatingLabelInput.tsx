import { useId, type ChangeEvent, type CSSProperties } from 'react'
import s from './FloatingLabelInput.module.css'

interface FloatingLabelInputProps {
  label: string
  type?: 'text' | 'email' | 'password' | 'search' | 'tel' | 'url'
  value?: string
  defaultValue?: string
  disabled?: boolean
  required?: boolean
  /** Programmatic error message — renders via label::after content: attr(data-error) */
  error?: string
  onChange?: (value: string) => void
  /** Override component tokens: --float-accent, --float-border, --float-radius, --float-label-color, --float-error */
  style?: CSSProperties & Record<string, string | number>
}

export function FloatingLabelInput({
  label,
  type = 'text',
  value,
  defaultValue,
  disabled = false,
  required = false,
  error,
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
    <div
      className={s.wrapper}
      data-disabled={disabled || undefined}
      data-invalid={error ? true : undefined}
      style={style}
    >
      {/*
       * PATTERN: :not(:placeholder-shown) + :focus + adjacent sibling combinator
       * placeholder=" " (single space) is required — it gives :placeholder-shown
       * something to match so its negation fires when the input has real content.
       * The label immediately follows the input so input:focus + .label and
       * input:not(:placeholder-shown) + .label both resolve correctly.
       *
       * VALIDATION: error prop → data-invalid on wrapper → CSS targets
       * .wrapper[data-invalid] .input (red border) and .errorMessage span (shown).
       */}
      <input
        id={id}
        type={type}
        className={s.input}
        placeholder=" "
        disabled={disabled}
        required={required}
        aria-describedby={error ? `${id}-error` : undefined}
        {...inputProps}
      />
      <label htmlFor={id} className={s.label}>
        {label}
      </label>
      <span id={`${id}-error`} className={s.errorMessage} role="alert" aria-live="polite">
        {error}
      </span>
    </div>
  )
}
