import { useThemeStore } from '../store/themeStore'
import s from './ThemeToggle.module.css'

export function ThemeToggle() {
  const { theme, toggle } = useThemeStore()
  return (
    <button
      className={s.btn}
      onClick={toggle}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? '☀︎' : '☽'}
    </button>
  )
}
