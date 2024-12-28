import { ReactNode } from 'react'
import { AppIcon, ProgramType } from '../types'
import FolderIcon from '@mui/icons-material/Folder'
import CalculateIcon from '@mui/icons-material/Calculate'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import CodeIcon from '@mui/icons-material/Code'
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey'
import SettingsIcon from '@mui/icons-material/Settings'

import AboutMe from '../folders/AboutMe'
import Portfolio from '../folders/Portfolio'
import Skills from '../folders/Skills'
import Education from '../folders/Education'
import Experience from '../folders/Experience'
import Calculator from '../apps/Calculator'
import FileExplorer from '../programs/FileExplorer'
import CommandLine from '../programs/CommandLine'
import Settings from '../programs/Settings'
import RandomAdvice from '../apps/RandomAdvice'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'

export const PROGRAM_ICONS = {
  [AppIcon.FolderColored]: (props: any) => <FolderIcon color='folder' {...props} />,
  [AppIcon.Folder]: (props: any) => <FolderIcon {...props} />,
  [AppIcon.Calculator]: (props: any) => <CalculateIcon {...props} />,
  [AppIcon.GitHub]: (props: any) => <GitHubIcon {...props} />,
  [AppIcon.LinkedIn]: (props: any) => <LinkedInIcon {...props} />,
  [AppIcon.Code]: (props: any) => <CodeIcon {...props} />,
  [AppIcon.CommandKey]: (props: any) => <KeyboardCommandKeyIcon {...props} />,
  [AppIcon.Settings]: (props: any) => <SettingsIcon {...props} />,
  [AppIcon.QuoteMark]: (props: any) => <FormatQuoteIcon {...props} />,
}

export const APP_CONTENTS: Record<string, ReactNode> = {
  ['About me']: <AboutMe />,
  ['Portfolio']: <Portfolio />,
  ['Skills']: <Skills />,
  ['Education']: <Education />,
  ['Experience']: <Experience />,
  ['Calculator']: <Calculator />,
  ['Explorer']: <FileExplorer />,
  ['Cmd line']: <CommandLine />,
  ['Settings']: <Settings />,
  ['Random advice']: <RandomAdvice />,
}

export const runProgram = (
  key: string,
  programType: ProgramType,
  openWindow?: (title: string, content: ReactNode) => void
) => {
  if (programType === ProgramType.Link) {
    // Key should be an url
    window.open(key, '_blank')
  } else if (programType === ProgramType.App) {
    // Key should be the program title
    if (openWindow) {
      openWindow(key, APP_CONTENTS[key])
    }
  } else if (programType === ProgramType.Folder) {
    // Key should be an string representation of a node id
    if (openWindow) {
      openWindow('Explorer', <FileExplorer nodeId={parseInt(key)} />)
    }
  }
}
