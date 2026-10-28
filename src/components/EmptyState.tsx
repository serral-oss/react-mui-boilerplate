import { ReactNode } from 'react'
import { Paper, Stack, Typography } from '@mui/material'

interface EmptyStateProps {
  title: string
  description?: string
  action?: ReactNode
}

export const EmptyState = ({ title, description, action }: EmptyStateProps) => (
  <Paper variant='outlined' sx={{ p: { xs: 4, md: 6 }, textAlign: 'center' }}>
    <Stack sx={{ gap: 1, alignItems: 'center' }}>
      <Typography variant='h6' sx={{ fontWeight: 700 }}>
        {title}
      </Typography>
      {description && <Typography color='text.secondary'>{description}</Typography>}
      {action && <Stack sx={{ mt: 2 }}>{action}</Stack>}
    </Stack>
  </Paper>
)
