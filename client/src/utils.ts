import { DIMENSIONS } from './config'
import { DesktopItem, Position } from './types'

const { GRID_SIZE_X, GRID_SIZE_Y, FOLDER_SIZE } = DIMENSIONS

export const snapToGrid = (x: number, y: number) => ({
  x: Math.round(x / GRID_SIZE_X) * GRID_SIZE_X,
  y: Math.round(y / GRID_SIZE_Y) * GRID_SIZE_Y,
})

const isColliding = (pos1: Position, pos2: Position) => {
  return (
    pos1.x < pos2.x + FOLDER_SIZE &&
    pos1.x + FOLDER_SIZE > pos2.x &&
    pos1.y < pos2.y + FOLDER_SIZE &&
    pos1.y + FOLDER_SIZE > pos2.y
  )
}

const resolveCollision = (
  desktopItems: DesktopItem[],
  id: string,
  position: Position
) => {
  const adjustedPosition = { ...position }

  while (
    desktopItems.some(
      (item: DesktopItem) =>
        // Position should always exist at this point
        item.id !== id && isColliding(item.position!, adjustedPosition)
    )
  ) {
    adjustedPosition.x += FOLDER_SIZE
    if (adjustedPosition.x > window.innerWidth - FOLDER_SIZE) {
      adjustedPosition.x = 0
      adjustedPosition.y += FOLDER_SIZE
    }
  }

  return adjustedPosition
}

export const resolveDesktopItemPosition = (
  desktopItems: DesktopItem[],
  itemId: string,
  position: Position
): Position => {
  const snappedPosition = snapToGrid(position.x, position.y)
  const resolvedPosition = resolveCollision(desktopItems, itemId, snappedPosition)
  return resolvedPosition
}
