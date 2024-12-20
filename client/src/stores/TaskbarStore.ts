import { create } from 'zustand'
import { FileSystemNode } from '../types'
import { TASKBAR_ITEMS } from '../programs'

interface TaskbarStore {
  taskbarItems: FileSystemNode[]
  nextId: number
  addItemToTaskbar: (item: FileSystemNode) => void
  removeItemFromTaskbar: (id: number) => void
}

const getSavedTaskbarItems = (): FileSystemNode[] => {
  const taskbarItems = localStorage.getItem('taskbar')

  if (taskbarItems) {
    return JSON.parse(taskbarItems)
  }

  return TASKBAR_ITEMS
}

export const useDesktopStore = create<TaskbarStore>((set, get) => ({
  taskbarItems: getSavedTaskbarItems(),
  nextId: TASKBAR_ITEMS.length + 1,

  addItemToTaskbar: (item: FileSystemNode) => {
    const { taskbarItems, nextId } = get()
    const updatedItems = [...taskbarItems, { ...item, id: nextId }]
    localStorage.setItem('taskbar', JSON.stringify(updatedItems))

    set({
      taskbarItems: updatedItems,
      nextId: nextId + 1,
    })
  },

  removeItemFromTaskbar: (id: number) => {
    const { taskbarItems } = get()

    const updatedItems = taskbarItems.filter((app) => app.id !== id)
    localStorage.setItem('taskbar', JSON.stringify(updatedItems))

    set({
      taskbarItems: updatedItems,
    })
  },
}))
