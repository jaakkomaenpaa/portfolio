import { Avatar, Box, Typography } from '@mui/material'
import { styled } from '@mui/system'

import profilePicture from '../assets/profile.jpg'

const CodeContainer = styled(Box)(({ theme }) => ({
  fontFamily: 'monospace',
  backgroundColor: theme.palette.background.paper,
  padding: '16px',
  borderRadius: '8px',
  border: `1px solid ${theme.palette.Boxider}`,
  display: 'inline-block',
  textWrap: 'nowrap',
}))

const ProfileContainer = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '16px',
})

const TextSection = styled(Box)(({ theme }) => ({
  color: theme.palette.text.secondary,
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
}))

const CodeKeyword = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 600,
}))

const CodeType = styled('span')(({ theme }) => ({
  color: theme.palette.secondary.main,
}))

const CodeString = styled('span')(({ theme }) => ({
  color: theme.palette.success.main,
}))

const CodeNumber = styled('span')(({ theme }) => ({
  color: theme.palette.warning.main,
}))

const AboutMe = () => {
  return (
    <Box
      sx={{
        padding: '16px',
        color: 'text.primary',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <ProfileContainer>
        <Avatar
          src={profilePicture}
          alt='Profile'
          sx={{
            width: 128,
            height: 128,
            border: '2px solid',
            borderColor: 'divider',
          }}
        />
        <CodeContainer>
          <Box>
            <CodeKeyword>struct</CodeKeyword> <CodeType>Profile</CodeType> {'{'}
          </Box>
          <Box style={{ marginLeft: '20px' }}>
            <CodeKeyword>char</CodeKeyword> name[] ={' '}
            <CodeString>"Jaakko Mäenpää"</CodeString>;
          </Box>
          <Box style={{ marginLeft: '20px' }}>
            <CodeKeyword>int</CodeKeyword> age = <CodeNumber>24</CodeNumber>;
          </Box>
          <Box style={{ marginLeft: '20px' }}>
            <CodeKeyword>char</CodeKeyword> location[] ={' '}
            <CodeString>"Tampere"</CodeString>;
          </Box>
          <Box>{'};'}</Box>
        </CodeContainer>
      </ProfileContainer>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography>Info</Typography>
        <TextSection>
          I have always had a strong passion for different problem-solving tasks and
          programming has been a great way to challenge myself.
        </TextSection>
        <TextSection>
          The focus on my personal coding projects has shifted towards web
          development, since it offers quick, concrete results and a wide range of
          possibilities.
        </TextSection>
      </Box>
    </Box>
  )
}

export default AboutMe
