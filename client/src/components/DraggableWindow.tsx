import { Box, IconButton, styled, Typography } from '@mui/material'
import Draggable from 'react-draggable'
import CloseIcon from '@mui/icons-material/Close'
import { Window } from '../types'

interface DraggableWindowProps {
  window: Window
  closeWindow: (id: number) => void
}

const AppWindow = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '400px',
  minHeight: '200px',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)',
  borderRadius: '8px',
  overflow: 'hidden',
}))

const DraggableWindow = ({ window, closeWindow }: DraggableWindowProps) => {
  return (
    <Draggable nodeRef={window.dragRef}>
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
  )
}

export default DraggableWindow
