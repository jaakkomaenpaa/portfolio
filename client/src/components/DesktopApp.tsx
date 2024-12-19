import Draggable from 'react-draggable'
import { useRef } from 'react'
import { Box, styled, Typography } from '@mui/material'

import { App, Position } from '../types'
import { useDesktopStore } from '../stores/DesktopStore'
import { ENTITY_ICONS, PROGRAM_CONTENTS } from '../programs'
import { useWindowStore } from '../stores/WindowStore'
import config from '../config'

const { GRID_SIZE_X, GRID_SIZE_Y, FOLDER_SIZE } = config

const AppIcon = styled(Box)({
  width: FOLDER_SIZE,
  height: FOLDER_SIZE,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  cursor: 'pointer',
  '&:hover': { opacity: 0.8 },
})

const snapToGrid = (x: number, y: number) => ({
  x: Math.round(x / GRID_SIZE_X) * GRID_SIZE_X,
  y: Math.round(y / GRID_SIZE_Y) * GRID_SIZE_Y,
})

const isColliding = (pos1: Position, pos2: Position) => {
  return (
    pos1.x < pos2.x + FOLDER_SIZE &&
    pos1.x + FOLDER_SIZE > pos2.x &&
    pos1.y < pos2.y + FOLDER_SIZE &&
    pos1.y + FOLDER_SIZE > pos2.y
  )
}

const resolveCollision = (desktopApps: App[], id: number, position: Position) => {
  const adjustedPosition = { ...position }

  while (
    desktopApps.some(
      (app: App) =>
        // Position should always exist at this point
        app.id !== id && isColliding(app.position!, adjustedPosition)
    )
  ) {
    adjustedPosition.x += FOLDER_SIZE
    if (adjustedPosition.x > window.innerWidth - FOLDER_SIZE) {
      adjustedPosition.x = 0
      adjustedPosition.y += FOLDER_SIZE
    }
  }

  return adjustedPosition
}

interface DesktopAppProps {
  app: App
}

const DesktopApp = ({ app }: DesktopAppProps) => {
  const { desktopApps, updateAppPosition } = useDesktopStore()
  const { actions } = useWindowStore()
  const { openWindow } = actions
  const appRef = useRef(null)

  return (
    <Draggable
      key={app.id}
      nodeRef={appRef}
      position={app.position}
      onStop={(_, data) => {
        const snappedPosition = snapToGrid(data.x, data.y)
        const resolvedPosition = resolveCollision(
          desktopApps,
          app.id,
          snappedPosition
        )
        updateAppPosition(app.id, resolvedPosition)
      }}
    >
      <div ref={appRef}>
        <AppIcon
          onDoubleClick={() => openWindow(app.title, PROGRAM_CONTENTS[app.content])}
        >
          {ENTITY_ICONS[app.icon]({ fontSize: 'large' })}
          <Typography variant='body2'>{app.title}</Typography>
        </AppIcon>
      </div>
    </Draggable>
  )
}

export default DesktopApp
