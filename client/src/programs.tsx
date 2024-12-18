import { AppContent, AppIcon, App } from './types'
import FolderIcon from '@mui/icons-material/Folder'
import CalculateIcon from '@mui/icons-material/Calculate'

import config from './config'
import AboutMe from './folders/AboutMe'
import Portfolio from './folders/Portfolio'
import Skills from './folders/Skills'
import Education from './folders/Education'
import Experience from './folders/Experience'
import Calculator from './apps/Calculator'

const { GRID_SIZE_X } = config

export const ENTITY_ICONS = {
  [AppIcon.Folder]: (props: any) => <FolderIcon {...props} />,
  [AppIcon.Calculator]: (props: any) => <CalculateIcon {...props} />,
}

export const PROGRAM_CONTENTS = {
  [AppContent.AboutMe]: <AboutMe />,
  [AppContent.Portfolio]: <Portfolio />,
  [AppContent.Skills]: <Skills />,
  [AppContent.Education]: <Education />,
  [AppContent.Experience]: <Experience />,
  [AppContent.Calculator]: <Calculator />,
}

export const DEFAULT_PROGRAMS: App[] = [
  {
    id: 1,
    title: 'Portfolio',
    icon: AppIcon.Folder,
    content: AppContent.Portfolio,
    position: { x: 0, y: 0 },
  },
  {
    id: 2,
    title: 'About me',
    icon: AppIcon.Folder,
    content: AppContent.AboutMe,
    position: { x: GRID_SIZE_X, y: 0 },
  },
  {
    id: 3,
    title: 'Skills',
    icon: AppIcon.Folder,
    content: AppContent.Skills,
    position: { x: GRID_SIZE_X * 2, y: 0 },
  },
  {
    id: 4,
    title: 'Education',
    icon: AppIcon.Folder,
    content: AppContent.Education,
    position: { x: GRID_SIZE_X * 3, y: 0 },
  },
  {
    id: 5,
    title: 'Experience',
    icon: AppIcon.Folder,
    content: AppContent.Experience,
    position: { x: GRID_SIZE_X * 4, y: 0 },
  },
  {
    id: 6,
    title: 'Calculator',
    content: AppContent.Calculator,
    icon: AppIcon.Calculator,
  },
]
