import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import { PROGRAMS } from '../files/programs'
import { FileSystemNode, ProgramType } from '../types'
import { Box, TextField, Typography } from '@mui/material'
import { runProgram } from '../files/utils'
import { useWindowStore } from '../stores/WindowStore'

const CommandLine = () => {
  const root = PROGRAMS.fileExplorer
  const [cwd, setCwd] = useState<FileSystemNode>(root) // Current working directory
  const [output, setOutput] = useState<string[]>([])
  const [command, setCommand] = useState<string>('')

  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [_, setHistoryIndex] = useState<number | null>(null)

  const { openWindow } = useWindowStore()

  const outputEndRef = useRef<HTMLDivElement>(null)
  const outputContainerRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom when new output is added
  useEffect(() => {
    if (outputEndRef.current && outputContainerRef.current) {
      const container = outputContainerRef.current
      container.scrollTop = container.scrollHeight
    }
  }, [output])

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setOutput((prev) => [...prev, `> ${command}`])
      executeCommand(command, cwd, setOutput, setCwd, openWindow)
      setCommandHistory((prev) => [...prev, command])
      setCommand('')
      setHistoryIndex(null)

      // These two are a product of GPT-4o
    } else if (e.key === 'ArrowUp') {
      if (commandHistory.length > 0) {
        setHistoryIndex((prevIndex) => {
          const newIndex =
            prevIndex === null
              ? commandHistory.length - 1
              : Math.max(0, prevIndex - 1)
          setCommand(commandHistory[newIndex])
          return newIndex
        })
      }
    } else if (e.key === 'ArrowDown') {
      if (commandHistory.length > 0) {
        setHistoryIndex((prevIndex) => {
          if (prevIndex === null || prevIndex === commandHistory.length - 1) {
            setCommand('')
          }
          const newIndex = Math.min(commandHistory.length - 1, prevIndex! + 1)
          setCommand(commandHistory[newIndex])
          return newIndex
        })
      }
    }
  }

  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: '#121212',
        color: '#fff',
        fontFamily: 'monospace',
        height: '400px',
        width: '600px',
        overflowY: 'auto',
        position: 'relative',
      }}
      ref={outputContainerRef}
    >
      <Box sx={{ mb: 2 }}>
        {output.map((line, index) => (
          <Typography key={index} sx={{ fontFamily: 'monospace' }}>
            {line}
          </Typography>
        ))}
        <div ref={outputEndRef} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography sx={{ mr: 1, flexShrink: 0, fontFamily: 'monospace' }}>
          {cwd.title}
          {' $'}
        </Typography>
        <TextField
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={handleKeyPress}
          variant='standard'
          fullWidth
          autoFocus
          slotProps={{ input: { disableUnderline: true, autoComplete: 'off' } }}
          sx={{ input: { fontFamily: 'monospace', color: '#fff' } }}
        />
      </Box>
    </Box>
  )
}

export default CommandLine

const executeCommand = (
  cmd: string,
  cwd: FileSystemNode,
  setOutput: Dispatch<SetStateAction<string[]>>,
  setCwd: Dispatch<SetStateAction<FileSystemNode>>,
  openWindow: (title: string, content: ReactNode) => void
) => {
  console.log('command', cmd)
  const args = cmd.trim().split(/\s+/)
  const command = args[0]
  const param = args[1]

  const actions: Record<string, () => void> = {
    ['ls']: () => {
      if (cwd.children) {
        const files = cwd.children.map((child) => child.title).join('\n')
        setOutput((prev) => [...prev, files])
      } else {
        setOutput((prev) => [...prev, 'No files or folders found.'])
      }
    },
    ['cd']: () => {
      if (param) {
        const target = cwd.children?.find(
          (child) => child.title.toLowerCase() === param.toLowerCase()
        )
        if (target && target.type === ProgramType.Folder) {
          setCwd(target)
        } else {
          setOutput((prev) => [...prev, `Directory "${param}" not found.`])
        }
      } else {
        setOutput((prev) => [...prev, 'Usage: cd <directory>'])
      }
    },
    ['cat']: () => {
      if (param) {
        const target = cwd.children?.find(
          (child) => child.title.toLowerCase() === param.toLowerCase()
        )
        if (target && target.type === ProgramType.App) {
          setOutput((prev) => [...prev, target.contentKey])
        } else {
          setOutput((prev) => [...prev, `File "${param}" not found.`])
        }
      } else {
        setOutput((prev) => [...prev, 'Usage: cat <file>'])
      }
    },
    ['open']: () => {
      if (param) {
        const target = cwd.children?.find(
          (child) => child.title.toLowerCase() === param.toLowerCase()
        )
        if (target) {
          runProgram(target.contentKey, target.type, openWindow)
        } else {
          setOutput((prev) => [...prev, `Directory or file "${param}" not found.`])
        }
      } else {
        setOutput((prev) => [...prev, 'Usage: open <directory | file>'])
      }
    },
    ['clear']: () => {
      setOutput([])
    },
    ['help']: () => {
      setOutput((prev) => [
        ...prev,
        'Available commands:',
        '- ls: List files and directories',
        '- cd <directory>: Change directory',
        '- cat <file>: View file content',
        '- open <directory | file>: Open directory or file in a new window',
        '- clear: Clear the terminal',
        '- help: Show this help message',
      ])
    },
  }

  if (actions[command]) {
    actions[command]()
  } else {
    setOutput((prev) => [
      ...prev,
      `Command "${command}" not found. Type "help" for a list of commands.`,
    ])
  }
}
