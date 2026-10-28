import { Alert, Button, Paper, Stack, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { Navigate, useLocation, useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import { AppIcon } from '@/core'
import { routers } from '@/constants/routers'
import { useAuth } from '@/hooks'
import { signIn, useDispatch } from '@/store'
import { createId } from '@/util'

const schema = yup.object({
  firstname: yup.string().trim().required('First name is required'),
  lastname: yup.string().trim().required('Last name is required'),
  email: yup.string().trim().email('Enter a valid email').required('Email is required')
})

const FIELDS = [
  { name: 'firstname', label: 'First name', autoComplete: 'given-name' },
  { name: 'lastname', label: 'Last name', autoComplete: 'family-name' },
  { name: 'email', label: 'Email', autoComplete: 'email' }
] as const

export default function SignIn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const { isLoggedIn } = useAuth()
  const redirectTo = (location.state as { from?: string } | null)?.from ?? routers.MENTORS

  const formik = useFormik({
    initialValues: { firstname: '', lastname: '', email: '' },
    validationSchema: schema,
    onSubmit: values => {
      // Demo sign-in: swap for an apiRequest call to your auth endpoint
      dispatch(
        signIn({
          user: { firstname: values.firstname.trim(), lastname: values.lastname.trim(), email: values.email.trim() },
          token: `demo-${createId()}`
        })
      )
      toast.success(`Welcome, ${values.firstname.trim()}!`)
      navigate(redirectTo, { replace: true })
    }
  })

  if (isLoggedIn) return <Navigate to={redirectTo} replace />

  return (
    <Paper variant='outlined' sx={{ maxWidth: 440, mx: 'auto', p: { xs: 3, sm: 5 } }}>
      <Stack component='form' onSubmit={formik.handleSubmit} noValidate sx={{ gap: 2.5 }}>
        <Stack sx={{ alignItems: 'center', gap: 1, mb: 1 }}>
          <AppIcon name='logo' size={48} />
          <Typography variant='h5' component='h1' sx={{ fontWeight: 800 }}>
            Sign in to MentorHub
          </Typography>
        </Stack>

        <Alert severity='info'>Demo mode: no password needed, your details stay in this browser.</Alert>

        {FIELDS.map(field => (
          <TextField
            key={field.name}
            name={field.name}
            label={field.label}
            type={field.name === 'email' ? 'email' : 'text'}
            autoComplete={field.autoComplete}
            value={formik.values[field.name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched[field.name] && Boolean(formik.errors[field.name])}
            helperText={formik.touched[field.name] && formik.errors[field.name]}
            fullWidth
          />
        ))}

        <Button type='submit' variant='contained' size='large' fullWidth>
          Continue
        </Button>
      </Stack>
    </Paper>
  )
}
