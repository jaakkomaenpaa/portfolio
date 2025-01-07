import { Box, Button, Typography } from '@mui/material'
import { useWindowStore } from '../stores/WindowStore'
import { styled } from '@mui/system'

const InfoSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
  backgroundColor: theme.palette.background.paper,
  padding: 16,
}))

const TextRow = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'right',
})

const StartupWindow = () => {
  return (
    <Box sx={{ padding: '16px' }}>
      <Typography sx={{ mb: 1 }}>General</Typography>
      <Typography sx={{ mb: 3, color: 'text.secondary' }}>
        Started working in a 4-person startup in April 2024 alongside studies as a
        side project.
      </Typography>
      <Typography sx={{ mb: 1 }}>Product</Typography>
      <Typography sx={{ mb: 3, color: 'text.secondary' }}>
        A mobile app designed to ease law interpretation in a certain field of work.
        Cannot reveal more before launch (in January 2025?).
      </Typography>
      <Typography sx={{ mb: 1 }}>Role</Typography>
      <Typography sx={{ mb: 3, color: 'text.secondary' }}>
        My role is a software developer and I have had the main responsibility in
        developing our mobile app and website.
      </Typography>
    </Box>
  )
}

const Experience = () => {
  const { openWindow } = useWindowStore()

  return (
    <Box sx={{ padding: '16px' }}>
      <InfoSection>
        <TextRow>
          <Typography>Startup</Typography>
          <Typography sx={{ color: 'text.secondary' }}>April 2024 -</Typography>
          <Button
            variant='outlined'
            sx={{
              cursor: 'pointer',
            }}
            onClick={() => openWindow('Startup', <StartupWindow />)}
          >
            Details
          </Button>
        </TextRow>
      </InfoSection>
    </Box>
  )
}

export default Experience
