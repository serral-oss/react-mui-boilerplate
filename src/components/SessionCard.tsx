import { Button, Card, CardContent, Chip, Stack, Typography } from '@mui/material'
import { Link } from 'react-router'

import { mentorPath } from '@/constants/routers'
import { AppIcon } from '@/core'
import { Session } from '@/types'
import { formatSessionDate, isPastSession } from '@/util'

import { MentorAvatar } from './MentorAvatar'

interface SessionCardProps {
  session: Session
  onCancel?: (session: Session) => void
}

export const SessionCard = ({ session, onCancel }: SessionCardProps) => {
  const past = isPastSession(session.startsAt)
  const cancelled = session.status === 'cancelled'
  const canCancel = !past && !cancelled && onCancel

  return (
    <Card sx={{ opacity: cancelled ? 0.6 : 1 }}>
      <CardContent>
        <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 2, alignItems: { sm: 'center' } }}>
          <MentorAvatar name={session.mentorName} size={48} />

          <Stack sx={{ flex: 1, minWidth: 0, gap: 0.5 }}>
            <Stack direction='row' sx={{ gap: 1, alignItems: 'center', flexWrap: 'wrap' }}>
              <Typography
                component={Link}
                to={mentorPath(session.mentorId)}
                sx={{ fontWeight: 700, color: 'text.primary', textDecoration: 'none' }}
              >
                {session.mentorName}
              </Typography>
              {cancelled ? (
                <Chip label='Cancelled' size='small' />
              ) : past ? (
                <Chip label='Completed' size='small' color='success' variant='outlined' />
              ) : (
                <Chip label='Upcoming' size='small' color='primary' />
              )}
            </Stack>
            <Typography variant='body2'>{session.topic}</Typography>
            <Stack direction='row' sx={{ gap: 0.75, alignItems: 'center', color: 'text.secondary' }}>
              <AppIcon name='calendar' size={16} />
              <Typography variant='body2'>
                {formatSessionDate(session.startsAt)} · {session.durationMinutes} min
              </Typography>
            </Stack>
          </Stack>

          {canCancel && (
            <Button color='error' onClick={() => onCancel(session)}>
              Cancel
            </Button>
          )}
        </Stack>
      </CardContent>
    </Card>
  )
}
