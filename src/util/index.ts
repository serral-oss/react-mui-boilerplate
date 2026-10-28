import { format, isPast, parseISO } from 'date-fns'

export const getInitials = (name: string) =>
  name
    .split(' ')
    .map(part => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

export const formatPrice = (amount: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount)

export const formatSessionDate = (iso: string) => format(parseISO(iso), "EEE, MMM d yyyy 'at' HH:mm")

export const isPastSession = (iso: string) => isPast(parseISO(iso))

/** Combines a calendar day with an "HH:mm" slot into an ISO string */
export const toSessionStart = (day: Date, time: string) => {
  const [hours, minutes] = time.split(':').map(Number)
  const start = new Date(day)
  start.setHours(hours, minutes, 0, 0)

  return start.toISOString()
}

export const createId = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`

// Stable avatar colour per name so a mentor always looks the same
const AVATAR_COLORS = ['#4f46e5', '#0d9488', '#db2777', '#ea580c', '#2563eb', '#7c3aed', '#059669', '#ca8a04']

export const avatarColor = (name: string) =>
  AVATAR_COLORS[[...name].reduce((sum, char) => sum + char.charCodeAt(0), 0) % AVATAR_COLORS.length]
