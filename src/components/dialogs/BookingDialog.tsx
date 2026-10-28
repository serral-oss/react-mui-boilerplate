import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormHelperText,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { addDays, isPast, parseISO } from 'date-fns'
import { useFormik } from 'formik'
import { useLocation, useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import { MentorAvatar } from '@/components/MentorAvatar'
import { routers } from '@/constants/routers'
import { useAuth, useBookedStarts } from '@/hooks'
import { bookSession, useDispatch } from '@/store'
import { Mentor } from '@/types'
import { createId, formatPrice, toSessionStart } from '@/util'

interface BookingDialogProps {
  mentor: Mentor
  open: boolean
  onClose: () => void
}

interface BookingValues {
  date: Date | null
  time: string
  topic: string
  notes: string
}

const schema = yup.object({
  date: yup.date().nullable().required('Pick a day'),
  time: yup.string().required('Pick a time'),
  topic: yup.string().trim().min(5, 'Tell your mentor a bit more').max(120).required('What do you want to talk about?'),
  notes: yup.string().max(500)
})

export const BookingDialog = ({ mentor, open, onClose }: BookingDialogProps) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const { isLoggedIn, user } = useAuth()
  const bookedStarts = useBookedStarts(mentor.id)

  const formik = useFormik<BookingValues>({
    initialValues: { date: null, time: '', topic: '', notes: '' },
    validationSchema: schema,
    onSubmit: values => {
      if (!user || !values.date) return

      dispatch(
        bookSession({
          id: createId(),
          mentorId: mentor.id,
          mentorName: mentor.name,
          userEmail: user.email,
          startsAt: toSessionStart(values.date, values.time),
          durationMinutes: mentor.sessionMinutes,
          topic: values.topic.trim(),
          notes: values.notes.trim(),
          status: 'booked',
          createdAt: new Date().toISOString()
        })
      )
      toast.success(`Session booked with ${mentor.name}`)
      onClose()
    }
  })

  const { values, errors, touched } = formik

  const isSlotTaken = (time: string) => {
    if (!values.date) return true
    const start = toSessionStart(values.date, time)

    return bookedStarts.includes(start) || isPast(parseISO(start))
  }

  if (!isLoggedIn) {
    return (
      <Dialog open={open} onClose={onClose} fullWidth maxWidth='xs'>
        <DialogTitle>Sign in to book</DialogTitle>
        <DialogContent>
          <Typography color='text.secondary'>
            You need an account to book a session with {mentor.name}. It only takes a few seconds.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Not now</Button>
          <Button
            variant='contained'
            onClick={() => {
              onClose()
              navigate(routers.SIGN_IN, { state: { from: location.pathname } })
            }}
          >
            Sign in
          </Button>
        </DialogActions>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth='sm'>
      <form onSubmit={formik.handleSubmit} noValidate>
        <DialogTitle>
          <Stack direction='row' sx={{ gap: 2, alignItems: 'center' }}>
            <MentorAvatar name={mentor.name} size={44} />
            <Stack>
              <Typography variant='h6' sx={{ fontWeight: 700 }}>
                Book {mentor.name}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {mentor.sessionMinutes} min · {formatPrice(mentor.pricePerSession)}
              </Typography>
            </Stack>
          </Stack>
        </DialogTitle>

        <DialogContent dividers>
          <Stack sx={{ gap: 3 }}>
            <DatePicker
              label='Day'
              value={values.date}
              onChange={date => {
                formik.setFieldValue('date', date)
                formik.setFieldValue('time', '')
              }}
              disablePast
              maxDate={addDays(new Date(), 60)}
              shouldDisableDate={day => !mentor.availableDays.includes(day.getDay())}
              slotProps={{
                textField: {
                  fullWidth: true,
                  error: touched.date && Boolean(errors.date),
                  helperText: touched.date && errors.date,
                  onBlur: () => formik.setFieldTouched('date')
                }
              }}
            />

            <Stack sx={{ gap: 1 }}>
              <Typography variant='body2' color='text.secondary'>
                {values.date ? 'Available times' : 'Pick a day to see available times'}
              </Typography>
              <ToggleButtonGroup
                exclusive
                color='primary'
                value={values.time}
                onChange={(_, time: string | null) => time && formik.setFieldValue('time', time)}
                sx={{ flexWrap: 'wrap', gap: 1, '& .MuiToggleButton-root': { borderRadius: 2, border: 1 } }}
              >
                {mentor.timeSlots.map(time => (
                  <ToggleButton key={time} value={time} disabled={isSlotTaken(time)} sx={{ px: 2.5 }}>
                    {time}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
              {formik.submitCount > 0 && errors.time && <FormHelperText error>{errors.time}</FormHelperText>}
            </Stack>

            <TextField
              name='topic'
              label='What do you want to work on?'
              placeholder='e.g. Preparing for a senior frontend interview'
              value={values.topic}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={touched.topic && Boolean(errors.topic)}
              helperText={touched.topic && errors.topic}
              fullWidth
            />

            <TextField
              name='notes'
              label='Notes for your mentor (optional)'
              value={values.notes}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={touched.notes && Boolean(errors.notes)}
              helperText={touched.notes && errors.notes}
              multiline
              minRows={3}
              fullWidth
            />
          </Stack>
        </DialogContent>

        <DialogActions sx={{ px: 3, py: 2 }}>
          <Button onClick={onClose}>Cancel</Button>
          <Button type='submit' variant='contained' disabled={formik.isSubmitting}>
            Confirm booking
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
