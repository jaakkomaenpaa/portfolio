import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Slider,
  styled,
  Switch,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { useThemeStore } from '../stores/ThemeStore'
import { useWallpaperStore } from '../stores/WallpaperStore'
import { Wallpaper } from '../types'
import { useState } from 'react'
import { TIMERS } from '../config'
import { useNotificationStore } from '../stores/NotificationStore'

const StyledSetting = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.paper,
  padding: '8px 16px',
}))

const Settings = () => {
  const { toggleTheme } = useThemeStore()
  const { selectedWallpaper, wallpaperOptions, setWallpaper } = useWallpaperStore()
  const {
    pollerIntervalMs,
    notificationDurationMs,
    notificationsDisabled,
    setPollerIntervalMs,
    setNotificationDurationMs,
    setNotificationsDisabled,
  } = useNotificationStore()

  const [pollerValue, setPollerValue] = useState(pollerIntervalMs)
  const [notificationValue, setNotificationValue] = useState(notificationDurationMs)

  const clearLocalStorage = () => {
    localStorage.clear()
    window.location.reload()
  }

  const handlePollerChange = (value: number) => {
    if (value < notificationDurationMs) {
      setNotificationValue(value)
      setNotificationDurationMs(value)
    }

    setPollerValue(value)
    setPollerIntervalMs(value)
  }

  const handleNotificationChange = (value: number) => {
    setNotificationValue(value)
    setNotificationDurationMs(value)
  }

  const handleNotificationToggle = () => {
    setNotificationsDisabled(!notificationsDisabled)
  }

  return (
    <Box
      sx={{
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 0.5,
      }}
    >
      <StyledSetting sx={{ paddingY: '6px' }}>
        <Typography variant='body1'>Theme</Typography>
        <Button
          variant='outlined'
          sx={{
            cursor: 'pointer',
          }}
          onClick={toggleTheme}
        >
          Toggle
        </Button>
      </StyledSetting>

      <StyledSetting sx={{ paddingY: '6px' }}>
        <Typography variant='body1'> Local storage</Typography>
        <Button
          variant='text'
          color='error'
          sx={{
            color: 'text.error',
            cursor: 'pointer',
          }}
          onClick={clearLocalStorage}
        >
          Clear
        </Button>
      </StyledSetting>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='status-content'
          id='status-header'
          sx={{
            backgroundColor: 'background.paper',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={{ color: 'text.primary' }}>Wallpaper</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: 'background.paper',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
          }}
        >
          {wallpaperOptions.map((wallpaper: Wallpaper) => (
            <Button
              key={wallpaper.id}
              variant={
                selectedWallpaper.id === wallpaper.id ? 'contained' : 'outlined'
              }
              sx={{
                cursor: 'pointer',
              }}
              onClick={() => setWallpaper(wallpaper)}
            >
              {wallpaper.name}
            </Button>
          ))}
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='advanced-settings-content'
          id='advanced-settings-header'
          sx={{
            backgroundColor: 'background.paper',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={{ color: 'text.primary' }}>Notifications</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: 'background.paper',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            color: 'text.secondary',
          }}
        >
          <StyledSetting sx={{ paddingY: '6px' }}>
            <Typography variant='body1'>Enable Notifications</Typography>
            <Switch
              checked={!notificationsDisabled}
              onChange={handleNotificationToggle}
              inputProps={{ 'aria-label': 'Enable notifications' }}
            />
          </StyledSetting>
          {!notificationsDisabled && (
            <>
              <StyledSetting sx={{ paddingY: '6px', display: 'flex', gap: 2 }}>
                <Typography variant='body1'>Poller interval (ms)</Typography>
                <Slider
                  value={pollerValue}
                  onChange={(_, value) => setPollerValue(value as number)}
                  onChangeCommitted={(_, value) =>
                    handlePollerChange(value as number)
                  }
                  min={5000}
                  max={TIMERS.POLL_INTERVAL * 1.5}
                  step={5000}
                  valueLabelDisplay='auto'
                />
                <Typography>{pollerValue}</Typography>
              </StyledSetting>

              <StyledSetting sx={{ paddingY: '6px', display: 'flex', gap: 2 }}>
                <Typography variant='body1'>Duration (ms)</Typography>
                <Slider
                  value={notificationValue}
                  onChange={(_, value) => setNotificationValue(value as number)}
                  onChangeCommitted={(_, value) =>
                    handleNotificationChange(value as number)
                  }
                  min={1000}
                  max={TIMERS.NOTIFICATION_DURATION * 1.5}
                  step={1000}
                  valueLabelDisplay='auto'
                />
                <Typography>{notificationValue}</Typography>
              </StyledSetting>
            </>
          )}
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default Settings
