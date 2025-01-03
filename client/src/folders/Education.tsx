import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Education = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 0.5,
        padding: '16px',
        width: '500px',
      }}
    >
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='status-content'
          id='status-header'
          sx={{ backgroundColor: 'background.paper' }}
        >
          <Typography sx={{ color: 'text.primary' }}>General</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: 'background.paper',
            color: 'text.secondary',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Typography>School:</Typography>
            <Typography>Tampere University</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Typography>Field of Study:</Typography>
            <Typography>Information and Knowledge Management</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Typography>Credits:</Typography>
            <Typography>222 / 300</Typography>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='bachelors-content'
          id='bachelors-header'
          sx={{ backgroundColor: 'background.paper' }}
        >
          <Typography sx={{ color: 'text.primary' }}>Bachelor's</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: 'background.paper',
            color: 'text.secondary',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Typography>Graduated:</Typography>
            <Typography>May 2024</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              textAlign: 'right',
            }}
          >
            <Typography>Major:</Typography>
            <Typography>Information and Knowledge Management</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Typography>Minor:</Typography>
            <Typography>Software systems</Typography>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='masters-content'
          id='masters-header'
          sx={{ backgroundColor: 'background.paper' }}
        >
          <Typography sx={{ color: 'text.primary' }}>Master's</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: 'background.paper',
            color: 'text.secondary',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Typography>Graduation:</Typography>
            <Typography>May 2026 (projected)</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              textAlign: 'right',
            }}
          >
            <Typography>Major:</Typography>
            <Typography>Information Systems Management</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              textAlign: 'right',
            }}
          >
            <Typography>Minor:</Typography>
            <Typography>Advanced studies in Software Engineering</Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default Education
