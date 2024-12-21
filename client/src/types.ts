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

export enum AppIcon {
  FolderColored,
  Folder,
  Calculator,
  GitHub,
  LinkedIn,
  Code,
  CommandKey,
  Settings
}

export interface FileSystemNode {
  id: number
  title: string
  iconKey: AppIcon
  contentKey: string
  type: ProgramType
  children?: FileSystemNode[]
}

export interface DesktopItem extends FileSystemNode {
  position?: Position
}

export enum ProgramType {
  App,
  Folder,
  Link,
}

export interface Wallpaper {
  id: number
  name: string
  src: string
}