import { ReactNode } from 'react'
import { create } from 'zustand'
import { Window } from '../types'

interface WindowStore {
  windows: Window[]
  nextId: number
  actions: {
    openWindow: (title: string, content: ReactNode) => void
    closeWindow: (id: number) => void
  }
}

export const useWindowStore = create<WindowStore>((set, get) => ({
  windows: [],
  nextId: 1,
  actions: {
    openWindow: (title: string, content: ReactNode) => {
      const { windows, nextId } = get()
      const newWindow = {
        id: nextId,
        title,
        content,
      }

      set({
        windows: [...windows, newWindow],
        nextId: nextId + 1,
      })
    },
    closeWindow: (id: number) => {
      const { windows } = get()
      set({
        windows: windows.filter((window) => window.id !== id),
      })
    },
  },
}))
