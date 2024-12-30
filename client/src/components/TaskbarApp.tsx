import { Box, styled } from '@mui/material'

import { DesktopItem, FileSystemNode } from '../types'
import { useWindowStore } from '../stores/WindowStore'
import ItemContextMenu from './ItemContextMenu'
import { useContextMenu } from '../hooks/useContextMenu'
import { useTaskbarStore } from '../stores/TaskbarStore'
import { PROGRAM_ICONS, runProgram } from '../files/utils'

interface TaskbarAppProps {
  app: FileSystemNode
}

const AppIcon = styled(Box)({
  '&:hover': { opacity: 0.8 },
})

const TaskbarApp = ({ app }: TaskbarAppProps) => {
  const { openWindow } = useWindowStore()
  const { removeItemFromTaskbar } = useTaskbarStore()
  const { menuAnchor, openMenu, closeMenu } = useContextMenu()

  const handleOpenItem = (item: DesktopItem) => {
    runProgram(item, openWindow)
  }

  return (
    <>
      <div onContextMenu={openMenu}>
        <AppIcon onClick={() => handleOpenItem(app)}>
          {PROGRAM_ICONS[app.iconKey]({ fontSize: 'large' })}
        </AppIcon>
      </div>

      <ItemContextMenu
        parentItem={app}
        menuAnchor={menuAnchor}
        openItem={handleOpenItem}
        removeItem={removeItemFromTaskbar}
        closeMenu={closeMenu}
      />
    </>
  )
}

export default TaskbarApp
