import { Box, CssBaseline } from '@mui/material'
import Taskbar from './components/Taskbar'
import Desktop from './components/Desktop'

const App = () => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: '#1e1e1e',
          color: '#ffffff',
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Desktop />
        </Box>

        <Taskbar />
      </Box>
    </>
  )
}
export default App
