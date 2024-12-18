import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'
import FolderIcon from '@mui/icons-material/Folder'

import DEFAULT_FOLDERS from '../folders'
import DraggableWindow from './DraggableWindow'
import { useWindowStore } from '../stores/WindowStore'

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
  const { windows, actions } = useWindowStore()
  const { openWindow, closeWindow } = actions

  return (
    <StyledDesktop>
      {DEFAULT_FOLDERS.map((folder, index) => (
        <AppIcon key={index} onClick={() => openWindow(folder.title, folder.content)}>
          <FolderIcon fontSize='large' />
          <Typography variant='body2'>{folder.title}</Typography>
        </AppIcon>
      ))}

      {windows.map((window) => (
        <DraggableWindow window={window} closeWindow={closeWindow} />
      ))}
    </StyledDesktop>
  )
}

export default Desktop
