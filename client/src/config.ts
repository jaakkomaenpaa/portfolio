const GRID_SIZE_X = 90
const GRID_SIZE_Y = 80

const FOLDER_SIZE = 80

const TASKBAR_HEIGHT = 70

const LEFT_BOUND = 0
const TOP_BOUND = 0
const RIGHT_BOUND = window.innerWidth - FOLDER_SIZE
const BOTTOM_BOUND =
  window.innerHeight - FOLDER_SIZE - TASKBAR_HEIGHT + GRID_SIZE_Y / 2

const RANDOM_ADVICE_URL = 'https://api.adviceslip.com/advice'

export const DIMENSIONS = {
  GRID_SIZE_X,
  GRID_SIZE_Y,
  FOLDER_SIZE,
  TASKBAR_HEIGHT,
  BOUNDS: {
    left: LEFT_BOUND,
    top: TOP_BOUND,
    right: RIGHT_BOUND,
    bottom: BOTTOM_BOUND,
  },
}

export const URLS = {
  RANDOM_ADVICE_URL,
}
