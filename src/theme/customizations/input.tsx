import { alpha, Components, Theme } from '@mui/material/styles'
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded'

export const inputCustomization: Components<Theme> = {
  MuiInputBase: {
    styleOverrides: {
      root: {
        height: 'fit-content',
        width: '100%',
        padding: '8px 16px',
        border: '1px solid #D3D3D3',
        borderRadius: '8px',
        backgroundColor: '#fafafa',
        color: '#797979',
        gap: '12px',
        lineHeight: 'normal',
        variants: [
          {
            props: {
              size: 'medium'
            },
            style: {
              backgroundColor: '#fff',
              padding: '12px'
            }
          },
          {
            props: {
              size: 'small'
            },
            style: {
              backgroundColor: '#fff',
              padding: '8px'
            }
          }
        ]
      },
      input: {
        padding: '0px'
      }
    }
  },
  MuiButtonBase: {
    styleOverrides: {
      root: ({ theme }) => ({
        transition: '0.3s',
        width: 'fit-content !important',
        height: 'fit-content !important',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid',
        borderColor: theme.palette.divider,
        ':hover': {
          opacity: '0.7'
        }
      })
    }
  },
  MuiIconButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        transition: '0.3s',
        border: '1px solid',
        padding: '12px',
        borderRadius: '8px',
        variants: [
          {
            props: {
              color: 'secondary'
            },
            style: {
              backgroundColor: theme.palette.secondary.light,
              border: 'none'
            }
          },
          {
            props: {
              size: 'small'
            },
            style: {
              padding: '8px'
            }
          }
        ]
      })
    }
  },
  MuiStep: {
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiStepButton-root': {
          borderColor: '#1d1d1f !important',
          ...theme.applyStyles('dark', {
            borderColor: '#797979 !important',
            backgroundColor: '#19191b'
          })
        },
        '& .Mui-disabled': {
          borderColor: '#f1f1f1 !important',
          ...theme.applyStyles('dark', {
            borderColor: '#262628 !important'
          })
        },
        '&.Mui-completed .MuiStepButton-root': {
          borderColor: theme.palette.secondary.main
        },
        padding: '0px'
      })
    }
  },
  MuiStepButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: '4px 8px 4px 4px',
        borderRadius: '1000px',
        backgroundColor: 'transparent',
        margin: '0px',

        [theme.breakpoints.down('lg')]: {
          padding: '4px'
        }
      })
    }
  },
  MuiStepConnector: {
    styleOverrides: {
      root: ({ theme }) => ({
        width: '32px',
        height: '1px',
        '&.Mui-active .MuiStepConnector-line': {
          borderColor: theme.palette.secondary.main,
          ...theme.applyStyles('dark', {
            borderColor: 'white'
          })
        }
      })
    }
  },
  MuiStepLabel: {
    styleOverrides: {
      root: {
        textTransform: 'capitalize'
      },
      iconContainer: ({ theme }) => ({
        '&.Mui-disabled .MuiSvgIcon-root': {
          color: '#f1f1f1'
        },
        '&.Mui-disabled .MuiSvgIcon-root .MuiStepIcon-text': {
          fill: '#797979 '
        },
        '&.Mui-active .MuiSvgIcon-root': {
          color: `#f1f1f1 !important`
        },
        '&.Mui-active .MuiSvgIcon-root .MuiStepIcon-text': {
          fill: '#1d1d1f !important'
        },
        '&.Mui-completed': {
          color: theme.palette.secondary.main
        },

        [theme.breakpoints.down('lg')]: {
          padding: '0px'
        }
      }),
      label: ({ theme }) => ({
        lineHeight: '18px',
        fontWeight: 700,
        fontSize: '12px',
        color: '#797979',
        '&.Mui-active': {
          color: '#1d1d1f !important',
          ...theme.applyStyles('dark', {
            color: 'white'
          })
        },
        '&.Mui-completed': {
          color: theme.palette.secondary.main,

          [theme.breakpoints.down('lg')]: {
            display: 'initial !important',
            padding: '0px 4px'
          }
        },
        [theme.breakpoints.down('lg')]: {
          display: 'none'
        }
      })
    }
  },
  MuiCheckbox: {
    defaultProps: {
      disableRipple: true,
      icon: <CheckBoxOutlineBlankRoundedIcon sx={{ color: 'transparent' }} />,
      checkedIcon: <CheckRoundedIcon sx={{ height: 12, width: 12, color: 'white' }} />,
      indeterminateIcon: <RemoveRoundedIcon sx={{ height: 12, width: 12 }} />
    },
    styleOverrides: {
      root: ({ theme }) => ({
        height: '14px !important',
        width: '14px !important',
        border: '1px solid ',
        borderColor: theme.palette.divider,
        padding: '4px',
        backgroundColor: '#fff',
        borderRadius: '4px',
        transition: '120ms ease-in',
        '&:hover': {
          borderColor: theme.palette.secondary.main
        },
        '&.Mui-focusVisible': {
          outline: `3px solid ${alpha(theme.palette.secondary.main, 0.5)}`,
          outlineOffset: '2px'
        },
        '&.Mui-checked': {
          color: 'white',
          backgroundColor: theme.palette.secondary.main,
          borderColor: theme.palette.secondary.main,
          boxShadow: `none`,
          '&:hover': {
            backgroundColor: theme.palette.secondary.main
          }
        }
      })
    }
  },
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: 'red',
        variants: [
          {
            props: {
              size: 'large'
            },
            style: {
              padding: 48
            }
          }
        ],
        [theme.breakpoints.down('md')]: {
          padding: '12px'
        }
      })
    }
  },
  MuiTypography: {
    styleOverrides: {
      root: ({ theme }) => ({
        transition: '0.3s',
        ...theme.applyStyles('dark', {
          color: 'white'
        }),
        variants: [
          {
            props: {
              variant: 'h1'
            },
            style: {
              [theme.breakpoints.down('md')]: {
                fontSize: '48px'
              }
            }
          },
          {
            props: {
              variant: 'h2'
            },
            style: {
              [theme.breakpoints.down('md')]: {
                fontSize: '32px'
              }
            }
          },
          {
            props: {
              variant: 'h3'
            },
            style: {
              [theme.breakpoints.down('md')]: {
                fontSize: '24px'
              }
            }
          },
          {
            props: {
              variant: 'h4'
            },
            style: {
              [theme.breakpoints.down('md')]: {
                fontSize: '24px'
              }
            }
          },
          {
            props: {
              variant: 'h6'
            },
            style: {
              [theme.breakpoints.down('md')]: {
                fontSize: '16px'
              }
            }
          },
          {
            props: {
              variant: 'subtitle1'
            },
            style: {
              [theme.breakpoints.down('md')]: {
                fontSize: '14px'
              }
            }
          },
          {
            props: {
              variant: 'overline'
            },
            style: {
              textDecorationLine: 'underline',
              textDecorationStyle: 'solid',
              textDecorationSkipInk: 'none',
              textUnderlineOffset: 'auto',
              textUnderlinePosition: 'from-font',
              textTransform: 'none'
            }
          }
        ]
      })
    }
  },
  MuiFormControlLabel: {
    styleOverrides: {
      label: {
        fontSize: '10px',
        marginLeft: '4px'
      }
    }
  }
}
