import { Fragment, useId, type ChangeEvent, type CSSProperties } from 'react'
import s from './SegmentedControl.module.css'

export interface SegmentedOption {
  value: string
  label: string
  disabled?: boolean
}

interface SegmentedControlProps {
  options: SegmentedOption[]
  /** Controlled selected value */
  value?: string
  /** Uncontrolled initial value */
  defaultValue?: string
  /** Radio group name — auto-generated if omitted */
  name?: string
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  onChange?: (value: string) => void
  /** Override component tokens: --seg-active-bg, --seg-active-text, --seg-border, --seg-radius */
  style?: CSSProperties & Record<string, string | number>
}

export function SegmentedControl({
  options,
  value,
  defaultValue,
  name,
  size = 'md',
  disabled = false,
  onChange,
  style,
}: SegmentedControlProps) {
  const uid = useId()
  const groupName = name ?? uid

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.value)
  }

  return (
    <div
      className={s.root}
      data-size={size}
      data-disabled={disabled || undefined}
      role="group"
      style={style}
    >
      {options.map((option, i) => {
        const id = `${uid}-${i}`
        const isDisabled = disabled || !!option.disabled
        const inputProps =
          value !== undefined
            ? { checked: value === option.value, onChange: handleChange }
            : { defaultChecked: defaultValue === option.value }

        return (
          <Fragment key={option.value}>
            {/*
             * PATTERN: hidden radio + adjacent sibling combinator
             * The input stays in the DOM (visually hidden via clip) so arrow-key
             * navigation and screen readers work. CSS handles every visual state
             * via input:checked + label, input:disabled + label, input:focus-visible + label.
             */}
            <input
              id={id}
              type="radio"
              className={s.input}
              name={groupName}
              value={option.value}
              disabled={isDisabled}
              {...inputProps}
            />
            <label htmlFor={id} className={s.label}>
              {option.label}
            </label>
          </Fragment>
        )
      })}
    </div>
  )
}
