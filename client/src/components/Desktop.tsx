import { Box } from '@mui/material'
import { styled } from '@mui/system'

import DraggableWindow from './DraggableWindow'
import { useWindowStore } from '../stores/WindowStore'
import { App } from '../types'
import { useDesktopStore } from '../stores/DesktopStore'
import DesktopApp from './DesktopApp'

const StyledDesktop = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  flexWrap: 'wrap',
  padding: '16px',
  color: theme.palette.text.primary,
}))

const Desktop = () => {
  const { desktopApps } = useDesktopStore()
  const { windows, actions } = useWindowStore()
  const { closeWindow } = actions

  return (
    <StyledDesktop>
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
