import { routers } from '@/constants/routers'
import Layout from '@/layout'
import Home from '@/pages/home'
import { createBrowserRouter } from 'react-router'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: routers.LANDING,
        element: <Home />
      }
    ]
  }
])

export default routes
