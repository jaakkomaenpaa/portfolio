import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

import DraggableWindow from './DraggableWindow'
import { useWindowStore } from '../stores/WindowStore'
import { App } from '../types'
import { useDesktopStore } from '../stores/DesktopStore'
import DesktopApp from './DesktopApp'
import { DragEvent } from 'react'

const StyledDesktop = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '100%',
  width: '100%',
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  padding: 0,
  color: theme.palette.text.primary,
  overflow: 'hidden',
}))

const Desktop = () => {
  const { desktopApps, addAppToDesktop } = useDesktopStore()
  const { windows, closeWindow } = useWindowStore()

  const handleDrop = (event: DragEvent) => {
    event.preventDefault()
    const appData = event.dataTransfer?.getData('application/json')
    if (appData) {
      const app: App = JSON.parse(appData)
      addAppToDesktop({ ...app, position: { x: event.clientX, y: event.clientY } })
    }
  }

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault()
  }

  return (
    <StyledDesktop onDrop={handleDrop} onDragOver={handleDragOver}>
      {desktopApps.map((app: App) => (
        <DesktopApp key={app.id} app={app} />
      ))}

      {windows.map((window) => (
        <DraggableWindow key={window.id} window={window} closeWindow={closeWindow} />
      ))}
    </StyledDesktop>
  )
}

export default Desktop
