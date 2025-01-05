import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'
import { FileSystemNode } from '../types'
import { TASKBAR_ITEMS } from '../system/programs'

interface TaskbarStore {
  taskbarItems: FileSystemNode[]
  addItemToTaskbar: (item: FileSystemNode) => void
  removeItemFromTaskbar: (id: string) => void
}

const getSavedTaskbarItems = (): FileSystemNode[] => {
  const taskbarItems = localStorage.getItem('taskbar')

  if (taskbarItems) {
    return JSON.parse(taskbarItems)
  }

  return TASKBAR_ITEMS
}

export const useTaskbarStore = create<TaskbarStore>((set, get) => ({
  taskbarItems: getSavedTaskbarItems(),
  nextId: TASKBAR_ITEMS.length + 1,

  addItemToTaskbar: (item: FileSystemNode) => {
    const { taskbarItems } = get()
    const updatedItems = [...taskbarItems, { ...item, id: uuidv4() }]
    localStorage.setItem('taskbar', JSON.stringify(updatedItems))

    set({
      taskbarItems: updatedItems,
    })
  },

  removeItemFromTaskbar: (id: string) => {
    const { taskbarItems } = get()

    const updatedItems = taskbarItems.filter((app) => app.id !== id)
    localStorage.setItem('taskbar', JSON.stringify(updatedItems))

    set({
      taskbarItems: updatedItems,
    })
  },
}))
