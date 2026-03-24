import { type CSSProperties, type ChangeEvent } from 'react'
import s from './SearchInput.module.css'

interface SearchInputProps {
  placeholder?: string
  value?: string
  defaultValue?: string
  disabled?: boolean
  autoFocus?: boolean
  onChange?: (value: string) => void
  /** Override component tokens: --search-accent, --search-border, --search-radius, --search-width, --search-width-focus, --search-icon-color */
  style?: CSSProperties & Record<string, string | number>
}

export function SearchInput({
  placeholder = 'Search...',
  value,
  defaultValue,
  disabled = false,
  autoFocus = false,
  onChange,
  style,
}: SearchInputProps) {
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
       * PATTERN: ::before on the wrapper injects the magnifier icon.
       * pointer-events: none on the pseudo-element lets clicks fall through
       * to the input. The native WebKit search decorations (clear button,
       * search icon) are suppressed via ::-webkit-search-* pseudo-elements
       * so the custom icon is the only affordance visible.
       */}
      <input
        type="search"
        className={s.input}
        placeholder={placeholder}
        disabled={disabled}
        autoFocus={autoFocus}
        aria-label={placeholder}
        {...inputProps}
      />
    </div>
  )
}
