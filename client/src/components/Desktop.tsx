import { Box } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'

import DraggableWindow from './DraggableWindow'
import { useWindowStore } from '../stores/WindowStore'
import { DesktopItem } from '../types'
import { useDesktopStore } from '../stores/DesktopStore'
import DesktopApp from './DesktopApp'
import { DragEvent } from 'react'
import { useWallpaperStore } from '../stores/WallpaperStore'

const StyledDesktop = styled(Box)(
  ({ theme, wallpaper }: { theme?: any; wallpaper: string }) => ({
    position: 'relative',
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.background.default,
    backgroundImage: wallpaper ? `url(${wallpaper})` : 'none',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    padding: 0,
    color: theme.palette.text.primary,
    overflow: 'hidden',
  })
)

const Desktop = () => {
  const { desktopItems, addItemToDesktop } = useDesktopStore()
  const { windows, closeWindow } = useWindowStore()
  const { getWallpaper } = useWallpaperStore()
  const theme = useTheme()

  const wallpaper = getWallpaper(theme.palette.mode)

  const handleDrop = (event: DragEvent) => {
    event.preventDefault()
    const itemData = event.dataTransfer?.getData('application/json')
    if (itemData) {
      const item: DesktopItem = JSON.parse(itemData)
      addItemToDesktop({ ...item, position: { x: event.clientX, y: event.clientY } })
    }
  }

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault()
  }

  return (
    <StyledDesktop
      wallpaper={wallpaper.src}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {desktopItems.map((item: DesktopItem) => (
        <DesktopApp key={item.id} app={item} />
      ))}

      {windows.map((window) => (
        <DraggableWindow key={window.id} window={window} closeWindow={closeWindow} />
      ))}
    </StyledDesktop>
  )
}

export default Desktop
