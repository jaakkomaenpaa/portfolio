import { Box, List, ListItemButton, Paper } from '@mui/material'
import { useWindowStore } from '../stores/WindowStore'
import { App } from '../types'
import { useState } from 'react'
import { APPS, FOLDERS, PROGRAM_CONTENTS, PROGRAM_ICONS } from '../programs'

enum SubMenu {
  Apps,
  Folders,
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

  const handleEntityClick = (entity: App) => {
    openWindow(entity.title, PROGRAM_CONTENTS[entity.contentKey])
  }

  const renderApps = (apps: App[]) => {
    return (
      <List>
        {apps.map((app: App) => (
          <ListItemButton
            key={app.id}
            onClick={() => handleEntityClick(app)}
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
            {renderApps(APPS)}
          </Paper>
        )}

        {submenu === SubMenu.Folders && (
          <Paper elevation={8} sx={{ position: 'absolute', left: '100%', top: 0 }}>
            {renderApps(FOLDERS)}
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
