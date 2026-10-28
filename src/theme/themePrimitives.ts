import { alpha } from '@mui/material/styles'

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    highlighted: true
  }
}
declare module '@mui/material/styles' {
  interface PaletteColor {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
  }

  interface Palette {
    baseShadow: string
  }
}

export const brand = {
  50: 'hsl(210, 100%, 95%)',
  100: 'hsl(210, 100%, 92%)',
  200: 'hsl(210, 100%, 80%)',
  300: 'hsl(210, 100%, 65%)',
  400: 'hsl(210, 98%, 48%)',
  500: 'hsl(210, 98%, 42%)',
  600: 'hsl(210, 98%, 55%)',
  700: 'hsl(210, 100%, 35%)',
  800: 'hsl(210, 100%, 16%)',
  900: 'hsl(210, 100%, 21%)'
}

export const gray = {
  50: 'hsl(220, 35%, 97%)',
  100: 'hsl(220, 30%, 94%)',
  200: 'hsl(220, 20%, 88%)',
  300: 'hsl(220, 20%, 80%)',
  400: 'hsl(220, 20%, 65%)',
  500: 'hsl(220, 20%, 42%)',
  600: 'hsl(220, 20%, 35%)',
  700: 'hsl(220, 20%, 25%)',
  800: 'hsl(220, 30%, 6%)',
  900: 'hsl(220, 35%, 3%)'
}

export const green = {
  50: 'hsl(120, 80%, 98%)',
  100: 'hsl(120, 75%, 94%)',
  200: 'hsl(120, 75%, 87%)',
  300: 'hsl(120, 61%, 77%)',
  400: 'hsl(120, 44%, 53%)',
  500: 'hsl(120, 59%, 30%)',
  600: 'hsl(120, 70%, 25%)',
  700: 'hsl(120, 75%, 16%)',
  800: 'hsl(120, 84%, 10%)',
  900: 'hsl(120, 87%, 6%)'
}

export const orange = {
  50: 'hsl(45, 100%, 97%)',
  100: 'hsl(45, 92%, 90%)',
  200: 'hsl(45, 94%, 80%)',
  300: 'hsl(45, 90%, 65%)',
  400: 'hsl(45, 90%, 40%)',
  500: 'hsl(45, 90%, 35%)',
  600: 'hsl(45, 91%, 25%)',
  700: 'hsl(45, 94%, 20%)',
  800: 'hsl(45, 95%, 16%)',
  900: 'hsl(45, 93%, 12%)'
}

export const red = {
  50: 'hsl(0, 100%, 97%)',
  100: 'hsl(0, 92%, 90%)',
  200: 'hsl(0, 94%, 80%)',
  300: 'hsl(0, 90%, 65%)',
  400: 'hsl(0, 90%, 40%)',
  500: 'hsl(0, 90%, 30%)',
  600: 'hsl(0, 91%, 25%)',
  700: 'hsl(0, 94%, 18%)',
  800: 'hsl(0, 95%, 12%)',
  900: 'hsl(0, 93%, 6%)'
}

export const colorSchemes = {
  light: {
    palette: {
      primary: {
        dark: '#797979',
        main: '#1d1d1f !important',
        light: '#f1f1f1'
      },
      secondary: {
        light: 'rgba(226, 71, 68, 0.08)',
        main: '#E24744 !important',
        dark: 'rgba(226, 71, 68, 0.20)'
      },
      info: {
        light: brand[100],
        main: brand[300],
        dark: brand[600],
        contrastText: gray[50]
      },
      warning: {
        light: orange[300],
        main: '#fff',
        dark: orange[800]
      },
      error: {
        light: red[300],
        main: red[400],
        dark: red[800]
      },
      success: {
        light: green[300],
        main: '#26BE07',
        dark: green[800]
      },
      grey: {
        ...gray
      },
      divider: '#ECECEC !important',
      background: {
        default: '#FFF',
        paper: '#F1F1F1'
      },
      text: {
        primary: gray[800],
        secondary: gray[600],
        warning: orange[400]
      },
      textDisabled: {
        light: '#414141',
        main: '#797979 !important'
      },
      action: {
        hover: alpha(gray[200], 0.2),
        selected: `${alpha(gray[200], 0.3)}`
      },
      baseShadow: 'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px'
    }
  },
  dark: {
    palette: {
      primary: {
        light: '#797979',
        main: '#fff',
        dark: '#f1f1f1'
      },
      secondary: {
        light: 'rgba(226, 71, 68, 0.08)',
        main: '#E24744 !important',
        dark: 'rgba(226, 71, 68, 0.20)'
      },
      info: {
        contrastText: brand[300],
        light: brand[500],
        main: brand[700],
        dark: brand[900]
      },
      warning: {
        light: orange[400],
        main: '#1d1d1f !important',
        dark: orange[700]
      },
      error: {
        light: red[400],
        main: red[500],
        dark: red[700]
      },
      success: {
        light: green[300],
        main: '#26BE07 !important',
        dark: green[800]
      },
      grey: {
        ...gray
      },
      divider: '#262628 !important',
      background: {
        default: '#19191b',
        paper: '#28282A'
      },
      text: {
        primary: 'hsl(0, 0%, 100%)',
        secondary: gray[400]
      },
      textDisabled: {
        main: '#797979 !important'
      },
      action: {
        hover: alpha(gray[600], 0.2),
        selected: alpha(gray[600], 0.3)
      },
      baseShadow: 'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px'
    }
  }
}

export const color = {
  cyan: '#0FF',
  grey: '#111212',
  green: '#5AFFA1',
  blue: '#5AC4FF',
  black: 'black',
  white: 'white'
}
export const typography = {
  fontFamily: 'Manrope',
  h1: {
    fontFamily: '"Pro Display", sans-serif !important',
    fontSize: '70px',
    fontWeight: 700
  },
  h2: {
    fontFamily: '"Pro Display", sans-serif !important',
    fontSize: '50px',
    fontWeight: 700
  },
  h3: {
    fontSize: '32px',
    fontWeight: 700
  },
  h4: {
    fontWeight: 700,
    fontSize: '28px'
  },
  h5: {
    fontSize: '24px',
    fontWeight: 600
  },
  h6: {
    fontSize: '20px',
    fontWeight: 600
  },
  body1: {
    fontSize: '14px',
    fontWeight: 400
  },
  body2: {
    fontSize: '12px'
  },
  subtitle1: {
    fontSize: '16px'
  },
  caption: {
    fontSize: '10px'
  }
}
