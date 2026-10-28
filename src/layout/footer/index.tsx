import { Box, Container, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box component='footer' sx={{ borderTop: 1, borderColor: 'divider', py: 3, mt: 8 }}>
      <Container>
        <Typography variant='body2' color='text.secondary' sx={{ textAlign: 'center' }}>
          © {new Date().getFullYear()} Boilerplate · Learn faster with someone who has done it before.
        </Typography>
      </Container>
    </Box>
  )
}
