import { Box, Button, styled, Typography } from '@mui/material'
import { useEffect } from 'react'

const NotificationContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: '16px',
  right: '16px',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[4],
  padding: '16px',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  zIndex: 1000,
  animation: 'fadeIn 0.3s, fadeOut 0.3s 9.7s',
  '@keyframes fadeIn': {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
  '@keyframes fadeOut': {
    from: { opacity: 1, transform: 'translateY(0)' },
    to: { opacity: 0, transform: 'translateY(20px)' },
  },
}))

interface NotificationProps {
  message: string
  onClose: () => void
}

const Notification = ({ message, onClose }: NotificationProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 10000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <NotificationContainer>
      <Typography>{message}</Typography>
      <Button size='small' variant='text' onClick={onClose}>
        Close
      </Button>
    </NotificationContainer>
  )
}

export default Notification
