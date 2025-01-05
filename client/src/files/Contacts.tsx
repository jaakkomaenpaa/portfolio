import { Box, styled, Typography } from '@mui/material'

const TextRow = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  textAlign: 'right',
})

const Contacts = () => {
  return (
    <Box sx={{ padding: '16px', color: 'text.secondary' }}>
      <TextRow>
        <Typography>email:</Typography>
        <Typography>jaakko.maenpaa@outlook.com</Typography>
      </TextRow>
    </Box>
  )
}

export default Contacts
