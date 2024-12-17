import { Box, CssBaseline } from '@mui/material'
import Taskbar from './components/Taskbar'

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
          <h1 style={{ textAlign: 'center', marginTop: '20%' }}>
            Welcome to My OS Portfolio!
          </h1>
        </Box>
        <Taskbar />
      </Box>
    </>
  )
}
export default App
