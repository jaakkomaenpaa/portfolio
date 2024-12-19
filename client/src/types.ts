import { ReactNode } from 'react'

export interface Window {
  id: number
  title: string
  content: ReactNode
}

export interface Position {
  x: number
  y: number
}

export interface App {
  id: number
  title: string
  position?: Position
  icon: AppIcon
  content: AppContent
}

export enum AppIcon {
  Folder,
  Calculator,
}

export enum AppContent {
  Portfolio,
  AboutMe,
  Skills,
  Education,
  Experience,
  Calculator,
}
