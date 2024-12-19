import { Box, List, ListItemButton, Paper } from '@mui/material'
import { useWindowStore } from '../stores/WindowStore'
import { App } from '../types'
import { useState } from 'react'
import { useDesktopStore } from '../stores/DesktopStore'
import { PROGRAM_CONTENTS } from '../programs'

enum SubMenu {
  Apps,
  Folders,
  Settings,
}

const StartMenu = () => {
  const { desktopApps } = useDesktopStore()
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

  const handleEntityClick = (entity: App) => {
    openWindow(entity.title, PROGRAM_CONTENTS[entity.content])
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
      >
        <List>
          <ListItemButton onClick={() => handleOpenSubmenu(SubMenu.Apps)}>
            Apps
          </ListItemButton>
          <ListItemButton onClick={() => handleOpenSubmenu(SubMenu.Folders)}>
            Folders
          </ListItemButton>
          <ListItemButton onClick={() => handleOpenSubmenu(SubMenu.Settings)}>
            Settings
          </ListItemButton>
        </List>

        {submenu === SubMenu.Apps && (
          <Paper elevation={8} sx={{ position: 'absolute', left: '100%', top: 0 }}>
            <List>
              <ListItemButton onClick={handleCloseSubmenu}>App 1</ListItemButton>
              <ListItemButton onClick={handleCloseSubmenu}>App 2</ListItemButton>
            </List>
          </Paper>
        )}

        {submenu === SubMenu.Folders && (
          <Paper elevation={8} sx={{ position: 'absolute', left: '100%', top: 0 }}>
            <List>
              {desktopApps.map((app: App) => (
                <ListItemButton key={app.id} onClick={() => handleEntityClick(app)}>
                  {app.title}
                </ListItemButton>
              ))}
            </List>
          </Paper>
        )}

        {submenu === SubMenu.Settings && (
          <Paper elevation={8} sx={{ position: 'absolute', left: '100%', top: 0 }}>
            <List>
              <ListItemButton onClick={handleCloseSubmenu}>General</ListItemButton>
              <ListItemButton onClick={handleCloseSubmenu}>System</ListItemButton>
            </List>
          </Paper>
        )}
      </Paper>
    </Box>
  )
}

export default StartMenu
