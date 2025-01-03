import { Box, Typography } from '@mui/material'

const Skills = () => {
  return (
    <Box sx={{ padding: '16px' }}>
      <Typography sx={{ mb: 1, color: 'text.secondary' }}>Background</Typography>
      <Typography sx={{ mb: 3 }} variant='body1'>
        First started to gain interest in programming in January 2022 through
        university courses.
      </Typography>
      <Typography sx={{ mb: 1, color: 'text.secondary' }}>Technologies</Typography>
      <Typography sx={{ mb: 3 }} variant='body1'>
        Most prominent in React, React Native (Expo), TypeScript (+JS), Express,
        Python, and SQL. Also experience in C++, C, and Java.
      </Typography>
    </Box>
  )
}

export default Skills
