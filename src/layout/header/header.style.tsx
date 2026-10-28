import { Container, styled } from '@mui/material'
import { NavLink } from 'react-router'

export const HeaderContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5)
}))

// theme.vars keeps colours in sync with the active light/dark scheme
export const NavItem = styled(NavLink)(({ theme }) => {
  const { palette } = theme.vars || theme

  return {
    padding: theme.spacing(0.75, 1.5),
    borderRadius: theme.shape.borderRadius,
    color: palette.text.secondary,
    fontWeight: 600,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    '&:hover': { color: palette.text.primary },
    '&.active': {
      color: palette.primary.main,
      backgroundColor: palette.action.selected
    }
  }
})
