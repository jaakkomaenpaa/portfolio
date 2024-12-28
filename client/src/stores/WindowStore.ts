import { ReactNode } from 'react'
import { create } from 'zustand'
import { Window } from '../types'

interface WindowStore {
  windows: Window[]
  nextId: number
  openWindow: (title: string, content: ReactNode) => void
  closeWindow: (id: number) => void
}

export const useWindowStore = create<WindowStore>((set, get) => ({
  windows: [],
  nextId: 1,
  openWindow: (title: string, content: ReactNode) => {
    const { windows, nextId } = get()
    const newWindow = {
      id: nextId,
      title,
      content,
    }

    const updatedWindows = [...windows, newWindow]
    set({
      windows: updatedWindows,
      nextId: nextId + 1,
    })
  },
  closeWindow: (id: number) => {
    const { windows } = get()
    const updatedWindows = windows.filter((window) => window.id !== id)
    set({
      windows: updatedWindows,
    })
  },
}))
