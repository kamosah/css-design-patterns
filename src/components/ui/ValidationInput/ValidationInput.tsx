import { useId, type ChangeEvent, type CSSProperties } from 'react'
import s from './ValidationInput.module.css'

interface ValidationInputProps {
  placeholder?: string
  value?: string
  defaultValue?: string
  disabled?: boolean
  required?: boolean
  id?: string
  /** Override component tokens: --valid-color, --invalid-color, --input-border, --input-radius, --input-width */
  style?: CSSProperties & Record<string, string | number>
  onChange?: (value: string) => void
}

export function ValidationInput({
  placeholder = 'Enter your email',
  value,
  defaultValue,
  disabled = false,
  required = true,
  id: externalId,
  style,
  onChange,
}: ValidationInputProps) {
  const generatedId = useId()
  const id = externalId ?? generatedId

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.value)
  }

  const inputProps =
    value !== undefined
      ? { value, onChange: handleChange }
      : { defaultValue }

  return (
    /*
     * PATTERN: CSS :has() for pure-CSS validation state
     * The wrapper detects its child input's :valid/:invalid state via :has(),
     * driving both the border-color and the ::after icon without any JS.
     *
     * :not(:placeholder-shown) gates feedback so icons only appear after
     * the user has started typing — avoiding red state on empty required fields.
     *
     * PATTERN: ::after icon on the wrapper
     * The icon lives on .wrapper::after (not the input itself — inputs can't
     * have pseudo-elements). pointer-events: none keeps it non-interactive.
     */
    <div className={s.wrapper} style={style}>
      <input
        id={id}
        type="email"
        className={s.input}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        aria-label={placeholder}
        {...inputProps}
      />
    </div>
  )
}
