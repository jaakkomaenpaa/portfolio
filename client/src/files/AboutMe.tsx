import { Box, Typography } from '@mui/material'

const AboutMe = () => {
  return (
    <Box sx={{ padding: '16px', color: 'text.primary' }}>
      <Typography sx={{ mb: 2 }}>
        I am a 24-year-old technology student in Tampere University.
      </Typography>
      <Typography sx={{ mb: 2 }}>
        I have always had a strong passion for different problem-solving tasks and
        programming has been a great way to challenge myself.
      </Typography>
      <Typography sx={{ mb: 2 }}>
        The focus on my personal coding projects has shifted towards web development,
        since it offers quick, concrete results and a wide range of possibilities.
      </Typography>
    </Box>
  )
}

export default AboutMe
