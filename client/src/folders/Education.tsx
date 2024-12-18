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
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='status-content'
          id='status-header'
          sx={{ backgroundColor: 'background.paper' }}
        >
          <Typography sx={{ color: 'text.secondary' }}>Current status</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: 'background.paper' }}>
          <Typography>
            Studying information and knowledge management in Tampere University.
            Bachelor of Science (Technology).
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='bachelors-content'
          id='bachelors-header'
          sx={{ backgroundColor: 'background.paper' }}
        >
          <Typography sx={{ color: 'text.secondary' }}>Bachelor's</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: 'background.paper' }}>
          <Typography>
            Graduated in May 2024. Focus on software engineering.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='masters-content'
          id='masters-header'
          sx={{ backgroundColor: 'background.paper' }}
        >
          <Typography sx={{ color: 'text.secondary' }}>Master's</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: 'background.paper' }}>
          <Typography>
            On track to graduating in May 2026. Information systems management as
            major, advanced studies in software engineering as minor.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default Education

/*
<Typography sx={{ mb: 3 }}>
        Studying information and knowledge management in Tampere University. Bachelor
        of Science (Technology).
      </Typography>
      <Typography sx={{ mb: 1, color: 'text.secondary' }}>Bachelor's</Typography>
      <Typography sx={{ mb: 3 }}>
        Graduated in May 2024. Focus on software engineering.
      </Typography>
      <Typography sx={{ mb: 1, color: 'text.secondary' }}>Master's</Typography>
      <Typography sx={{ mb: 3 }}>
        On track to graduating in May 2026. Information systems management as major,
        advanced studies in software engineering as minor.
      </Typography>
*/
