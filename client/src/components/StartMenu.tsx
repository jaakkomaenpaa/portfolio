import { Box, List, ListItemButton, Paper } from '@mui/material'
import { useWindowStore } from '../stores/WindowStore'
import { DesktopItem } from '../types'
import { useState } from 'react'
import { PROGRAM_ICONS, runProgram } from '../programs'

enum SubMenu {
  Apps,
  Folders,
  Links,
  Settings,
}

const StartMenu = () => {
  const { openWindow } = useWindowStore()
  const [submenu, setSubmenu] = useState<SubMenu | null>(null)

  const handleOpenSubmenu = (menuName: SubMenu) => {
    if (submenu === menuName) {
      handleCloseSubmenu()
      return
    }

    setSubmenu(menuName)
  }

  const handleCloseSubmenu = () => {
    setSubmenu(null)
  }

  const handleItemClick = (item: DesktopItem) => {
    runProgram(item.contentKey, item.type, openWindow)
  }

  const renderApps = (apps: DesktopItem[]) => {
    return (
      <List>
        {apps.map((app: DesktopItem) => (
          <ListItemButton
            key={app.id}
            onClick={() => handleItemClick(app)}
            draggable
            onDragStart={(e) =>
              e.dataTransfer.setData('application/json', JSON.stringify(app))
            }
            sx={{ display: 'flex', gap: 1 }}
          >
            {PROGRAM_ICONS[app.iconKey]({ fontSize: 'small' })} {app.title}
          </ListItemButton>
        ))}
      </List>
    )
  }

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: '100%',
        left: '10px',
        width: 'fit-content',
        height: 'auto',
      }}
    >
      <Paper
        elevation={8}
        sx={{
          backgroundColor: 'background.paper',
          color: 'text.primary',
          padding: '16px',
          borderRadius: '8px',
          width: '100%',
          position: 'relative',
        }}
      ></Paper>
    </Box>
  )
}

export default StartMenu
