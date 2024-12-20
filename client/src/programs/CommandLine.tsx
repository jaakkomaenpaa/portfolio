import { Dispatch, SetStateAction, useState } from 'react'
import { PROGRAMS } from '../files/programs'
import { FileSystemNode, ProgramType } from '../types'
import { Box, TextField, Typography } from '@mui/material'

const CommandLine = () => {
  const root = PROGRAMS.fileExplorer
  const [cwd, setCwd] = useState<FileSystemNode>(root) // Current working directory
  const [output, setOutput] = useState<string[]>([])
  const [command, setCommand] = useState<string>('')

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setOutput((prev) => [...prev, `> ${command}`])
      executeCommand(command, cwd, setOutput, setCwd)
      setCommand('')
    }
  }

  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: '#121212',
        color: 'text.primary',
        fontFamily: 'monospace',
        height: '400px',
        overflowY: 'auto',
      }}
    >
      <Box sx={{ mb: 2 }}>
        {output.map((line, index) => (
          <Typography key={index}>{line}</Typography>
        ))}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography sx={{ mr: 1, flexShrink: 0 }}>
          {cwd.title}
          {' $'}
        </Typography>
        <TextField
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={handleKeyPress}
          variant='standard'
          fullWidth
          slotProps={{ input: { disableUnderline: true, autoComplete: 'off' } }}
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
  setCwd: Dispatch<SetStateAction<FileSystemNode>>
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
    ['clear']: () => {
      setOutput([])
    },
    ['help']: () => {
      setOutput((prev) => [
        ...prev,
        `Available commands:
        - ls: List files and directories
        - cd <directory>: Change directory
        - cat <file>: View file content
        - clear: Clear the terminal
        - help: Show this help message`,
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
