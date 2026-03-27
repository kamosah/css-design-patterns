import { useState, type CSSProperties } from 'react'
import s from './RangeSlider.module.css'

interface RangeSliderProps {
  min?: number
  max?: number
  step?: number
  /** Uncontrolled default value */
  defaultValue?: number
  /** Controlled value */
  value?: number
  onChange?: (value: number) => void
  label?: string
  /** Show repeating-linear-gradient tick marks on the track */
  tickMarks?: boolean
  /** Show min / max numeric labels below the track (requires tickMarks) */
  showLabels?: boolean
  /** Override --range-track-color component token */
  trackColor?: string
  /** Override --range-thumb-color component token */
  thumbColor?: string
  /** Override --range-tick-color component token */
  tickColor?: string
  disabled?: boolean
  style?: CSSProperties & Record<string, string | number>
}

export function RangeSlider({
  min = 0,
  max = 100,
  step = 1,
  defaultValue,
  value,
  onChange,
  label,
  tickMarks = false,
  showLabels = false,
  trackColor,
  thumbColor,
  tickColor,
  disabled = false,
  style,
}: RangeSliderProps) {
  const tokenOverrides: Record<string, string | number> = {}
  if (trackColor) tokenOverrides['--range-track-color'] = trackColor
  if (thumbColor) tokenOverrides['--range-thumb-color'] = thumbColor
  if (tickColor)  tokenOverrides['--range-tick-color']  = tickColor

  /*
   * Tick count is set as a CSS variable on the <input> so that
   * ::-webkit-slider-runnable-track and ::-moz-range-track can read it
   * via repeating-linear-gradient — pseudo-elements only inherit from
   * their own element, not from ancestors.
   */
  const tickCount = Math.round((max - min) / step) + 1
  if (tickMarks) tokenOverrides['--range-tick-count'] = tickCount

  const isControlled = value !== undefined
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue ?? min)

  const displayValue = isControlled ? value : uncontrolledValue

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const next = Number(e.target.value)
    if (!isControlled) setUncontrolledValue(next)
    onChange?.(next)
  }

  return (
    <div className={s.wrapper}>
      {label && (
        <div className={s.header}>
          <span className={s.label}>{label}</span>
          <span className={s.value}>{displayValue}</span>
        </div>
      )}
      <input
        type="range"
        className={s.range}
        min={min}
        max={max}
        step={step}
        data-tick-marks={tickMarks || undefined}
        {...(isControlled
          ? { value }
          : { defaultValue: defaultValue ?? min }
        )}
        onChange={handleChange}
        disabled={disabled}
        style={{ ...tokenOverrides, ...style }}
      />
      {showLabels && (
        <div className={s.tickLabels}>
          <span>{min}</span>
          <span>{max}</span>
        </div>
      )}
    </div>
  )
}
