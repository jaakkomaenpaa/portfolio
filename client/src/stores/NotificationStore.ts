import { create } from 'zustand'
import { Notification } from '../types'

interface NotificationStore {
  notifications: Notification[]
  activeNotifications: Notification[]
  nextId: number
  showNotification: (message: string) => void
  closeNotification: (id: number) => void
}

export const useNotificationStore = create<NotificationStore>((set, get) => ({
  notifications: [],
  activeNotifications: [],
  nextId: 1,
  showNotification: (message: string) => {
    const { notifications, activeNotifications, nextId } = get()
    const newNotification: Notification = {
      id: nextId,
      message,
    }

    set({
      notifications: [...notifications, newNotification],
      activeNotifications: [...activeNotifications, newNotification],
      nextId: nextId + 1,
    })
  },
  closeNotification: (id: number) => {
    const { activeNotifications } = get()
    const updatedNotifications = activeNotifications.filter(
      (notification) => notification.id !== id
    )
    set({
      activeNotifications: updatedNotifications,
    })
  },
}))
