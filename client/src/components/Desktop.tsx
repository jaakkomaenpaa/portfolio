import { Box, IconButton, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { ReactNode, useState } from 'react'
import FolderIcon from '@mui/icons-material/Folder'
import CloseIcon from '@mui/icons-material/Close'
import Draggable from 'react-draggable'

interface WindowProps {
  id: number
  title: string
  content: ReactNode
}

const StyledDesktop = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '100%',
  backgroundColor: '#1e1e1e',
  display: 'flex',
  flexWrap: 'wrap',
  padding: '16px',
  color: '#ffffff',
})

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

const AppWindow = styled(Box)({
  position: 'absolute',
  width: '300px',
  minHeight: '200px',
  backgroundColor: '#ffffff',
  color: '#000000',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)',
  borderRadius: '8px',
  overflow: 'hidden',
})

const Desktop = () => {
  const [windows, setWindows] = useState<WindowProps[]>([])
  const [nextId, setNextId] = useState(1)

  const openWindow = (title: string, content: ReactNode) => {
    setWindows((prevWindows) => [...prevWindows, { id: nextId, title, content }])
    setNextId(nextId + 1)
  }

  const closeWindow = (id: number) => {
    setWindows((prevWindows) => prevWindows.filter((window) => window.id !== id))
  }

  return (
    <StyledDesktop>
      <AppIcon
        onClick={() =>
          openWindow('My Portfolio', <div>This is my portfolio content!</div>)
        }
      >
        <FolderIcon fontSize='large' />
        <Typography variant='body2'>Portfolio</Typography>
      </AppIcon>

      <AppIcon
        onClick={() =>
          openWindow('About me', <div>This is the About Me section!</div>)
        }
      >
        <FolderIcon fontSize='large' />
        <Typography variant='body2'>About Me</Typography>
      </AppIcon>

      {windows.map((window) => (
        <Draggable key={window.id}>
          <AppWindow>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#1976d2',
                color: '#ffffff',
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
        </Draggable>
      ))}
    </StyledDesktop>
  )
}

export default Desktop
