import { useState } from 'react'
import { Box, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import { FileSystemNode, ProgramType } from '../types'
import { useWindowStore } from '../stores/WindowStore'
import { FILE_SYSTEM } from '../files/fileSystem'
import { runProgram } from '../files/utils'
import { PROGRAMS } from '../files/programs'

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
      {node.type === ProgramType.Folder ? '📁' : '📄'}
      {node.fileName}
    </Box>
  )
}

interface FileExplorerProps {
  nodeId?: number
}

const FileExplorer = ({ nodeId }: FileExplorerProps) => {
  const stack = getNavigationStack(
    FILE_SYSTEM,
    nodeId ?? PROGRAMS.fileExplorer.id,
    []
  )

  const [navigationStack, setNavigationStack] = useState<FileSystemNode[]>(stack)

  const { openWindow } = useWindowStore()

  const currentNode = navigationStack[navigationStack.length - 1]

  const handleBack = () => {
    if (navigationStack.length > 1) {
      setNavigationStack((stack) => stack.slice(0, stack.length - 1))
    }
  }

  const handleNavigate = (node: FileSystemNode) => {
    if (node.type === ProgramType.Folder) {
      setNavigationStack((stack) => [...stack, node])
    } else {
      runProgram(node, openWindow)
    }
  }

  return (
    <Box sx={{ padding: '16px' }}>
      <Button onClick={handleBack} disabled={navigationStack.length <= 1}>
        <ArrowBackIcon />
      </Button>

      {currentNode.children?.map((node) => (
        <Box
          key={node.id}
          onClick={() => handleNavigate(node)}
          sx={{ cursor: 'pointer' }}
        >
          <FileExplorerItem node={node} />
        </Box>
      ))}
    </Box>
  )
}

export default FileExplorer

// Fine for small file tree, but could be optimized for larger system
const getNavigationStack = (
  fileSystem: FileSystemNode[],
  targetNodeId: number,
  currentStack: FileSystemNode[]
): FileSystemNode[] => {
  for (const node of fileSystem) {
    if (!node.children) {
      continue
    }

    const newStack = [...currentStack, node]

    if (node.id === targetNodeId) {
      return newStack
    }

    const result = getNavigationStack(node.children, targetNodeId, newStack)
    if (result.length > 0) {
      return result
    }
  }

  return []
}
