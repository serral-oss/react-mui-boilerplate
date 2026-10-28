import { lazy } from 'react'
import { createBrowserRouter } from 'react-router'

import { routers } from '@/constants/routers'
import Layout from '@/layout'
import Home from '@/pages/home'

// Home loads eagerly for a fast first paint; other pages are split into their own chunks
const Mentors = lazy(() => import('@/pages/mentors'))
const MentorDetail = lazy(() => import('@/pages/mentor-detail'))
const Sessions = lazy(() => import('@/pages/sessions'))
const SignIn = lazy(() => import('@/pages/sign-in'))
const NotFound = lazy(() => import('@/pages/not-found'))

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: routers.LANDING, element: <Home /> },
      { path: routers.MENTORS, element: <Mentors /> },
      { path: routers.MENTOR_DETAIL, element: <MentorDetail /> },
      { path: routers.SESSIONS, element: <Sessions /> },
      { path: routers.SIGN_IN, element: <SignIn /> },
      { path: '*', element: <NotFound /> }
    ]
  }
])

export default routes
