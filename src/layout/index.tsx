import { Box, CircularProgress, Container } from '@mui/material'
import { Suspense } from 'react'
import { Outlet } from 'react-router'

import { BookingProvider } from '@/context'

import Footer from './footer'
import Header from './header'

export default function Layout() {
  return (
    <BookingProvider>
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Container component='main' sx={{ flex: 1, py: { xs: 4, md: 6 } }}>
          <Suspense
            fallback={
              <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
                <CircularProgress />
              </Box>
            }
          >
            <Outlet />
          </Suspense>
        </Container>
        <Footer />
      </Box>
    </BookingProvider>
  )
}
