import { Box, Button, styled, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { DIMENSIONS } from '../config'
import { useNotificationStore } from '../stores/NotificationStore'

const NotificationContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: DIMENSIONS.TASKBAR_HEIGHT,
  right: '10px',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[4],
  padding: '16px',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  maxWidth: '400px',
  zIndex: 1500,
  opacity: 0,
  transform: 'translateY(20px)',
  transition: 'opacity 0.3s, transform 0.3s',
  '&.fadeIn': {
    opacity: 1,
    transform: 'translateY(0)',
  },
  '&.fadeOut': {
    opacity: 0,
    transform: 'translateY(20px)',
  },
}))

interface NotificationWindowProps {
  message: string
  onClose: () => void
}

const NotificationWindow = ({ message, onClose }: NotificationWindowProps) => {
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const { notificationDurationMs } = useNotificationStore()

  useEffect(() => {
    const fadeInTimer = setTimeout(() => setIsVisible(true), 10)

    const fadeOutTimer = setTimeout(
      () => setIsFadingOut(true),
      notificationDurationMs - 300
    )

    const closeTimer = setTimeout(() => onClose(), notificationDurationMs)

    return () => {
      clearTimeout(fadeInTimer)
      clearTimeout(fadeOutTimer)
      clearTimeout(closeTimer)
    }
  }, [onClose])

  return (
    <NotificationContainer
      className={`${isVisible ? 'fadeIn' : ''} ${isFadingOut ? 'fadeOut' : ''}`}
    >
      <Typography>{message}</Typography>
      <Button size='small' variant='text' onClick={onClose}>
        Close
      </Button>
    </NotificationContainer>
  )
}

export default NotificationWindow
