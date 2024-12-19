import Draggable from 'react-draggable'
import { useRef, useState } from 'react'
import { Box, Menu, MenuItem, styled, Typography } from '@mui/material'

import { App, Position } from '../types'
import { useDesktopStore } from '../stores/DesktopStore'
import { PROGRAM_CONTENTS, PROGRAM_ICONS } from '../programs'
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
  const { desktopApps, updateAppPosition, removeAppFromDesktop } = useDesktopStore()
  const { openWindow } = useWindowStore()
  const appRef = useRef<HTMLDivElement>(null)
  const [menuAnchor, setMenuAnchor] = useState<{
    mouseX: number
    mouseY: number
  } | null>(null)

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault()
    setMenuAnchor({
      mouseX: event.clientX + 2,
      mouseY: event.clientY - 6,
    })
  }

  const handleCloseMenu = () => {
    setMenuAnchor(null)
  }

  return (
    <>
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
        <div ref={appRef} onContextMenu={handleContextMenu}>
          <AppIcon
            onDoubleClick={() =>
              openWindow(app.title, PROGRAM_CONTENTS[app.contentKey])
            }
          >
            {PROGRAM_ICONS[app.iconKey]({ fontSize: 'large' })}
            <Typography variant='body2'>{app.title}</Typography>
          </AppIcon>
        </div>
      </Draggable>

      <Menu
        open={!!menuAnchor}
        onClose={handleCloseMenu}
        anchorReference='anchorPosition'
        anchorPosition={
          menuAnchor ? { top: menuAnchor.mouseY, left: menuAnchor.mouseX } : undefined
        }
      >
        <MenuItem
          onClick={() => {
            openWindow(app.title, PROGRAM_CONTENTS[app.contentKey])
            handleCloseMenu()
          }}
        >
          Open
        </MenuItem>
        <MenuItem
          onClick={() => {
            removeAppFromDesktop(app.id)
            handleCloseMenu()
          }}
        >
          Remove
        </MenuItem>
      </Menu>
    </>
  )
}

export default DesktopApp
