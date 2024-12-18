import { Box, IconButton, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { createRef, ReactNode, RefObject, useState } from 'react'
import FolderIcon from '@mui/icons-material/Folder'
import CloseIcon from '@mui/icons-material/Close'
import Draggable from 'react-draggable'

import DEFAULT_FOLDERS from '../folders'

interface WindowProps {
  id: number
  title: string
  content: ReactNode
  dragRef: RefObject<HTMLDivElement>
}

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

const AppWindow = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '300px',
  minHeight: '200px',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)',
  borderRadius: '8px',
  overflow: 'hidden',
}))

const Desktop = () => {
  const [windows, setWindows] = useState<WindowProps[]>([])
  const [nextId, setNextId] = useState<number>(1)

  const openWindow = (title: string, content: ReactNode) => {
    setWindows((prevWindows) => [
      ...prevWindows,
      { id: nextId, title, content, dragRef: createRef<HTMLDivElement>() },
    ])
    setNextId(nextId + 1)
  }

  const closeWindow = (id: number) => {
    setWindows((prevWindows) => prevWindows.filter((window) => window.id !== id))
  }

  return (
    <StyledDesktop>
      {DEFAULT_FOLDERS.map((folder, index) => (
        <AppIcon key={index} onClick={() => openWindow(folder.title, folder.content)}>
          <FolderIcon fontSize='large' />
          <Typography variant='body2'>{folder.title}</Typography>
        </AppIcon>
      ))}

      {windows.map((window) => (
        <Draggable nodeRef={window.dragRef} key={window.id}>
          <div ref={window.dragRef}>
            <AppWindow>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: 'primary.main',
                  color: 'text.primary',
                  padding: '8px',
                }}
              >
                <Typography variant='subtitle1'>{window.title}</Typography>
                <IconButton
                  size='small'
                  color='inherit'
                  onClick={() => closeWindow(window.id)}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              <Box sx={{ padding: '16px' }}>{window.content}</Box>
            </AppWindow>
          </div>
        </Draggable>
      ))}
    </StyledDesktop>
  )
}

export default Desktop