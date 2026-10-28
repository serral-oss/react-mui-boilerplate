import { Box, Button, Chip, Grid, Paper, Skeleton, Stack, Typography } from '@mui/material'
import { Link } from 'react-router'

import { MentorCard } from '@/components'
import { MENTORS, SKILLS } from '@/constants/mentors'
import { routers } from '@/constants/routers'
import { useMentors } from '@/hooks'

const STEPS = [
  { title: 'Find your mentor', text: 'Filter by skill and read profiles from people who have done the job.' },
  { title: 'Book a session', text: 'Pick a day and time that suits you and say what you want to work on.' },
  { title: 'Grow with feedback', text: 'Meet one-on-one, get honest advice and come back when you are ready.' }
]

const averageRating = (MENTORS.reduce((sum, mentor) => sum + mentor.rating, 0) / MENTORS.length).toFixed(1)

const STATS = [
  { value: MENTORS.length, label: 'Expert mentors' },
  { value: averageRating, label: 'Average rating' },
  { value: SKILLS.length, label: 'Skill areas' }
]

export default function Home() {
  const { data: mentors, loading } = useMentors()
  const topMentors = [...(mentors ?? [])].sort((a, b) => b.rating - a.rating).slice(0, 3)

  return (
    <Stack sx={{ gap: { xs: 8, md: 10 } }}>
      <Stack sx={{ alignItems: 'center', textAlign: 'center', gap: 3, pt: { md: 4 } }}>
        <Chip label='1:1 mentoring for tech careers' color='primary' variant='outlined' />
        <Typography variant='h2' component='h1' sx={{ fontWeight: 800, maxWidth: 760, fontSize: { xs: 36, md: 56 } }}>
          Learn faster with a mentor who has done it before
        </Typography>
        <Typography variant='h6' color='text.secondary' sx={{ maxWidth: 600, fontWeight: 400 }}>
          Book focused sessions with engineers, designers and managers to review your work, prepare for interviews or
          plan your next step.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 2 }}>
          <Button variant='contained' size='large' component={Link} to={routers.MENTORS}>
            Find a mentor
          </Button>
          <Button variant='outlined' size='large' component={Link} to={routers.SESSIONS}>
            My sessions
          </Button>
        </Stack>
        <Stack direction='row' sx={{ gap: 1, flexWrap: 'wrap', justifyContent: 'center', maxWidth: 640 }}>
          {SKILLS.map(skill => (
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

      <Grid container spacing={2}>
        {STATS.map(stat => (
          <Grid key={stat.label} size={{ xs: 12, sm: 4 }}>
            <Paper variant='outlined' sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant='h4' sx={{ fontWeight: 800 }} color='primary'>
                {stat.value}
              </Typography>
              <Typography color='text.secondary'>{stat.label}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box>
        <Typography variant='h4' component='h2' sx={{ fontWeight: 800, mb: 3 }}>
          How it works
        </Typography>
        <Grid container spacing={3}>
          {STEPS.map((step, index) => (
            <Grid key={step.title} size={{ xs: 12, md: 4 }}>
              <Stack sx={{ gap: 1 }}>
                <Typography color='primary' sx={{ fontWeight: 800, fontSize: 28 }}>
                  0{index + 1}
                </Typography>
                <Typography variant='h6' sx={{ fontWeight: 700 }}>
                  {step.title}
                </Typography>
                <Typography color='text.secondary'>{step.text}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box>
        <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant='h4' component='h2' sx={{ fontWeight: 800 }}>
            Top rated mentors
          </Typography>
          <Button component={Link} to={routers.MENTORS}>
            See all
          </Button>
        </Stack>
        <Grid container spacing={3}>
          {loading
            ? [0, 1, 2].map(item => (
                <Grid key={item} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Skeleton variant='rounded' height={260} />
                </Grid>
              ))
            : topMentors.map(mentor => (
                <Grid key={mentor.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <MentorCard mentor={mentor} />
                </Grid>
              ))}
        </Grid>
      </Box>
    </Stack>
  )
}
