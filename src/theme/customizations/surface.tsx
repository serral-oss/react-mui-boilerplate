import { Components, Theme } from '@mui/material/styles'

export const surfaceCustomization: Components<Theme> = {
  MuiContainer: {
    styleOverrides: {
      root: {
        maxWidth: '1440px !important'
      }
    }
  },
  MuiAccordion: {
    styleOverrides: {
      root: {
        transition: '0.3s',
        background: 'transparent !important',
        boxShadow: 'none',
        '&.Mui-expanded': {
          paddingBottom: '24px'
        }
      }
    }
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        transition: '0.3s',
        padding: '0px !important',
        borderTop: '1px solid #353535',
        boxShadow: 'none'
      },
      content: ({ theme }) => ({
        transition: '0.3s',
        margin: '24px 0px',
        '&.Mui-expanded': {
          margin: '24px 0px',
          '& .MuiTypography-root:nth-child(1)': {
            fontSize: '50px',
            [theme.breakpoints.down('md')]: {
              fontSize: '32px'
            }
          }
        },
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column'
        }
      })
    }
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        transition: '0.3s',
        padding: '0px'
      }
    }
  },
  MuiTabs: {
    styleOverrides: {
      root: {
        transition: '0.3s',
        padding: '0px',
        overflowX: 'auto',
        '& .MuiTabs-scroller': {
          overflowX: 'auto !important'
        },
        '& .MuiTabs-scroller::-webkit-scrollbar': {
          display: 'none'
        }
      },
      list: {
        transition: '0.3s',
        gap: '12px',
        flexDirection: 'column'
      },
      indicator: {
        display: 'none'
      }
    }
  },
  MuiTab: {
    styleOverrides: {
      root: ({ theme }) => ({
        transition: '0.3s',
        borderRadius: '8px',
        width: '100% !important',
        background: 'transparent',
        display: 'flex',
        flexDirection: 'row',
        border: 'none',
        textAlign: 'left',
        padding: '12px',
        minHeight: 'fit-content',
        gap: '16px',
        textTransform: 'capitalize',
        justifyContent: 'flex-start',
        color: theme.palette.text.disabled,
        '&.Mui-selected': {
          backgroundColor: theme.palette.secondary.light,
          color: theme.palette.secondary.main,
          borderColor: 'transparent'
        }
      }),
      icon: {
        margin: '0px'
      }
    }
  },
  MuiChip: {
    styleOverrides: {
      root: ({ theme }) => ({
        transition: '0.3s',
        width: 'fit-content',
        height: 'fit-content',
        borderRadius: '0px',
        variants: [
          {
            props: { color: 'secondary' },
            style: {
              backgroundColor: `${theme.palette.secondary.light} !important`
            }
          }
        ]
      }),
      label: ({ theme }) => ({
        transition: '0.3s',
        padding: '0px 12px',
        fontSize: '20px',
        fontWeight: 600,
        lineHeight: '30px',
        textTransform: 'capitalize',
        variants: [
          {
            props: { color: 'secondary' },
            style: {
              color: theme.palette.secondary.main
            }
          },
          {
            props: { size: 'medium' },
            style: {
              padding: '0px 6px',
              fontSize: '14px',
              fontWeight: 600,
              lineHeight: '20px',
              borderRadius: '4px'
            }
          },
          {
            props: { size: 'small' },
            style: {
              padding: '0px 4px',
              fontSize: '14px',
              fontWeight: 600,
              lineHeight: '20px',
              borderRadius: '4px'
            }
          },
          {
            props: { size: 'small', color: 'secondary' },
            style: {
              backgroundColor: 'rgba(226, 71, 68, 0.20)'
            }
          }
        ]
      })
    }
  },
  MuiStack: {
    styleOverrides: {
      root: {
        transition: '0.3s'
      }
    }
  },
  MuiPaper: {
    styleOverrides: {
      root: ({ theme }) => ({
        transition: '0.3s',
        boxShadow: '10px 4px 32px 10px rgba(12, 12, 13, 0.06)',
        backgroundColor: 'white',
        borderRadius: '18px',
        border: '1px solid',
        borderColor: theme.palette.divider,
        ...theme.applyStyles('dark', {
          backgroundColor: '#272729'
        })
      })
    }
  }
}
