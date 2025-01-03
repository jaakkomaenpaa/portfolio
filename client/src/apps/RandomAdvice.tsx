import { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import axios from 'axios'

import { URLS } from '../config'

interface RandomAdviceResponse {
  slip: {
    id: number
    advice: string
  }
}

const RandomAdvice = () => {
  const [currentAdvice, setCurrentAdvice] = useState<string>('')

  const handleGetAdvice = async () => {
    const response = await axios.get(URLS.RANDOM_ADVICE_URL)
    const adviceObject: RandomAdviceResponse = response.data
    const advice = adviceObject.slip.advice

    if (advice) {
      setCurrentAdvice(advice)
    }
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
