import { Box, styled } from '@mui/material'

import { DesktopItem, FileSystemNode } from '../types'
import { PROGRAM_ICONS, runProgram } from '../programs'
import { useWindowStore } from '../stores/WindowStore'

interface TaskbarAppProps {
  app: FileSystemNode
}

const AppIcon = styled(Box)({
  '&:hover': { opacity: 0.8 },
})

const TaskbarApp = ({ app }: TaskbarAppProps) => {
  const { openWindow } = useWindowStore()

  const handleOpenItem = (item: DesktopItem) => {
    runProgram(item.contentKey, item.type, openWindow)
  }

  return (
    <AppIcon onClick={() => handleOpenItem(app)}>
      {PROGRAM_ICONS[app.iconKey]({ fontSize: 'large' })}
    </AppIcon>
  )
}

export default TaskbarApp
