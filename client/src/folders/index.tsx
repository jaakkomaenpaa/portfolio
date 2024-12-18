import Portfolio from './Portfolio'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Education from './Education'
import Experience from './Experience'
import { Folder } from '../types'

const DEFAULT_FOLDERS: Folder[] = [
  {
    id: 1,
    title: 'Portfolio',
    content: <Portfolio />,
    position: { x: 50, y: 50 },
  },
  {
    id: 2,
    title: 'About me',
    content: <AboutMe />,
    position: { x: 150, y: 50 },
  },
  {
    id: 3,
    title: 'Skills',
    content: <Skills />,
    position: { x: 250, y: 50 },
  },
  {
    id: 4,
    title: 'Education',
    content: <Education />,
    position: { x: 350, y: 50 },
  },
  {
    id: 5,
    title: 'Experience',
    content: <Experience />,
    position: { x: 450, y: 50 },
  },
]

export default DEFAULT_FOLDERS
