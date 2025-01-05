import { Box, CssBaseline, styled, ThemeProvider } from '@mui/material'
import Taskbar from './components/Taskbar'
import Desktop from './components/Desktop'
import { useThemeStore } from './stores/ThemeStore'
import { darkTheme, lightTheme } from './theme'
import MobileWarning from './components/MobileWarning'
import Notification from './components/NotificationWindow'
import { useNotificationStore } from './stores/NotificationStore'

const AppContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
}))

const App = () => {
  const { isDarkMode } = useThemeStore()
  const { activeNotifications, closeNotification } = useNotificationStore()

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <MobileWarning />
      <AppContainer>
        <Desktop />
        <Taskbar />

        {activeNotifications.map((notification, index) => (
          <Notification
            key={index}
            message={notification.message}
            onClose={() => closeNotification(notification.id)}
          />
        ))}
      </AppContainer>
    </ThemeProvider>
  )
}
export default App

/* 


*/
