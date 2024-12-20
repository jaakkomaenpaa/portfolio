import { AppIcon, FileSystemNode, ProgramType } from './types'
import FolderIcon from '@mui/icons-material/Folder'
import CalculateIcon from '@mui/icons-material/Calculate'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import config from './config'
import AboutMe from './folders/AboutMe'
import Portfolio from './folders/Portfolio'
import Skills from './folders/Skills'
import Education from './folders/Education'
import Experience from './folders/Experience'
import Calculator from './apps/Calculator'
import FileExplorer from './programs/FileExplorer'
import { ReactNode } from 'react'

const { GRID_SIZE_X } = config

export const FILE_SYSTEM: FileSystemNode[] = [
  {
    id: 0,
    title: 'root',
    type: ProgramType.Folder,
    iconKey: AppIcon.FolderColored,
    contentKey: '0',
    children: [
      {
        id: 7,
        title: 'Calculator',
        type: ProgramType.App,
        iconKey: AppIcon.Calculator,
        contentKey: 'Calculator',
      },
      {
        id: 1,
        title: 'Info',
        type: ProgramType.Folder,
        iconKey: AppIcon.Folder,
        contentKey: '9',
        children: [
          {
            id: 2,
            title: 'About me',
            type: ProgramType.App,
            iconKey: AppIcon.Folder,
            contentKey: 'About me',
          },
          {
            id: 3,
            title: 'Skills',
            type: ProgramType.App,
            iconKey: AppIcon.Folder,
            contentKey: 'Skills',
          },
          {
            id: 4,
            title: 'Education',
            type: ProgramType.App,
            iconKey: AppIcon.Folder,
            contentKey: 'Education',
          },
          {
            id: 5,
            title: 'Experience',
            type: ProgramType.App,
            iconKey: AppIcon.Folder,
            contentKey: 'Experience',
          },
          {
            id: 6,
            title: 'Portfolio',
            type: ProgramType.App,
            iconKey: AppIcon.Folder,
            contentKey: 'Portfolio',
          },
        ],
      },
      {
        id: 8,
        title: 'Links',
        type: ProgramType.Folder,
        iconKey: AppIcon.Folder,
        contentKey: '8',
        children: [
          {
            id: 9,
            title: 'GitHub',
            type: ProgramType.Link,
            iconKey: AppIcon.GitHub,
            contentKey: 'https://github.com/jaakkomaenpaa',
          },
          {
            id: 10,
            title: 'LinkedIn',
            type: ProgramType.Link,
            iconKey: AppIcon.LinkedIn,
            contentKey: 'https://www.linkedin.com/in/jaakko-mäenpää-37a11a262',
          },
        ],
      },
    ],
  },
]

export const PROGRAM_ICONS = {
  [AppIcon.FolderColored]: (props: any) => <FolderIcon color='folder' {...props} />,
  [AppIcon.Folder]: (props: any) => <FolderIcon {...props} />,
  [AppIcon.Calculator]: (props: any) => <CalculateIcon {...props} />,
  [AppIcon.GitHub]: (props: any) => <GitHubIcon {...props} />,
  [AppIcon.LinkedIn]: (props: any) => <LinkedInIcon {...props} />,
}

export const APP_CONTENTS: Record<string, ReactNode> = {
  ['About me']: <AboutMe />,
  ['Portfolio']: <Portfolio />,
  ['Skills']: <Skills />,
  ['Education']: <Education />,
  ['Experience']: <Experience />,
  ['Calculator']: <Calculator />,
  ['Explorer']: <FileExplorer />,
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

console.log(FILE_SYSTEM[0].children)

export const DESKTOP_ITEMS = [
  // Root
  {
    ...FILE_SYSTEM[0],
    title: 'Explorer',
    position: { x: 0, y: 0 },
  },
  // Info folder
  ...FILE_SYSTEM[0].children![1].children!.map(
    (node: FileSystemNode, index: number) => ({
      ...node,
      position: { x: GRID_SIZE_X * (index + 1), y: 0 },
    })
  ),
]
