import Draggable from 'react-draggable'
import { useRef } from 'react'
import { Box, styled, Typography } from '@mui/material'

import { DesktopItem, Position } from '../types'
import { useDesktopStore } from '../stores/DesktopStore'

import { useWindowStore } from '../stores/WindowStore'
import config from '../config'
import ItemContextMenu from './ItemContextMenu'
import { useContextMenu } from '../hooks/useContextMenu'
import { PROGRAM_ICONS, runProgram } from '../files/utils'

const { GRID_SIZE_X, GRID_SIZE_Y, FOLDER_SIZE, BOUNDS } = config

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

const resolveCollision = (
  desktopItems: DesktopItem[],
  id: number,
  position: Position
) => {
  const adjustedPosition = { ...position }

  while (
    desktopItems.some(
      (item: DesktopItem) =>
        // Position should always exist at this point
        item.id !== id && isColliding(item.position!, adjustedPosition)
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
  app: DesktopItem
  draggable?: boolean
}

const DesktopApp = ({ app, draggable }: DesktopAppProps) => {
  const { desktopItems, updateItemPosition, removeItemFromDesktop } =
    useDesktopStore()
  const { openWindow } = useWindowStore()

  const appRef = useRef<HTMLDivElement>(null)
  const { menuAnchor, openMenu, closeMenu } = useContextMenu()

  const handleOpenItem = (item: DesktopItem) => {
    runProgram(item.contentKey, item.type, openWindow)
  }

  return (
    <>
      <Draggable
        key={app.id}
        nodeRef={appRef}
        position={app.position}
        bounds={BOUNDS}
        disabled={draggable}
        onStop={(_, data) => {
          const snappedPosition = snapToGrid(data.x, data.y)
          const resolvedPosition = resolveCollision(
            desktopItems,
            app.id,
            snappedPosition
          )
          updateItemPosition(app.id, resolvedPosition)
        }}
      >
        <div ref={appRef} onContextMenu={openMenu}>
          <AppIcon onDoubleClick={() => handleOpenItem(app)}>
            {PROGRAM_ICONS[app.iconKey]({ fontSize: 'large' })}
            <Typography variant='body2'>{app.title}</Typography>
          </AppIcon>
        </div>
      </Draggable>
      <ItemContextMenu
        parentItem={app}
        menuAnchor={menuAnchor}
        openItem={handleOpenItem}
        removeItem={removeItemFromDesktop}
        closeMenu={closeMenu}
      />
    </>
  )
}

export default DesktopApp
