import { useSyncExternalStore } from 'react'
import type { ReactNode } from 'react'
import styles from '../styles/ThemeToggle.module.css'

type Mode = 'light' | 'dark' | 'system'

const THEME_KEY = 'ksw-theme'
const CHANGE_EVENT = 'ksw-theme-change'

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback)
  window.addEventListener(CHANGE_EVENT, callback)
  return () => {
    window.removeEventListener('storage', callback)
    window.removeEventListener(CHANGE_EVENT, callback)
  }
}

function getSnapshot(): Mode {
  const t = document.documentElement.getAttribute('data-theme')
  return t === 'light' || t === 'dark' ? t : 'system'
}

function getServerSnapshot(): Mode {
  return 'system'
}

const modes: { value: Mode; label: string; icon: ReactNode }[] = [
  {
    value: 'system',
    label: 'Motyw: systemowy',
    icon: (
      <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    value: 'light',
    label: 'Motyw: jasny',
    icon: (
      <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    ),
  },
  {
    value: 'dark',
    label: 'Motyw: ciemny',
    icon: (
      <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
  },
]

export default function ThemeToggle({ className }: { className?: string }) {
  const mode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const apply = (next: Mode) => {
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem(THEME_KEY, next)
    window.dispatchEvent(new Event(CHANGE_EVENT))
  }

  return (
    <span
      className={className ? `${styles.toggle} ${className}` : styles.toggle}
      role="group"
      aria-label="Wybór motywu"
    >
      {modes.map((m) => (
        <button
          key={m.value}
          type="button"
          className={styles.btn}
          aria-pressed={mode === m.value}
          aria-label={m.label}
          title={m.label}
          onClick={() => apply(m.value)}
        >
          {m.icon}
        </button>
      ))}
    </span>
  )
}
