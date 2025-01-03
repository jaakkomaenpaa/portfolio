import { Box, CssBaseline, styled, ThemeProvider } from '@mui/material'
import Taskbar from './components/Taskbar'
import Desktop from './components/Desktop'
import { useThemeStore } from './stores/ThemeStore'
import { darkTheme, lightTheme } from './theme'
import MobileWarning from './components/MobileWarning'

const AppContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
}))

const App = () => {
  const { isDarkMode } = useThemeStore()

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
