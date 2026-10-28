export const routers = {
  LANDING: '/',
  MENTORS: '/mentors',
  MENTOR_DETAIL: '/mentors/:id',
  SESSIONS: '/sessions',
  SIGN_IN: '/sign-in'
}

export const mentorPath = (id: string) => `${routers.MENTORS}/${id}`
