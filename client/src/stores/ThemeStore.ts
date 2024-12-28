import { create } from 'zustand'

interface ThemeStore {
  isDarkMode: boolean
  toggleTheme: () => void
}

const savedTheme = localStorage.getItem('isDarkMode') === 'true'

export const useThemeStore = create<ThemeStore>((set) => ({
  isDarkMode: savedTheme || true,
  toggleTheme: () =>
    set((state) => {
      const newMode = !state.isDarkMode
      localStorage.setItem('isDarkMode', newMode.toString())
      return { isDarkMode: newMode }
    }),
}))
