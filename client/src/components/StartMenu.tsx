import { Box, List, ListItemButton, Paper } from '@mui/material'
import { useWindowStore } from '../stores/WindowStore'
import { DesktopItem } from '../types'
import { useState } from 'react'
import {
  APPS,
  FOLDERS,
  isApp,
  isLink,
  LINKS,
  PROGRAM_CONTENTS,
  PROGRAM_ICONS,
} from '../programs'

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
    if (isApp(item)) {
      openWindow(item.title, PROGRAM_CONTENTS[item.contentKey])
    } else if (isLink(item)) {
      window.open(item.url, '_blank')
    }
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
      >
        <List>
          <ListItemButton onClick={() => handleOpenSubmenu(SubMenu.Apps)}>
            Apps
          </ListItemButton>
          <ListItemButton onClick={() => handleOpenSubmenu(SubMenu.Folders)}>
            Folders
          </ListItemButton>
          <ListItemButton onClick={() => handleOpenSubmenu(SubMenu.Links)}>
            Links
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

        {submenu === SubMenu.Links && (
          <Paper elevation={8} sx={{ position: 'absolute', left: '100%', top: 0 }}>
            {renderApps(LINKS)}
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
