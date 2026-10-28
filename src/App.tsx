import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { RouterProvider } from 'react-router'
import { ToastContainer } from 'react-toastify'

import routes from './routes'
import { AppTheme } from './theme'

function App() {
  return (
    <AppTheme>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <RouterProvider router={routes} />
        <ToastContainer position='bottom-right' autoClose={3000} theme='colored' />
      </LocalizationProvider>
    </AppTheme>
  )
}

export default App
