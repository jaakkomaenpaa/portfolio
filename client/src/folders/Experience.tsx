import { Box, Button, Typography } from '@mui/material'
import { useWindowStore } from '../stores/WindowStore'

const StartupWindow = () => {
  return (
    <Box>
      <Typography sx={{ mb: 1, color: 'text.secondary' }}>General</Typography>
      <Typography sx={{ mb: 3 }}>
        Started working in a 4-person startup in April 2024 alongside studies as a
        side business.
      </Typography>
      <Typography sx={{ mb: 1, color: 'text.secondary' }}>Role</Typography>
      <Typography sx={{ mb: 3 }}>
        My role is a software developer and I have had the main responsibility in
        developing our mobile app and website.
      </Typography>
      <Typography sx={{ mb: 1, color: 'text.secondary' }}>Other</Typography>
      <Typography sx={{ mb: 3 }}>
        Cannot disclose the name and product until launch in January 2025.
      </Typography>
    </Box>
  )
}

const Experience = () => {
  const { openWindow } = useWindowStore()

  return (
    <Box>
      <Button
        variant='outlined'
        sx={{
          mb: 1,
          color: 'text.primary',
          cursor: 'pointer',
        }}
        onClick={() => openWindow('Startup', <StartupWindow />)}
      >
        Startup
      </Button>
    </Box>
  )
}

export default Experience
