import { create } from 'zustand'
import { Notification } from '../types'
import { TIMERS } from '../config'

interface NotificationStore {
  notifications: Notification[]
  activeNotifications: Notification[]
  nextId: number
  pollerIntervalMs: number
  notificationDurationMs: number
  notificationsDisabled: boolean
  showNotification: (message: string) => void
  closeNotification: (id: number) => void
  setPollerIntervalMs: (interval: number) => void
  setNotificationDurationMs: (duration: number) => void
  setNotificationsDisabled: (value: boolean) => void
}

export const useNotificationStore = create<NotificationStore>((set, get) => ({
  notifications: [],
  activeNotifications: [],
  nextId: 1,
  pollerIntervalMs: parseInt(
    localStorage.getItem('poller') || TIMERS.POLL_INTERVAL.toString()
  ),
  notificationDurationMs: parseInt(
    localStorage.getItem('duration') || TIMERS.NOTIFICATION_DURATION.toString()
  ),
  notificationsDisabled: localStorage.getItem('notifications') === 'false',
  showNotification: (message: string) => {
    const { notifications, activeNotifications, nextId, notificationsDisabled } =
      get()
    if (notificationsDisabled) return

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
  setPollerIntervalMs: (interval: number) => {
    localStorage.setItem('poller', interval.toString())
    set({
      pollerIntervalMs: interval,
    })
  },
  setNotificationDurationMs: (duration: number) => {
    localStorage.setItem('duration', duration.toString())
    set({
      notificationDurationMs: duration,
    })
  },
  setNotificationsDisabled: (value: boolean) => {
    localStorage.setItem('notifications', (!value).toString())
    set({
      notificationsDisabled: value,
    })
  },
}))
