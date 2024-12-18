import { create } from 'zustand'
import { Folder, Position } from '../types'
import DEFAULT_FOLDERS from '../folders'

interface FolderStore {
  folders: Folder[]
  updateFolderPosition: (id: number, position: Position) => void
}

export const useFolderStore = create<FolderStore>((set) => ({
  folders: DEFAULT_FOLDERS,
  updateFolderPosition: (id: number, position: Position) =>
    set((state) => ({
      folders: state.folders.map((folder) =>
        folder.id === id ? { ...folder, position } : folder
      ),
    })),
}))
