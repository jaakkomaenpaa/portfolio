import { useState } from 'react'
import { Box, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import { FileSystemNode } from '../types'
import { FILE_SYSTEM, PROGRAM_CONTENTS } from '../programs'
import { useWindowStore } from '../stores/WindowStore'

interface FileExplorerItemProps {
  node: FileSystemNode
}

const FileExplorerItem = ({ node }: FileExplorerItemProps) => {
  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      {node.type === 'folder' ? '📁' : '📄'}
      {node.name}
    </Box>
  )
}

const FileExplorer = () => {
  const { openWindow } = useWindowStore()
  const [navigationStack, setNavigationStack] = useState<FileSystemNode[]>([
    FILE_SYSTEM[0],
  ])

  const currentNode = navigationStack[navigationStack.length - 1]

  const handleBack = () => {
    if (navigationStack.length > 1) {
      setNavigationStack((stack) => stack.slice(0, stack.length - 1))
    }
  }

  const handleNavigate = (node: FileSystemNode) => {
    if (node.type === 'folder') {
      setNavigationStack((stack) => [...stack, node])
    } else {
      // Content should exist on all files
      openWindow(node.name, PROGRAM_CONTENTS[node.content!])
    }
  }

  return (
    <Box>
      <Button onClick={handleBack} disabled={navigationStack.length <= 1}>
        <ArrowBackIcon />
      </Button>

      {currentNode.children?.map((node) => (
        <Box
          key={node.id}
          onDoubleClick={() => handleNavigate(node)}
          sx={{ cursor: 'pointer' }}
        >
          <FileExplorerItem node={node} />
        </Box>
      ))}
    </Box>
  )
}

export default FileExplorer
