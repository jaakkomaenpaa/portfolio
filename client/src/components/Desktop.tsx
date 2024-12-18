import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'
import FolderIcon from '@mui/icons-material/Folder'
import Draggable from 'react-draggable'

import DraggableWindow from './DraggableWindow'
import { useWindowStore } from '../stores/WindowStore'
import { useFolderStore } from '../stores/FolderStore'
import { Folder } from '../types'

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

const AppIcon = styled(Box)({
  width: '80px',
  height: '80px',
  margin: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '&:hover': { opacity: 0.8 },
})

const Desktop = () => {
  const { folders, updateFolderPosition } = useFolderStore()
  const { windows, actions } = useWindowStore()
  const { openWindow, closeWindow } = actions

  return (
    <StyledDesktop>
      {folders.map((folder: Folder) => (
        <Draggable
          key={folder.id}
          position={folder.position}
          onStop={(_, data) =>
            updateFolderPosition(folder.id, { x: data.x, y: data.y })
          }
        >
          <AppIcon onDoubleClick={() => openWindow(folder.title, folder.content)}>
            <FolderIcon fontSize='large' />
            <Typography variant='body2'>{folder.title}</Typography>
          </AppIcon>
        </Draggable>
      ))}

      {windows.map((window) => (
        <DraggableWindow window={window} closeWindow={closeWindow} />
      ))}
    </StyledDesktop>
  )
}

export default Desktop
