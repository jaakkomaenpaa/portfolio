import { create } from 'zustand'

interface ThemeState {
  isDarkMode: boolean
  toggleTheme: () => void
}

const savedTheme = localStorage.getItem('isDarkMode') === 'true'

export const useThemeStore = create<ThemeState>((set) => ({
  isDarkMode: savedTheme || false,
  toggleTheme: () =>
    set((state) => {
      const newMode = !state.isDarkMode
      localStorage.setItem('isDarkMode', newMode.toString())
      return { isDarkMode: newMode }
    }),
}))
