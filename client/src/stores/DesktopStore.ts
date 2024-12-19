import { create } from 'zustand'
import { Position, App } from '../types'
import { DEFAULT_PROGRAMS } from '../programs'

interface DesktopStore {
  desktopApps: App[]
  updateAppPosition: (id: number, position: Position) => void
  addAppToDesktop: (app: App) => void
  removeAppFromDesktop: (id: number) => void
}

const getSavedEntities = (): App[] => {
  const desktopApps = localStorage.getItem('apps')

  if (desktopApps) {
    return JSON.parse(desktopApps)
  }

  return DEFAULT_PROGRAMS.filter((entity: App) => entity.position)
}

export const useDesktopStore = create<DesktopStore>((set, get) => ({
  desktopApps: getSavedEntities(),

  updateAppPosition: (id: number, position: Position) =>
    set((state) => {
      const updatedEntities = state.desktopApps.map((entity) =>
        entity.id === id ? { ...entity, position } : entity
      )

      localStorage.setItem('apps', JSON.stringify(updatedEntities))
      return { desktopApps: updatedEntities }
    }),

  addAppToDesktop: (app: App) => {
    const { desktopApps } = get()
    // TODO: Add app position

    const updatedApps = [...desktopApps, app]
    localStorage.setItem('apps', JSON.stringify(updatedApps))

    set({
      desktopApps: updatedApps,
    })
  },

  removeAppFromDesktop: (id: number) => {
    const { desktopApps } = get()

    const updatedApps = desktopApps.filter((app) => app.id !== id)
    localStorage.setItem('apps', JSON.stringify(updatedApps))

    set({
      desktopApps: updatedApps,
    })
  },
}))
