import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

interface UseThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme(): UseThemeResult {
  const { setTheme, theme } = useContext(ThemeContext)

  const toggleTheme = () => {
    let newTheme: Theme

    switch (theme) {
      case Theme.DARK: {
        newTheme = Theme.LIGHT
        break
      }
      case Theme.LIGHT: {
        newTheme = Theme.ORANGE
        break
      }
      case Theme.ORANGE: {
        newTheme = Theme.DARK
        break
      }
      default: {
        newTheme = Theme.LIGHT
      }
    }

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    document.body.className = newTheme
    setTheme?.(newTheme)
  }

  return {
    toggleTheme,
    theme: theme || Theme.LIGHT,
  }
}
