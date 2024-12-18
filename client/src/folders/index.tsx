import { ReactNode } from 'react'
import Portfolio from './Portfolio'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Education from './Education'
import Experience from './Experience'

interface Folder {
  title: string
  content: ReactNode
}

const DEFAULT_FOLDERS: Folder[] = [
  {
    title: 'Portfolio',
    content: <Portfolio />,
  },
  {
    title: 'About me',
    content: <AboutMe />,
  },
  {
    title: 'Skills',
    content: <Skills />,
  },
  {
    title: 'Education',
    content: <Education />,
  },
  {
    title: 'Experience',
    content: <Experience />,
  },
]

export default DEFAULT_FOLDERS
