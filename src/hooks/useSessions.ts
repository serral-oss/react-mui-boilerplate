import { useSelector } from '@/store'

export const useAuth = () => useSelector(state => state.auth)

/** Sessions that belong to the signed-in user, sorted by start time */
export const useMySessions = () => {
  const email = useSelector(state => state.auth.user?.email)
  const sessions = useSelector(state => state.sessions.items)

  return sessions.filter(session => session.userEmail === email).sort((a, b) => a.startsAt.localeCompare(b.startsAt))
}

/** Start times already taken with a mentor, so they can't be double-booked */
export const useBookedStarts = (mentorId: string) => {
  const sessions = useSelector(state => state.sessions.items)

  return sessions
    .filter(session => session.mentorId === mentorId && session.status === 'booked')
    .map(session => session.startsAt)
}
