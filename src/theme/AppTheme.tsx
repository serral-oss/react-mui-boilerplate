import { ReactNode } from 'react'

import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  cssVariables: { colorSchemeSelector: 'class' },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#4f46e5' },
        secondary: { main: '#0d9488' },
        background: { default: '#f8fafc', paper: '#ffffff' }
      }
    },
    dark: {
      palette: {
        primary: { main: '#818cf8' },
        secondary: { main: '#2dd4bf' },
        background: { default: '#0f172a', paper: '#1e293b' }
      }
    }
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: '"Manrope", "Segoe UI", Roboto, sans-serif',
    button: { textTransform: 'none', fontWeight: 600 }
  },
  components: {
    MuiButton: { defaultProps: { disableElevation: true } },
    MuiCard: { defaultProps: { variant: 'outlined' } }
  }
})

interface AppThemeProps {
  children: ReactNode
}

export const AppTheme = ({ children }: AppThemeProps) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
)
