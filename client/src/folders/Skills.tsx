import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'

const SkillRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  color: theme.palette.text.secondary,
  alignItems: 'center',
  textAlign: 'right',
}))

const SkillLevel = styled(Box)(
  ({ theme, level }: { theme?: any; level: number }) => ({
    height: 20,
    width: level * 30,
    backgroundColor: theme.palette.primary.main,
  })
)

const Skills = () => {
  return (
    <Box sx={{ padding: '16px', maxHeight: '80vh', overflowY: 'auto' }}>
      <Typography sx={{ mb: 3 }}>Background</Typography>
      <Typography sx={{ mb: 2, color: 'text.secondary' }} variant='body1'>
        First started to gain interest in programming in January 2022 through
        university courses.
      </Typography>
      <Typography sx={{ mb: 4, color: 'text.secondary' }} variant='body1'>
        Since then I have been working on various projects of my own, mostly in web
        development.
      </Typography>
      <Typography sx={{ mb: 3 }}>Technologies by experience</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <SkillRow>
          <Typography>TypeScript (+JS)</Typography>
          <SkillLevel level={5} />
        </SkillRow>
        <SkillRow>
          <Typography>React</Typography>
          <SkillLevel level={5} />
        </SkillRow>
        <SkillRow>
          <Typography>React Native (Expo)</Typography>
          <SkillLevel level={4} />
        </SkillRow>
        <SkillRow>
          <Typography>Express.js</Typography>
          <SkillLevel level={4} />
        </SkillRow>
        <SkillRow>
          <Typography>Python</Typography>
          <SkillLevel level={4} />
        </SkillRow>
        <SkillRow>
          <Typography>C++</Typography>
          <SkillLevel level={3} />
        </SkillRow>
        <SkillRow>
          <Typography>C</Typography>
          <SkillLevel level={1} />
        </SkillRow>
        <SkillRow>
          <Typography>Java</Typography>
          <SkillLevel level={1} />
        </SkillRow>
        <SkillRow>
          <Typography>SQL (SQLite)</Typography>
          <SkillLevel level={3} />
        </SkillRow>
      </Box>
    </Box>
  )
}

export default Skills
