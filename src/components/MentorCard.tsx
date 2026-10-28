import { Button, Card, CardActions, CardContent, Chip, Stack, Typography } from '@mui/material'
import { Link } from 'react-router'

import { mentorPath } from '@/constants/routers'
import { useBooking } from '@/context'
import { AppIcon } from '@/core'
import { Mentor } from '@/types'
import { formatPrice } from '@/util'

import { MentorAvatar } from './MentorAvatar'

interface MentorCardProps {
  mentor: Mentor
}

export const MentorCard = ({ mentor }: MentorCardProps) => {
  const { openBooking } = useBooking()

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: 1 }}>
        <Stack direction='row' sx={{ gap: 2, alignItems: 'center', mb: 2 }}>
          <MentorAvatar name={mentor.name} />
          <Stack sx={{ minWidth: 0 }}>
            <Typography variant='h6' sx={{ fontWeight: 700, lineHeight: 1.2 }}>
              {mentor.name}
            </Typography>
            <Typography variant='body2' color='text.secondary' noWrap>
              {mentor.title} · {mentor.company}
            </Typography>
          </Stack>
        </Stack>

        <Stack direction='row' sx={{ gap: 0.5, alignItems: 'center', mb: 1.5 }}>
          <AppIcon name='star' size={18} colors='#f59e0b' />
          <Typography variant='body2' sx={{ fontWeight: 600 }}>
            {mentor.rating.toFixed(1)}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            ({mentor.reviews} reviews) · {mentor.yearsExperience} yrs exp
          </Typography>
        </Stack>

        <Typography
          variant='body2'
          color='text.secondary'
          sx={{ mb: 2, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
        >
          {mentor.bio}
        </Typography>

        <Stack direction='row' sx={{ gap: 1, flexWrap: 'wrap' }}>
          {mentor.skills.map(skill => (
            <Chip key={skill} label={skill} size='small' />
          ))}
        </Stack>
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2, justifyContent: 'space-between' }}>
        <Typography sx={{ fontWeight: 700 }}>
          {formatPrice(mentor.pricePerSession)}
          <Typography component='span' variant='body2' color='text.secondary'>
            {' '}
            / {mentor.sessionMinutes} min
          </Typography>
        </Typography>
        <Stack direction='row' sx={{ gap: 1 }}>
          <Button component={Link} to={mentorPath(mentor.id)} size='small'>
            Profile
          </Button>
          <Button variant='contained' size='small' onClick={() => openBooking(mentor)}>
            Book
          </Button>
        </Stack>
      </CardActions>
    </Card>
  )
}
