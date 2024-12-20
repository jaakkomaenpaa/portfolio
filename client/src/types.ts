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

export interface DesktopItem {
  id: number
  title: string
  position?: Position
  iconKey: AppIcon
}

export interface App extends DesktopItem {
  contentKey: FileContent
}

export interface Link extends DesktopItem {
  url: string
}

export enum AppIcon {
  FolderColored,
  Folder,
  Calculator,
  GitHub,
  LinkedIn,
}

export enum FileContent {
  Portfolio,
  AboutMe,
  Skills,
  Education,
  Experience,
  Calculator,
  Explorer,
  ExplorerInfo
}

export interface FileSystemNode {
  id: number
  title: string
  type: 'folder' | 'file'
  iconKey: AppIcon
  contentKey?: FileContent
  children?: FileSystemNode[]
}
