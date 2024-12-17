import { Box, Button, CssBaseline, ThemeProvider } from '@mui/material'
import Taskbar from './components/Taskbar'
import Desktop from './components/Desktop'
import { useThemeStore } from './stores/useThemeStore'
import { darkTheme, lightTheme } from './theme'

const App = () => {
  const { isDarkMode, toggleTheme } = useThemeStore()

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: 'background.default',
          color: 'text.primary',
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Desktop />
        </Box>

        <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
          <Button variant='contained' onClick={toggleTheme}>
            Toggle Theme
          </Button>
        </Box>

        <Taskbar />
      </Box>
    </ThemeProvider>
  )
}
export default App
