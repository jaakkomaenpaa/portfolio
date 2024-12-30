import { Box, CssBaseline, styled, ThemeProvider } from '@mui/material'
import Taskbar from './components/Taskbar'
import Desktop from './components/Desktop'
import { useThemeStore } from './stores/ThemeStore'
import { darkTheme, lightTheme } from './theme'
import { useEffect } from 'react'
import MobileWarning from './components/MobileWarning'

const AppContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
}))

const App = () => {
  const { isDarkMode } = useThemeStore()

  useEffect(() => {
    const preventParentScroll = (e: WheelEvent) => {
      if (e.target instanceof HTMLElement) {
        // Prevent scrolling when inside the CommandLine component
        if (e.target.closest('.command-line') !== null) {
          e.preventDefault()
        }
      }
    }

    window.addEventListener('wheel', preventParentScroll, { passive: false })
    return () => {
      window.removeEventListener('wheel', preventParentScroll)
    }
  }, [])

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <MobileWarning />
      <AppContainer>
        <Desktop />
        <Taskbar />
      </AppContainer>
    </ThemeProvider>
  )
}
export default App

/* 


*/
