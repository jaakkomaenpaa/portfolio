import { Box, Button, Grid2, TextField } from '@mui/material'
import { useState } from 'react'

const Calculator = () => {
  const [display, setDisplay] = useState<string>('')

  const handleButtonClick = (value: string) => {
    setDisplay((prev) => prev + value)
  }

  const handleClear = () => {
    setDisplay('')
  }

  const handleCalculate = () => {
    try {
      // Use eval for simplicity
      const result = eval(display)
      setDisplay(result.toString())
    } catch (error) {
      setDisplay('Error')
    }
  }

  const buttons = [
    '7',
    '8',
    '9',
    '/',
    '4',
    '5',
    '6',
    '*',
    '1',
    '2',
    '3',
    '-',
    '0',
    '.',
    '=',
    '+',
  ]

  return (
    <Box sx={{ width: 300, margin: '50px auto', padding: 2 }}>
      <TextField
        variant='outlined'
        fullWidth
        value={display}
        sx={{ mb: 2 }}
        InputProps={{ readOnly: true }}
      />
      <Grid2 container spacing={1}>
        {buttons.map((btn) => (
          <Grid2 size={{ xs: 3 }} key={btn}>
            <Button
              variant='contained'
              color={btn === '=' ? 'primary' : 'secondary'}
              fullWidth
              onClick={
                btn === '='
                  ? handleCalculate
                  : btn === 'C'
                  ? handleClear
                  : () => handleButtonClick(btn)
              }
            >
              {btn}
            </Button>
          </Grid2>
        ))}
        <Grid2 size={{ xs: 6 }}>
          <Button variant='contained' color='error' fullWidth onClick={handleClear}>
            Clear
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default Calculator
