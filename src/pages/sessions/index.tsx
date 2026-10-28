import { Button, Stack, Tab, Tabs } from '@mui/material'
import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { toast } from 'react-toastify'

import { EmptyState, PageHeader, SessionCard } from '@/components'
import { routers } from '@/constants/routers'
import { ConfirmDialog } from '@/components/dialogs'
import { useAuth, useMySessions } from '@/hooks'
import { cancelSession, useDispatch } from '@/store'
import { Session } from '@/types'
import { formatSessionDate, isPastSession } from '@/util'

type SessionTab = 'upcoming' | 'history'

export default function Sessions() {
  const dispatch = useDispatch()
  const location = useLocation()
  const { isLoggedIn } = useAuth()
  const sessions = useMySessions()
  const [tab, setTab] = useState<SessionTab>('upcoming')
  const [toCancel, setToCancel] = useState<Session | null>(null)

  if (!isLoggedIn) {
    return (
      <>
        <PageHeader title='My sessions' />
        <EmptyState
          title='Sign in to see your sessions'
          description='Your booked and past sessions will show up here.'
          action={
            <Button variant='contained' component={Link} to={routers.SIGN_IN} state={{ from: location.pathname }}>
              Sign in
            </Button>
          }
        />
      </>
    )
  }

  const upcoming = sessions.filter(session => session.status === 'booked' && !isPastSession(session.startsAt))
  const history = sessions.filter(session => !upcoming.includes(session)).reverse()
  const visible = tab === 'upcoming' ? upcoming : history

  const confirmCancel = () => {
    if (!toCancel) return
    dispatch(cancelSession({ id: toCancel.id }))
    toast.info(`Session with ${toCancel.mentorName} cancelled`)
    setToCancel(null)
  }

  return (
    <>
      <PageHeader title='My sessions' subtitle='Keep track of what is coming up and what you have covered.' />

      <Tabs value={tab} onChange={(_, value: SessionTab) => setTab(value)} sx={{ mb: 3 }}>
        <Tab value='upcoming' label={`Upcoming (${upcoming.length})`} />
        <Tab value='history' label={`History (${history.length})`} />
      </Tabs>

      {visible.length > 0 ? (
        <Stack sx={{ gap: 2 }}>
          {visible.map(session => (
            <SessionCard key={session.id} session={session} onCancel={setToCancel} />
          ))}
        </Stack>
      ) : (
        <EmptyState
          title={tab === 'upcoming' ? 'No upcoming sessions' : 'No past sessions yet'}
          description={tab === 'upcoming' ? 'Find a mentor and book your first session.' : undefined}
          action={
            tab === 'upcoming' && (
              <Button variant='contained' component={Link} to={routers.MENTORS}>
                Find a mentor
              </Button>
            )
          }
        />
      )}

      <ConfirmDialog
        open={Boolean(toCancel)}
        title='Cancel this session?'
        message={
          toCancel
            ? `Your session with ${toCancel.mentorName} on ${formatSessionDate(toCancel.startsAt)} will be cancelled.`
            : ''
        }
        confirmLabel='Cancel session'
        onConfirm={confirmCancel}
        onClose={() => setToCancel(null)}
      />
    </>
  )
}
