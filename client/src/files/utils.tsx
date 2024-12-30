import { ReactNode } from 'react'
import { AppIcon, FileSystemNode, ProgramType } from '../types'
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
import { PROGRAMS } from './programs'

export const PROGRAM_ICONS: Record<AppIcon, (props: any) => ReactNode> = {
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
  item: FileSystemNode,
  openWindow?: (title: string, content: ReactNode) => void
) => {
  if (item.type === ProgramType.Link) {
    // Key should be an url
    window.open(item.contentKey, '_blank')
  } else if (item.type === ProgramType.App) {
    // Key should be the program title
    if (openWindow) {
      openWindow(item.title, APP_CONTENTS[item.contentKey])
    }
  } else if (item.type === ProgramType.Folder) {
    // Key should be an string representation of a node id
    if (openWindow) {
      openWindow(
        PROGRAMS.fileExplorer.title,
        <FileExplorer nodeId={parseInt(item.contentKey)} />
      )
    }
  }
}
