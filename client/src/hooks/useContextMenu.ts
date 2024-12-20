import { useState } from 'react'

export const useContextMenu = () => {
  const [menuAnchor, setMenuAnchor] = useState<{
    mouseX: number
    mouseY: number
  } | null>(null)

  const openMenu = (event: React.MouseEvent) => {
    event.preventDefault()
    setMenuAnchor({
      mouseX: event.clientX + 2,
      mouseY: event.clientY - 6,
    })
  }

  const closeMenu = () => {
    setMenuAnchor(null)
  }

  return { menuAnchor, openMenu, closeMenu }
}
