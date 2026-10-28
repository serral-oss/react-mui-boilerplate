import { ReactNode, useMemo } from 'react'

import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import { inputCustomization, surfaceCustomization } from './customizations'
import { colorSchemes, typography } from './themePrimitives'

interface AppThemeProps {
  children: ReactNode
}

export const AppTheme = (props: AppThemeProps) => {
  const { children } = props
  const theme = useMemo(
    () =>
      createTheme({
        colorSchemes,
        components: {
          ...inputCustomization,
          ...surfaceCustomization,
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                transition: 'all 0.3s ease' // Smooth background transition on mode change
              }
            }
          }
        },
        typography,

        transitions: {
          duration: {
            shortest: 150,
            shorter: 200,
            short: 250,
            standard: 300,
            complex: 375,
            enteringScreen: 225,
            leavingScreen: 195
          },
          easing: {
            easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)', // Default easing curve for easeInOut
            easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)', // Default easeOut
            easeIn: 'cubic-bezier(0.4, 0, 1, 1)' // Default easeIn
          }
        }
      }),
    []
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
