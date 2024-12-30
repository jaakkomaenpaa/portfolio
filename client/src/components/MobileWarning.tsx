import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import { forwardRef, ReactElement, useEffect, useState } from 'react'

const isMobileDevice = () => {
  return /Mobi|Android|iPhone/i.test(window.navigator.userAgent)
}

const Transition = forwardRef(function (
  props: TransitionProps & {
    children: ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})

const MobileWarning = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    const isClosed = localStorage.getItem('mobilewarning')
    if (isClosed === 'closed') {
      return
    }

    setIsMobile(isMobileDevice())
  }, [])

  const handleClose = () => {
    localStorage.setItem('mobilewarning', 'closed')
    setIsOpen(false)
  }

  if (!isMobile) return null

  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <DialogTitle>Warning</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 1 }}>
          This site is optimized for desktop use, and might not work properly on
          mobile devices.
        </DialogContentText>
        <DialogContentText>
          For the best experience, please access it on larger screen.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Continue</Button>
      </DialogActions>
    </Dialog>
  )
}

export default MobileWarning
