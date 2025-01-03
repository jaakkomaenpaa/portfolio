import { Typography, Box, styled } from '@mui/material'

const InfoSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
  backgroundColor: theme.palette.background.paper,
  padding: 16,
}))

const TextRow = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  textAlign: 'right',
})

const TextSection = styled(Box)(({ theme }) => ({
  color: theme.palette.text.secondary,
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
}))

const Education = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        padding: '16px',
        width: '500px',
        maxHeight: '80vh',
        overflowY: 'auto',
      }}
    >
      <InfoSection>
        <Typography>General</Typography>
        <TextSection>
          <TextRow>
            <Typography>School:</Typography>
            <Typography>Tampere University</Typography>
          </TextRow>
          <TextRow>
            <Typography>Field of Study:</Typography>
            <Typography>Information and Knowledge Management</Typography>
          </TextRow>
          <TextRow>
            <Typography>Title:</Typography>
            <Typography>Bachelor of Science (Technology)</Typography>
          </TextRow>
          <TextRow>
            <Typography>Credits:</Typography>
            <Typography>222 / 300</Typography>
          </TextRow>
        </TextSection>
      </InfoSection>

      <InfoSection>
        <Typography>Bachelor's ✅</Typography>
        <TextSection>
          <TextRow>
            <Typography>Graduated:</Typography>
            <Typography>May 2024</Typography>
          </TextRow>
          <TextRow>
            <Typography>Major:</Typography>
            <Typography>Information and Knowledge Management</Typography>
          </TextRow>
          <TextRow>
            <Typography>Minor:</Typography>
            <Typography>Software systems</Typography>
          </TextRow>
        </TextSection>
      </InfoSection>

      <InfoSection>
        <Typography>Master's ⌛</Typography>
        <TextSection>
          <TextRow>
            <Typography>Graduation:</Typography>
            <Typography>May 2026 (projected)</Typography>
          </TextRow>
          <TextRow>
            <Typography>Major:</Typography>
            <Typography>Information Systems Management</Typography>
          </TextRow>
          <TextRow>
            <Typography>Minor:</Typography>
            <Typography>Advanced studies in Software Engineering</Typography>
          </TextRow>
        </TextSection>
      </InfoSection>
    </Box>
  )
}

export default Education
