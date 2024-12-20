import { Box, IconButton, styled, Typography } from '@mui/material'
import Draggable from 'react-draggable'
import CloseIcon from '@mui/icons-material/Close'
import { Window } from '../types'
import { useRef } from 'react'

interface DraggableWindowProps {
  window: Window
  closeWindow: (id: number) => void
}

const AppWindow = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '400px',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)',
  borderRadius: '8px',
  overflow: 'hidden',
}))

const DraggableWindow = ({ window, closeWindow }: DraggableWindowProps) => {
  const nodeRef = useRef(null)

  // ref needed in both Draggable and div to address deprecated findDOMNode
  return (
    <Draggable handle='.draggable-header' cancel='.non-draggable' nodeRef={nodeRef}>
      <div ref={nodeRef}>
        <AppWindow>
          <Box
            className='draggable-header'
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
          <Box className='non-draggable'>{window.content}</Box>
        </AppWindow>
      </div>
    </Draggable>
  )
}

export default DraggableWindow
