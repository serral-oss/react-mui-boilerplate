import { Button, Chip, Grid, InputAdornment, Skeleton, Stack, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'

import { EmptyState, MentorCard, PageHeader } from '@/components'
import { SKILLS } from '@/constants/mentors'
import { AppIcon } from '@/core'
import { useDebounce, useMentors } from '@/hooks'

export default function Mentors() {
  const [params, setParams] = useSearchParams()
  const skill = params.get('skill') ?? ''
  const [search, setSearch] = useState(params.get('q') ?? '')
  const debouncedSearch = useDebounce(search)
  const { data: mentors, loading, error } = useMentors({ search: debouncedSearch, skill })

  // Keep filters in the URL so results can be shared and survive a refresh
  useEffect(() => {
    setParams(
      prev => {
        const next = new URLSearchParams(prev)
        if (debouncedSearch) next.set('q', debouncedSearch)
        else next.delete('q')

        return next
      },
      { replace: true }
    )
  }, [debouncedSearch, setParams])

  const selectSkill = (value: string) =>
    setParams(prev => {
      const next = new URLSearchParams(prev)
      if (value) next.set('skill', value)
      else next.delete('skill')

      return next
    })

  const clearFilters = () => {
    setSearch('')
    setParams({})
  }

  return (
    <>
      <PageHeader
        title='Find a mentor'
        subtitle='Search by name, role or skill and book a session that fits your week.'
      />

      <Stack sx={{ gap: 2, mb: 4 }}>
        <TextField
          placeholder='Search mentors, companies or skills'
          value={search}
          onChange={event => setSearch(event.target.value)}
          fullWidth
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position='start'>
                  <AppIcon name='search' />
                </InputAdornment>
              )
            },
            htmlInput: { 'aria-label': 'Search mentors' }
          }}
        />
        <Stack direction='row' sx={{ gap: 1, flexWrap: 'wrap' }}>
          <Chip label='All' color={skill ? 'default' : 'primary'} onClick={() => selectSkill('')} />
          {SKILLS.map(item => (
            <Chip
              key={item}
              label={item}
              color={skill === item ? 'primary' : 'default'}
              onClick={() => selectSkill(skill === item ? '' : item)}
            />
          ))}
        </Stack>
      </Stack>

      {error ? (
        <EmptyState title='Could not load mentors' description={error} />
      ) : loading && !mentors ? (
        <Grid container spacing={3}>
          {[0, 1, 2, 3, 4, 5].map(item => (
            <Grid key={item} size={{ xs: 12, sm: 6, md: 4 }}>
              <Skeleton variant='rounded' height={260} />
            </Grid>
          ))}
        </Grid>
      ) : mentors && mentors.length > 0 ? (
        <>
          <Typography color='text.secondary' sx={{ mb: 2 }}>
            {mentors.length} {mentors.length === 1 ? 'mentor' : 'mentors'} found
          </Typography>
          <Grid container spacing={3} sx={{ opacity: loading ? 0.6 : 1, transition: 'opacity 0.2s' }}>
            {mentors.map(mentor => (
              <Grid key={mentor.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <MentorCard mentor={mentor} />
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <EmptyState
          title='No mentors match your filters'
          description='Try a different skill or a shorter search.'
          action={<Button onClick={clearFilters}>Clear filters</Button>}
        />
      )}
    </>
  )
}
