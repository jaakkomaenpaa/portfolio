import { Box, Divider, IconButton, styled, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'

const NotificationBarContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  right: 0,
  height: '100vh',
  width: '300px',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[5],
  display: 'flex',
  flexDirection: 'column',
  transform: 'translateX(100%)',
  transition: 'transform 0.2s ease-in-out',
  zIndex: 1200,
}))

const NotificationItem = styled(Box)(({ theme }) => ({
  padding: '16px',
  borderBottom: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
}))

interface Notification {
  id: number
  message: string
}

interface NotificationBarProps {
  open: boolean
  toggleOpen: () => void
}

const NotificationBar = ({ open, toggleOpen }: NotificationBarProps) => {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, message: 'You have a new message.' },
    { id: 2, message: 'Your update was successful.' },
    { id: 3, message: 'A new task was assigned to you.' },
  ])

  if (!open) return <NotificationBarContainer />

  return (
    <NotificationBarContainer
      sx={{ transform: open ? 'translateX(0)' : 'translateX(100%)' }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
        <Typography variant='h6'>Notifications</Typography>
        <IconButton onClick={toggleOpen}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box sx={{ overflowY: 'auto', flex: 1 }}>
        {notifications.map((notification) => (
          <NotificationItem key={notification.id}>
            <Typography>{notification.message}</Typography>
          </NotificationItem>
        ))}
      </Box>
    </NotificationBarContainer>
  )
}

export default NotificationBar
