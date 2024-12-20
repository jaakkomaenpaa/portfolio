import { createTheme, Theme } from '@mui/material'

declare module '@mui/material/styles' {
  interface Palette {
    folder: Palette['primary']
  }
  interface PaletteOptions {
    folder?: PaletteOptions['primary']
  }
}

export const lightTheme: Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // Blue
    },
    secondary: {
      main: '#ff4081', // Pink
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#121212',
      secondary: '#555555',
    },
    folder: {
      main: '#F2C94C',
    },
  },
})

export const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Light blue
    },
    secondary: {
      main: '#f48fb1', // Light pink
    },
    background: {
      default: '#2a2a2a',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#aaaaaa',
    },
    folder: {
      main: '#F2C94C',
    },
  },
})
