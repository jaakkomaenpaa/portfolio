import { ReactNode, RefObject } from 'react'

export interface Window {
  id: number
  title: string
  content: ReactNode
  dragRef: RefObject<HTMLDivElement>
}

export interface Folder {
  id: number
  title: string
  position: Position
}

export interface Position {
  x: number
  y: number
}
