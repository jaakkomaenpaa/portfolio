import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  styled,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useThemeStore } from '../stores/ThemeStore'

const StyledSetting = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.paper,
  padding: '8px 16px',
}))

const Settings = () => {
  const { toggleTheme } = useThemeStore()

  const clearLocalStorage = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <Box
      sx={{
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 0.5,
      }}
    >
      <StyledSetting sx={{ paddingY: '6px' }}>
        <Typography variant='body1'>Theme</Typography>
        <Button
          variant='outlined'
          sx={{
            color: 'text.primary',
            cursor: 'pointer',
          }}
          onClick={toggleTheme}
        >
          Toggle
        </Button>
      </StyledSetting>

      <StyledSetting sx={{ paddingY: '6px' }}>
        <Typography variant='body1'> Local storage</Typography>
        <Button
          variant='text'
          color='error'
          sx={{
            color: 'text.error',
            cursor: 'pointer',
          }}
          onClick={clearLocalStorage}
        >
          Clear
        </Button>
      </StyledSetting>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='status-content'
          id='status-header'
          sx={{
            backgroundColor: 'background.paper',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={{ color: 'text.primary' }}>Theme</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: 'background.paper' }}>
          <Button
            variant='outlined'
            sx={{
              color: 'text.primary',
              cursor: 'pointer',
            }}
            onClick={toggleTheme}
          >
            Toggle
          </Button>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default Settings
