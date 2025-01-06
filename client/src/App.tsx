import { Box, CssBaseline, styled, ThemeProvider } from '@mui/material'
import { useEffect } from 'react'

import Taskbar from './components/Taskbar'
import Desktop from './components/Desktop'
import { useThemeStore } from './stores/ThemeStore'
import { darkTheme, lightTheme } from './theme'
import MobileWarning from './components/MobileWarning'
import NotificationWindow from './components/NotificationWindow'
import { useNotificationStore } from './stores/NotificationStore'
import adviceService from './services/advice'

const AppContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
}))

const App = () => {
  const { isDarkMode } = useThemeStore()
  const {
    activeNotifications,
    closeNotification,
    showNotification,
    pollerIntervalMs,
  } = useNotificationStore()

  useEffect(() => {
    const poller = setInterval(async () => {
      const randomChance = Math.random()
      if (randomChance <= 0.2) {
        const advice = await adviceService.getRandom()
        showNotification(advice)
      }
    }, pollerIntervalMs)

    return () => clearInterval(poller)
  }, [])

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <MobileWarning />
      <AppContainer>
        <Desktop />
        <Taskbar />

        {activeNotifications.map((notification) => (
          <NotificationWindow
            key={notification.id}
            message={notification.message}
            onClose={() => closeNotification(notification.id)}
          />
        ))}
      </AppContainer>
    </ThemeProvider>
  )
}
export default App
