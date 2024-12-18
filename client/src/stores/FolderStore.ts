import { create } from 'zustand'
import { Folder, Position } from '../types'
import DEFAULT_FOLDERS from '../folders'

interface FolderStore {
  folders: Folder[]
  updateFolderPosition: (id: number, position: Position) => void
}

const getSavedFolders = (): Folder[] => {
  const folders = localStorage.getItem('folders')

  if (folders) {
    return JSON.parse(folders)
  }

  return DEFAULT_FOLDERS
}

export const useFolderStore = create<FolderStore>((set) => ({
  folders: getSavedFolders(),

  updateFolderPosition: (id: number, position: Position) =>
    set((state) => {
      const updatedFolders = state.folders.map((folder) =>
        folder.id === id ? { ...folder, position } : folder
      )

      localStorage.setItem('folders', JSON.stringify(updatedFolders))
      return { folders: updatedFolders }
    }),
}))
