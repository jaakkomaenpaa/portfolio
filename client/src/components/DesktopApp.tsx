import Draggable from 'react-draggable'
import { useRef } from 'react'
import { Box, styled, Typography } from '@mui/material'

import { DesktopItem } from '../types'
import { useDesktopStore } from '../stores/DesktopStore'

import { useWindowStore } from '../stores/WindowStore'
import { DIMENSIONS } from '../config'
import ItemContextMenu from './ItemContextMenu'
import { useContextMenu } from '../hooks/useContextMenu'
import { PROGRAM_ICONS, runProgram } from '../system/utils'
import { resolveDesktopItemPosition } from '../utils'

const { FOLDER_SIZE, BOUNDS } = DIMENSIONS

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
    runProgram(item, openWindow)
  }

  return (
    <>
      <Draggable
        nodeRef={appRef}
        position={app.position}
        bounds={BOUNDS}
        disabled={draggable}
        onStop={(_, data) => {
          const resolvedPosition = resolveDesktopItemPosition(desktopItems, app.id, {
            x: data.x,
            y: data.y,
          })
          updateItemPosition(app.id, resolvedPosition)
        }}
      >
        <div ref={appRef} onContextMenu={openMenu}>
          <AppIcon onDoubleClick={() => handleOpenItem(app)}>
            {PROGRAM_ICONS[app.iconKey]({ fontSize: 'large' })}
            <Typography variant='body2' sx={{ textAlign: 'center' }}>
              {app.fileName}
            </Typography>
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
