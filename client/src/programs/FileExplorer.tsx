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
    <Box
      draggable
      onDragStart={(e) =>
        e.dataTransfer.setData('application/json', JSON.stringify(node))
      }
      sx={{ display: 'flex', gap: 1 }}
    >
      {node.type === 'folder' ? '📁' : '📄'}
      {node.title}
    </Box>
  )
}

interface FileExplorerProps {
  node?: FileSystemNode
}

// Fine for small file tree, but could be optimized for larger system
const getNavigationStack = (
  fileSystem: FileSystemNode[],
  targetNode: FileSystemNode,
  currentStack: FileSystemNode[]
): FileSystemNode[] => {
  for (const node of fileSystem) {
    const newStack = [...currentStack, node]

    if (node.id === targetNode.id) {
      return newStack
    }

    if (node.children) {
      const stack = getNavigationStack(node.children, targetNode, newStack)
      if (stack) {
        return stack
      }
    }
  }

  return [FILE_SYSTEM[0]]
}

const FileExplorer = ({ node }: FileExplorerProps) => {
  const stack = getNavigationStack(FILE_SYSTEM, node || FILE_SYSTEM[0], [])
  const [navigationStack, setNavigationStack] = useState<FileSystemNode[]>(stack)

  const { openWindow } = useWindowStore()

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
      openWindow(node.title, PROGRAM_CONTENTS[node.contentKey!])
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
