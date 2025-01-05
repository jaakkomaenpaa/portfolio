import { Box, CssBaseline, styled, ThemeProvider } from '@mui/material'
import Taskbar from './components/Taskbar'
import Desktop from './components/Desktop'
import { useThemeStore } from './stores/ThemeStore'
import { darkTheme, lightTheme } from './theme'
import MobileWarning from './components/MobileWarning'
import { useState } from 'react'
import Notification from './components/Notification'

const AppContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
}))

const App = () => {
  const { isDarkMode } = useThemeStore()
  const [notifications, setNotifications] = useState<string[]>([])

  const removeNotification = (index: number) => {
    setNotifications((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <MobileWarning />
      <AppContainer>
        <Desktop />
        <Taskbar />

        {notifications.map((message, index) => (
          <Notification
            key={index}
            message={message}
            onClose={() => removeNotification(index)}
          />
        ))}
      </AppContainer>
    </ThemeProvider>
  )
}
export default App

/* 


*/
