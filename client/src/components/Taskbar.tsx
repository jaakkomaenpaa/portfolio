import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import StartMenu from './StartMenu'

const Taskbar = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date())
  const [openMenu, setOpenMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev)
  }

  const closeMenu = () => {
    setOpenMenu(false)
  }

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <AppBar
      position='fixed'
      elevation={0}
      sx={{
        top: 'auto',
        bottom: 0,
        backgroundColor: 'background.paper',
        color: 'text.primary',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
      }}
    >
      <Toolbar>
        {openMenu && (
          <div ref={menuRef}>
            <StartMenu />
          </div>
        )}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color='inherit' size='large' onClick={toggleMenu}>
            <MenuIcon sx={{ fontSize: 32 }} />
          </IconButton>
        </Box>

        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Typography variant='body2'>App 1</Typography>
          <Typography variant='body2'>App 2</Typography>
          <Typography variant='body2'>App 3</Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton color='inherit' size='small'>
            <NotificationsIcon />
          </IconButton>

          <IconButton color='inherit' size='small'>
            <BatteryChargingFullIcon />
          </IconButton>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AccessTimeIcon sx={{ mr: 0.5 }} />
            <Typography variant='body2'>
              {currentTime.toLocaleTimeString()}
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Taskbar
