import { ReactNode, createContext, useCallback, useContext, useMemo, useState } from 'react'

import { BookingDialog } from '@/components/dialogs/BookingDialog'
import { Mentor } from '@/types'

interface BookingContextValue {
  openBooking: (mentor: Mentor) => void
}

const BookingContext = createContext<BookingContextValue | null>(null)

/** Lets any page open the booking dialog without wiring dialog state through props */
export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [mentor, setMentor] = useState<Mentor | null>(null)
  const [open, setOpen] = useState(false)

  const openBooking = useCallback((selected: Mentor) => {
    setMentor(selected)
    setOpen(true)
  }, [])

  const value = useMemo(() => ({ openBooking }), [openBooking])

  return (
    <BookingContext.Provider value={value}>
      {children}
      {/* key resets the form whenever a different mentor is picked */}
      {mentor && <BookingDialog key={mentor.id} mentor={mentor} open={open} onClose={() => setOpen(false)} />}
    </BookingContext.Provider>
  )
}

export const useBooking = () => {
  const context = useContext(BookingContext)
  if (!context) throw new Error('useBooking must be used inside BookingProvider')

  return context
}
