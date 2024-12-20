import { FileContent, AppIcon, App, Link, DesktopItem, FileSystemNode } from './types'
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

const { GRID_SIZE_X } = config

export const FILE_SYSTEM: FileSystemNode[] = [
  {
    id: 0,
    title: 'root',
    type: 'folder',
    iconKey: AppIcon.Folder,
    children: [
      {
        id: 6,
        title: 'Calculator',
        type: 'file',
        iconKey: AppIcon.Calculator,
        contentKey: FileContent.Calculator,
      },
      {
        id: 9,
        title: 'Info',
        type: 'folder',
        iconKey: AppIcon.Folder,
        contentKey: FileContent.ExplorerInfo,
        children: [
          {
            id: 1,
            title: 'About me',
            type: 'file',
            iconKey: AppIcon.Folder,
            contentKey: FileContent.AboutMe,
          },
          {
            id: 2,
            title: 'Skills',
            type: 'file',
            iconKey: AppIcon.Folder,
            contentKey: FileContent.Skills,
          },
          {
            id: 3,
            title: 'Education',
            type: 'file',
            iconKey: AppIcon.Folder,
            contentKey: FileContent.Education,
          },
          {
            id: 4,
            title: 'Experience',
            type: 'file',
            iconKey: AppIcon.Folder,
            contentKey: FileContent.Experience,
          },
          {
            id: 5,
            title: 'Portfolio',
            type: 'file',
            iconKey: AppIcon.Folder,
            contentKey: FileContent.Portfolio,
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

export const PROGRAM_CONTENTS = {
  [FileContent.AboutMe]: <AboutMe />,
  [FileContent.Portfolio]: <Portfolio />,
  [FileContent.Skills]: <Skills />,
  [FileContent.Education]: <Education />,
  [FileContent.Experience]: <Experience />,
  [FileContent.Calculator]: <Calculator />,
  [FileContent.Explorer]: <FileExplorer />,
  [FileContent.ExplorerInfo]: (
    <FileExplorer node={FILE_SYSTEM[0].children?.find((n) => n.title === 'Info')} />
  ),
}

export const isApp = (item: DesktopItem): item is App => {
  return (item as App).contentKey !== undefined
}

export const isLink = (item: DesktopItem): item is Link => {
  return (item as Link).url !== undefined
}

export const LINKS: Link[] = [
  {
    id: 7,
    title: 'GitHub',
    iconKey: AppIcon.GitHub,
    url: 'https://github.com/jaakkomaenpaa',
  },
  {
    id: 8,
    title: 'LinkedIn',
    iconKey: AppIcon.LinkedIn,
    url: 'https://www.linkedin.com/in/jaakko-mäenpää-37a11a262/',
  },
]

export const APPS: App[] = [
  {
    id: 6,
    title: 'Calculator',
    contentKey: FileContent.Calculator,
    iconKey: AppIcon.Calculator,
    position: { x: GRID_SIZE_X * 5, y: 0 },
  },
  {
    id: 9,
    title: 'Explorer',
    contentKey: FileContent.Explorer,
    iconKey: AppIcon.FolderColored,
    position: { x: GRID_SIZE_X * 6, y: 0 },
  },
]

export const FOLDERS: App[] = [
  {
    id: 1,
    title: 'Portfolio',
    contentKey: FileContent.Portfolio,
    iconKey: AppIcon.Folder,
    position: { x: 0, y: 0 },
  },
  {
    id: 2,
    title: 'About me',
    iconKey: AppIcon.Folder,
    contentKey: FileContent.AboutMe,
    position: { x: GRID_SIZE_X, y: 0 },
  },
  {
    id: 3,
    title: 'Skills',
    iconKey: AppIcon.Folder,
    contentKey: FileContent.Skills,
    position: { x: GRID_SIZE_X * 2, y: 0 },
  },
  {
    id: 4,
    title: 'Education',
    iconKey: AppIcon.Folder,
    contentKey: FileContent.Education,
    position: { x: GRID_SIZE_X * 3, y: 0 },
  },
  {
    id: 5,
    title: 'Experience',
    iconKey: AppIcon.Folder,
    contentKey: FileContent.Experience,
    position: { x: GRID_SIZE_X * 4, y: 0 },
  },
]

export const DEFAULT_PROGRAMS: App[] = [...APPS, ...FOLDERS]
