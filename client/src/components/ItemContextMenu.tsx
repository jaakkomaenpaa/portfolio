import { Menu, MenuItem } from '@mui/material'
import { FileSystemNode } from '../types'

interface ItemContextMenuProps {
  parentItem: FileSystemNode
  menuAnchor: { mouseX: number; mouseY: number } | null
  openItem: (item: FileSystemNode) => void
  removeItem: (id: number) => void
  closeMenu: () => void
}

const ItemContextMenu = ({
  parentItem,
  menuAnchor,
  openItem,
  closeMenu,
  removeItem,
}: ItemContextMenuProps) => {
  
  return (
    <Menu
      open={!!menuAnchor}
      onClose={closeMenu}
      anchorReference='anchorPosition'
      anchorPosition={
        menuAnchor ? { top: menuAnchor.mouseY, left: menuAnchor.mouseX } : undefined
      }
    >
      <MenuItem
        onClick={() => {
          openItem(parentItem)
          closeMenu()
        }}
      >
        Open
      </MenuItem>
      <MenuItem
        onClick={() => {
          removeItem(parentItem.id)
          closeMenu()
        }}
      >
        Remove
      </MenuItem>
    </Menu>
  )
}

export default ItemContextMenu
