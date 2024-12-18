import { ReactNode, RefObject } from 'react'

export interface Window {
  id: number
  title: string
  content: ReactNode
  dragRef: RefObject<HTMLDivElement>
}
