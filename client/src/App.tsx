import { Box, Button, CssBaseline, styled, ThemeProvider } from '@mui/material'
import Taskbar from './components/Taskbar'
import Desktop from './components/Desktop'
import { useThemeStore } from './stores/ThemeStore'
import { darkTheme, lightTheme } from './theme'
import { useEffect } from 'react'

const AppContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
}))

const App = () => {
  const { isDarkMode, toggleTheme } = useThemeStore()

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
      <AppContainer>
        <Desktop />
        <Taskbar />

        <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
          <Button variant='contained' onClick={toggleTheme}>
            Toggle Theme
          </Button>
        </Box>
      </AppContainer>
    </ThemeProvider>
  )
}
export default App

/* 


*/
