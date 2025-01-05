import { Box, Typography } from '@mui/material'

const Portfolio = () => {
  return (
    <Box sx={{ padding: '16px' }}>
      <Typography sx={{ mb: 2 }}>Welcome to my portfolio!</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          color: 'text.secondary',
        }}
      >
        <Typography>
          This is a web application that I have set up to showcase my programming
          skills and display information about me. It is built with React, TypeScript
          and Material UI.
        </Typography>
        <Typography>
          The app mimics an OS with a file system, where the user can navigate through
          different folders and files. This can be done via the file explorer or the
          command line.
        </Typography>
        <Typography>
          Desktop view can be customized by dragging new items from the explorer or by
          moving existing ones around. Customizations are saved to local storage,
          which can be easily cleared from settings.
        </Typography>
      </Box>
    </Box>
  )
}

export default Portfolio
