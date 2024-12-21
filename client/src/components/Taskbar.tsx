import { Box, IconButton, Typography } from '@mui/material'
import { DragEvent, useEffect, useState } from 'react'
import SettingsIcon from '@mui/icons-material/Settings'
import NotificationsIcon from '@mui/icons-material/Notifications'
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

import config from '../config'
import TaskbarApp from './TaskbarApp'
import { useTaskbarStore } from '../stores/TaskbarStore'
import { FileSystemNode } from '../types'
import { useWindowStore } from '../stores/WindowStore'
import { runProgram } from '../files/utils'
import { PROGRAMS } from '../files/programs'

const { TASKBAR_HEIGHT } = config

const Taskbar = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date())
  const { taskbarItems, addItemToTaskbar } = useTaskbarStore()
  const { openWindow } = useWindowStore()

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const openSettings = () => {
    const { contentKey, type } = PROGRAMS.settings
    runProgram(contentKey, type, openWindow)
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
        <IconButton color='inherit' size='small'>
          <NotificationsIcon />
        </IconButton>

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
