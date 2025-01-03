import { FileSystemNode } from '../types'
import { DIMENSIONS } from '../config'
import { FILE_SYSTEM } from './fileSystem'

const { GRID_SIZE_X } = DIMENSIONS

export const PROGRAMS = {
  fileExplorer: FILE_SYSTEM[0],
  commandLine: FILE_SYSTEM[0].children![0],
  settings: FILE_SYSTEM[0].children![1],
}

export const DESKTOP_ITEMS = [
  // Root
  {
    ...PROGRAMS.fileExplorer,
    fileName: 'explorer',
    position: { x: 0, y: 0 },
  },
  // Info folder
  ...FILE_SYSTEM[0].children![3].children!.map(
    (node: FileSystemNode, index: number) => ({
      ...node,
      position: { x: GRID_SIZE_X * (index + 1), y: 0 },
    })
  ),
]

export const TASKBAR_ITEMS = [PROGRAMS.fileExplorer, PROGRAMS.commandLine]
