import { create } from 'zustand'
import { Wallpaper } from '../types'

import wallpaperPink from '../assets/wallpaper.png'
import wallpaperDark from '../assets/resized_dark_wallpaper.png'
import wallpaperLight from '../assets/resized_light_wallpaper.png'
import { PaletteMode } from '@mui/material'

const WALLPAPER_DARK = {
  name: 'Dark',
  src: wallpaperDark,
}

const WALLPAPER_LIGHT = {
  name: 'Light',
  src: wallpaperLight,
}

const WALLPAPERS: Wallpaper[] = [
  {
    name: 'None',
    src: '',
  },
  {
    name: 'By theme',
    src: '',
  },
  {
    name: 'Pink',
    src: wallpaperPink,
  },
  WALLPAPER_DARK,
  WALLPAPER_LIGHT,
]

interface WallpaperStore {
  selectedWallpaper: Wallpaper
  wallpaperOptions: Wallpaper[]
  getWallpaper: (themeMode: PaletteMode) => Wallpaper
  setWallpaper: (wallpaper: Wallpaper) => void
}

const getSavedWallpaper = (): Wallpaper => {
  const savedWallpaper = localStorage.getItem('wallpaper')
  if (savedWallpaper) {
    return JSON.parse(savedWallpaper)
  }

  return WALLPAPERS[0]
}

export const useWallpaperStore = create<WallpaperStore>((set) => ({
  selectedWallpaper: getSavedWallpaper(),
  wallpaperOptions: WALLPAPERS,
  getWallpaper: (themeMode: PaletteMode): Wallpaper => {
    const wallpaper = getSavedWallpaper()
    if (wallpaper.name === 'By theme') {
      return themeMode === 'light' ? WALLPAPER_LIGHT : WALLPAPER_DARK
    }
    return wallpaper
  },
  setWallpaper: (wallpaper: Wallpaper): void => {
    localStorage.setItem('wallpaper', JSON.stringify(wallpaper))

    set({
      selectedWallpaper: wallpaper,
    })
  },
}))
