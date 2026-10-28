import { Box, Stack, Typography, Button } from '@mui/material'

import { AppIcon } from '@/core/appicon'

import { HeaderContainer } from './header.style'
import { NAVBAR } from '@/constants/navbar'

export default function Header() {
  return (
    <Box>
      <HeaderContainer>
        <Stack direction={'row'} sx={{ gap: 10 }}>
          <AppIcon name='logo' width={70} height={20} />
          <Stack component='ul' direction='row' sx={{ gap: 5 }}>
            {NAVBAR.map((item, index) => (
              <Typography key={`index-${index}`}>{item.label}</Typography>
            ))}
          </Stack>
        </Stack>
        <Stack>
          <Button variant='outlined' startIcon={<AppIcon name='upload' size={16}></AppIcon>}></Button>
        </Stack>
      </HeaderContainer>
    </Box>
  )
}
