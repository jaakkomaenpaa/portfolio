import { create } from 'zustand'
import { Position, DesktopItem } from '../types'
import { DESKTOP_ITEMS } from '../programs'

interface DesktopStore {
  desktopItems: DesktopItem[]
  nextId: number
  updateItemPosition: (id: number, position: Position) => void
  addItemToDesktop: (item: DesktopItem) => void
  removeItemFromDesktop: (id: number) => void
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
  nextId: DESKTOP_ITEMS.length + 1,

  updateItemPosition: (id: number, position: Position) =>
    set((state) => {
      const updatedItems = state.desktopItems.map((entity) =>
        entity.id === id ? { ...entity, position } : entity
      )

      localStorage.setItem('desktop', JSON.stringify(updatedItems))
      return { desktopItems: updatedItems }
    }),

  addItemToDesktop: (item: DesktopItem) => {
    const { desktopItems, nextId } = get()
    const updatedItems = [
      ...desktopItems,
      { ...item, id: nextId, position: item.position || { x: 0, y: 0 } },
    ]
    localStorage.setItem('apps', JSON.stringify(updatedItems))

    set({
      desktopItems: updatedItems,
      nextId: nextId + 1,
    })
  },

  removeItemFromDesktop: (id: number) => {
    const { desktopItems } = get()

    const updatedItems = desktopItems.filter((app) => app.id !== id)
    localStorage.setItem('apps', JSON.stringify(updatedItems))

    set({
      desktopItems: updatedItems,
    })
  },
}))
