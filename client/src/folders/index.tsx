import Portfolio from './Portfolio'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Education from './Education'
import Experience from './Experience'
import { Folder } from '../types'
import config from '../config'

const { GRID_SIZE_X } = config

export const getFolderContent = (title: string) => {
  switch (title) {
    case 'Portfolio':
      return <Portfolio />
    case 'About me':
      return <AboutMe />
    case 'Skills':
      return <Skills />
    case 'Education':
      return <Education />
    case 'Experience':
      return <Experience />
    default:
      return null
  }
}

const DEFAULT_FOLDERS: Folder[] = [
  {
    id: 1,
    title: 'Portfolio',
    position: { x: 0, y: 0 },
  },
  {
    id: 2,
    title: 'About me',
    position: { x: GRID_SIZE_X, y: 0 },
  },
  {
    id: 3,
    title: 'Skills',
    position: { x: GRID_SIZE_X * 2, y: 0 },
  },
  {
    id: 4,
    title: 'Education',
    position: { x: GRID_SIZE_X * 3, y: 0 },
  },
  {
    id: 5,
    title: 'Experience',
    position: { x: GRID_SIZE_X * 4, y: 0 },
  },
]

export default DEFAULT_FOLDERS
