import { create } from 'zustand'
import { Position, App } from '../types'
import { DEFAULT_PROGRAMS } from '../programs'

interface DesktopStore {
  desktopApps: App[]
  updateAppPosition: (id: number, position: Position) => void
}

const getSavedEntities = (): App[] => {
  const desktopApps = localStorage.getItem('apps')

  if (desktopApps) {
    return JSON.parse(desktopApps)
  }

  return DEFAULT_PROGRAMS.filter((entity: App) => entity.position)
}

export const useDesktopStore = create<DesktopStore>((set) => ({
  desktopApps: getSavedEntities(),

  updateAppPosition: (id: number, position: Position) =>
    set((state) => {
      const updatedEntities = state.desktopApps.map((entity) =>
        entity.id === id ? { ...entity, position } : entity
      )

      localStorage.setItem('apps', JSON.stringify(updatedEntities))
      return { desktopApps: updatedEntities }
    }),
}))
