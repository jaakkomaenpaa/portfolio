import { Box, Button, List, ListItem, Paper } from '@mui/material'
import { useWindowStore } from '../stores/WindowStore'
import { getFolderContent } from '../folders'
import { useFolderStore } from '../stores/FolderStore'
import { Folder } from '../types'

interface StartMenuProps {
  closeMenu: () => void
}

const StartMenu = ({ closeMenu }: StartMenuProps) => {
  const { folders } = useFolderStore()
  const { actions } = useWindowStore()
  const { openWindow } = actions

  const handleFolderClick = (title: string) => {
    openWindow(title, getFolderContent(title))
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
        }}
      >
        <List>
          {folders.map((folder: Folder) => (
            <ListItem key={folder.id}>
              <Button
                color='inherit'
                fullWidth
                onClick={() => handleFolderClick(folder.title)}
              >
                {folder.title}
              </Button>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  )
}

export default StartMenu
