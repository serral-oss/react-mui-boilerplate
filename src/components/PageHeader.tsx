import { Stack, Typography } from '@mui/material'

interface PageHeaderProps {
  title: string
  subtitle?: string
}

export const PageHeader = ({ title, subtitle }: PageHeaderProps) => (
  <Stack sx={{ gap: 1, mb: 4 }}>
    <Typography variant='h4' component='h1' sx={{ fontWeight: 800 }}>
      {title}
    </Typography>
    {subtitle && <Typography color='text.secondary'>{subtitle}</Typography>}
  </Stack>
)
