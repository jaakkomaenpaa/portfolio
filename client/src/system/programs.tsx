import { FileSystemNode } from '../types'
import { DIMENSIONS } from '../config'
import { FILE_SYSTEM } from './fileSystem'

const { GRID_SIZE_X, GRID_SIZE_Y } = DIMENSIONS

export const PROGRAMS = {
  fileExplorer: FILE_SYSTEM[0],
  commandLine: FILE_SYSTEM[0].children![0],
  settings: FILE_SYSTEM[0].children![1],
  portfolio: FILE_SYSTEM[0].children![2],
  cvFolder: FILE_SYSTEM[0].children![3],
  linksFolder: FILE_SYSTEM[0].children![5],
}

export const DESKTOP_ITEMS = [
  // Root
  {
    ...PROGRAMS.fileExplorer,
    fileName: 'explorer',
    position: { x: 0, y: 0 },
  },
  { ...PROGRAMS.portfolio, position: { x: GRID_SIZE_X * 1, y: 0 } },
  ...PROGRAMS.cvFolder.children!.map((node: FileSystemNode, index: number) => ({
    ...node,
    position: { x: GRID_SIZE_X * index, y: GRID_SIZE_Y * 2 },
  })),
  ...PROGRAMS.linksFolder.children!.map((node: FileSystemNode, index: number) => ({
    ...node,
    position: { x: GRID_SIZE_X * index, y: GRID_SIZE_Y * 4 },
  })),
]

export const TASKBAR_ITEMS = [PROGRAMS.fileExplorer, PROGRAMS.commandLine]
