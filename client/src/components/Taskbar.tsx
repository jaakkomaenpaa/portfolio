import { Box, IconButton, Typography } from '@mui/material'
import { DragEvent, useEffect, useState } from 'react'
import SettingsIcon from '@mui/icons-material/Settings'
import NotificationsIcon from '@mui/icons-material/Notifications'
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

import { DIMENSIONS } from '../config'
import TaskbarApp from './TaskbarApp'
import { useTaskbarStore } from '../stores/TaskbarStore'
import { FileSystemNode } from '../types'
import { useWindowStore } from '../stores/WindowStore'
import { runProgram } from '../system/utils'
import { PROGRAMS } from '../system/programs'
import NotificationBar from './NotificationBar'

const { TASKBAR_HEIGHT } = DIMENSIONS

const Taskbar = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date())
  const [notificationsOpen, setNotificationsOpen] = useState<boolean>(false)
  const { taskbarItems, addItemToTaskbar } = useTaskbarStore()
  const { openWindow } = useWindowStore()

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen)
  }

  const openSettings = () => {
    runProgram(PROGRAMS.settings, openWindow)
  }

  const handleDrop = (event: DragEvent) => {
    event.preventDefault()
    const itemData = event.dataTransfer?.getData('application/json')

    if (itemData) {
      const item: FileSystemNode = JSON.parse(itemData)
      addItemToTaskbar(item)
    }
  }

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault()
  }

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.primary',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        paddingX: '12px',
        height: TASKBAR_HEIGHT,
        position: 'relative',
      }}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <IconButton color='inherit' size='small' onClick={openSettings}>
        <SettingsIcon sx={{ fontSize: '32px' }} />
      </IconButton>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexGrow: 1,
          gap: 2,
        }}
      >
        {taskbarItems.map((item) => (
          <Box sx={{ cursor: 'pointer' }} key={item.id}>
            <TaskbarApp key={item.id} app={item} />
          </Box>
        ))}
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <IconButton color='inherit' size='small' onClick={toggleNotifications}>
          <NotificationsIcon />
        </IconButton>
        <NotificationBar open={notificationsOpen} toggleOpen={toggleNotifications} />
        <IconButton color='inherit' size='small'>
          <BatteryChargingFullIcon />
        </IconButton>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <AccessTimeIcon sx={{ mr: 0.5 }} />
          <Typography variant='body2'>{currentTime.toLocaleTimeString()}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Taskbar
