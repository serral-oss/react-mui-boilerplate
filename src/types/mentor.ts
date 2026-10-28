export interface Mentor {
  id: string
  name: string
  title: string
  company: string
  bio: string
  skills: string[]
  languages: string[]
  yearsExperience: number
  rating: number
  reviews: number
  pricePerSession: number
  sessionMinutes: number

  /** Weekdays the mentor takes sessions, 0 = Sunday ... 6 = Saturday */
  availableDays: number[]

  /** Start times offered on available days, 24h "HH:mm" */
  timeSlots: string[]
}

export interface MentorFilters {
  search: string
  skill: string
}

export type SessionStatus = 'booked' | 'cancelled'

export interface Session {
  id: string
  mentorId: string
  mentorName: string
  userEmail: string

  /** ISO date-time of the session start */
  startsAt: string
  durationMinutes: number
  topic: string
  notes: string
  status: SessionStatus
  createdAt: string
}

export interface SessionsState {
  items: Session[]
}
