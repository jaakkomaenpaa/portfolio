import { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import adviceService from '../services/advice'

const RandomAdvice = () => {
  const [currentAdvice, setCurrentAdvice] = useState<string>('')

  const handleGetAdvice = async () => {
    const advice = await adviceService.getRandom()
    setCurrentAdvice(advice)
  }

  return (
    <Box
      sx={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <Typography variant='body1'>{currentAdvice}</Typography>
      <Button variant='outlined' onClick={handleGetAdvice}>
        Get advice
      </Button>
    </Box>
  )
}

export default RandomAdvice
