import { Box, Button, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router'

import { MentorAvatar } from '@/components/MentorAvatar'
import { NAVBAR } from '@/constants/navbar'
import { routers } from '@/constants/routers'
import { AppIcon, ColorModeToggle } from '@/core'
import { useAuth } from '@/hooks'
import { signOut, useDispatch } from '@/store'

import { HeaderContainer, NavItem } from './header.style'

export default function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLoggedIn, user } = useAuth()

  const nav = (
    <Stack component='nav' direction='row' sx={{ gap: 0.5, overflowX: 'auto' }}>
      {NAVBAR.map(item => (
        <NavItem key={item.url} to={item.url} end={item.url === routers.LANDING}>
          {item.label}
        </NavItem>
      ))}
    </Stack>
  )

  return (
    <Box
      component='header'
      sx={{
        borderBottom: 1,
        borderColor: 'divider',
        bgcolor: 'background.paper',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}
    >
      <HeaderContainer>
        <Stack direction='row' sx={{ gap: 4, alignItems: 'center' }}>
          <Stack
            component={Link}
            to={routers.LANDING}
            direction='row'
            sx={{ gap: 1, alignItems: 'center', color: 'text.primary', textDecoration: 'none' }}
          >
            <AppIcon name='logo' size={32} />
            <Typography variant='h6' sx={{ fontWeight: 800 }}>
              Boilerplate
            </Typography>
          </Stack>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>{nav}</Box>
        </Stack>

        <Stack direction='row' sx={{ gap: 1, alignItems: 'center' }}>
          <ColorModeToggle />
          {isLoggedIn && user ? (
            <>
              <Stack direction='row' sx={{ gap: 1, alignItems: 'center' }}>
                <MentorAvatar name={`${user.firstname} ${user.lastname}`} size={32} />
                <Typography sx={{ fontWeight: 600, display: { xs: 'none', sm: 'block' } }}>{user.firstname}</Typography>
              </Stack>
              <Tooltip title='Sign out'>
                <IconButton
                  aria-label='Sign out'
                  onClick={() => {
                    dispatch(signOut())
                    navigate(routers.LANDING)
                  }}
                >
                  <AppIcon name='logout' />
                </IconButton>
              </Tooltip>
            </>
          ) : (
            <Button variant='contained' component={Link} to={routers.SIGN_IN}>
              Sign in
            </Button>
          )}
        </Stack>
      </HeaderContainer>

      <Box sx={{ display: { xs: 'block', md: 'none' }, px: 1, pb: 1 }}>{nav}</Box>
    </Box>
  )
}
