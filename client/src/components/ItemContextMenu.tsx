import { Menu, MenuItem } from '@mui/material'
import { FileSystemNode } from '../types'
import { useTaskbarStore } from '../stores/TaskbarStore'

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
  const { addItemToTaskbar } = useTaskbarStore()

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
          addItemToTaskbar(parentItem)
          closeMenu()
        }}
      >
        Add to taskbar
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
