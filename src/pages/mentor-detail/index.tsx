import { Button, Card, CardContent, Chip, Divider, Grid, Skeleton, Stack, Typography } from '@mui/material'
import { Link, useParams } from 'react-router'

import { EmptyState, MentorAvatar } from '@/components'
import { WEEKDAYS } from '@/constants/mentors'
import { routers } from '@/constants/routers'
import { useBooking } from '@/context'
import { AppIcon, IconName } from '@/core'
import { useMentor } from '@/hooks'
import { formatPrice } from '@/util'

const Detail = ({ icon, label }: { icon: IconName; label: string }) => (
  <Stack direction='row' sx={{ gap: 1, alignItems: 'center', color: 'text.secondary' }}>
    <AppIcon name={icon} size={18} />
    <Typography variant='body2'>{label}</Typography>
  </Stack>
)

export default function MentorDetail() {
  const { id = '' } = useParams()
  const { data: mentor, loading, error } = useMentor(id)
  const { openBooking } = useBooking()

  if (loading) return <Skeleton variant='rounded' height={360} />

  if (error || !mentor) {
    return (
      <EmptyState
        title='Mentor not found'
        description='This profile may have been removed.'
        action={
          <Button variant='contained' component={Link} to={routers.MENTORS}>
            Browse mentors
          </Button>
        }
      />
    )
  }

  return (
    <>
      <Button component={Link} to={routers.MENTORS} sx={{ mb: 3 }}>
        ← All mentors
      </Button>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Stack sx={{ gap: 3 }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 3, alignItems: { sm: 'center' } }}>
              <MentorAvatar name={mentor.name} size={96} />
              <Stack sx={{ gap: 1 }}>
                <Typography variant='h4' component='h1' sx={{ fontWeight: 800 }}>
                  {mentor.name}
                </Typography>
                <Typography color='text.secondary'>
                  {mentor.title} at {mentor.company}
                </Typography>
                <Stack direction='row' sx={{ gap: 2, flexWrap: 'wrap' }}>
                  <Detail icon='star' label={`${mentor.rating.toFixed(1)} (${mentor.reviews} reviews)`} />
                  <Detail icon='work' label={`${mentor.yearsExperience} years experience`} />
                  <Detail icon='language' label={mentor.languages.join(', ')} />
                </Stack>
              </Stack>
            </Stack>

            <Divider />

            <Stack sx={{ gap: 1 }}>
              <Typography variant='h6' sx={{ fontWeight: 700 }}>
                About
              </Typography>
              <Typography color='text.secondary' sx={{ lineHeight: 1.8 }}>
                {mentor.bio}
              </Typography>
            </Stack>

            <Stack sx={{ gap: 1 }}>
              <Typography variant='h6' sx={{ fontWeight: 700 }}>
                Can help with
              </Typography>
              <Stack direction='row' sx={{ gap: 1, flexWrap: 'wrap' }}>
                {mentor.skills.map(skill => (
                  <Chip
                    key={skill}
                    label={skill}
                    component={Link}
                    to={`${routers.MENTORS}?skill=${encodeURIComponent(skill)}`}
                    clickable
                  />
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ position: { md: 'sticky' }, top: { md: 96 } }}>
            <CardContent>
              <Stack sx={{ gap: 2 }}>
                <Typography variant='h4' sx={{ fontWeight: 800 }}>
                  {formatPrice(mentor.pricePerSession)}
                  <Typography component='span' color='text.secondary'>
                    {' '}
                    / session
                  </Typography>
                </Typography>
                <Detail icon='schedule' label={`${mentor.sessionMinutes} minute video call`} />
                <Detail icon='calendar' label={mentor.availableDays.map(day => WEEKDAYS[day]).join(', ')} />
                <Stack direction='row' sx={{ gap: 1, flexWrap: 'wrap' }}>
                  {mentor.timeSlots.map(time => (
                    <Chip key={time} label={time} size='small' variant='outlined' />
                  ))}
                </Stack>
                <Button variant='contained' size='large' fullWidth onClick={() => openBooking(mentor)}>
                  Book a session
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}
