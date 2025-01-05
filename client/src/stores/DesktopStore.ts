import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'
import { Position, DesktopItem } from '../types'
import { DESKTOP_ITEMS } from '../system/programs'

interface DesktopStore {
  desktopItems: DesktopItem[]
  updateItemPosition: (id: string, position: Position) => void
  addItemToDesktop: (item: DesktopItem) => void
  removeItemFromDesktop: (id: string) => void
}

const getSavedDesktopItems = (): DesktopItem[] => {
  const desktopItems = localStorage.getItem('desktop')

  if (desktopItems) {
    return JSON.parse(desktopItems)
  }

  return DESKTOP_ITEMS.filter((item: DesktopItem) => item.position)
}

export const useDesktopStore = create<DesktopStore>((set, get) => ({
  desktopItems: getSavedDesktopItems(),
  updateItemPosition: (id: string, position: Position) =>
    set((state) => {
      const updatedItems = state.desktopItems.map((item) =>
        item.id === id ? { ...item, position } : item
      )

      localStorage.setItem('desktop', JSON.stringify(updatedItems))
      return { desktopItems: updatedItems }
    }),

  addItemToDesktop: (item: DesktopItem) => {
    const { desktopItems } = get()
    const updatedItems = [
      ...desktopItems,
      { ...item, id: uuidv4(), position: item.position || { x: 0, y: 0 } },
    ]
    localStorage.setItem('desktop', JSON.stringify(updatedItems))

    set({
      desktopItems: updatedItems,
    })
  },

  removeItemFromDesktop: (id: string) => {
    const { desktopItems } = get()

    const updatedItems = desktopItems.filter((app) => app.id !== id)
    localStorage.setItem('desktop', JSON.stringify(updatedItems))

    set({
      desktopItems: updatedItems,
    })
  },
}))
