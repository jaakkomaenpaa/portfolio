import Portfolio from './Portfolio'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Education from './Education'
import Experience from './Experience'
import { Folder } from '../types'
import config from '../config'

const { GRID_SIZE_X } = config

const DEFAULT_FOLDERS: Folder[] = [
  {
    id: 1,
    title: 'Portfolio',
    content: <Portfolio />,
    position: { x: 0, y: 0 },
  },
  {
    id: 2,
    title: 'About me',
    content: <AboutMe />,
    position: { x: GRID_SIZE_X, y: 0 },
  },
  {
    id: 3,
    title: 'Skills',
    content: <Skills />,
    position: { x: GRID_SIZE_X * 2, y: 0 },
  },
  {
    id: 4,
    title: 'Education',
    content: <Education />,
    position: { x: GRID_SIZE_X * 3, y: 0 },
  },
  {
    id: 5,
    title: 'Experience',
    content: <Experience />,
    position: { x: GRID_SIZE_X * 4, y: 0 },
  },
]

export default DEFAULT_FOLDERS
