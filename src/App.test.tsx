import { act, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { beforeEach, describe, expect, it } from 'vitest'

import App from './App'
import { fetchMentors } from './lib/mentors'
import { bookSession, cancelSession, persistor, signOut, store } from './store'

const renderApp = () =>
  render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  )

describe('App', () => {
  beforeEach(() => {
    act(() => {
      store.dispatch(signOut())
    })
  })

  it('renders the landing page with top rated mentors', async () => {
    renderApp()

    expect(await screen.findByRole('heading', { name: /learn faster with a mentor/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Find a mentor' }).length).toBeGreaterThan(0)
    expect(screen.getByRole('link', { name: 'Sign in' })).toBeInTheDocument()
    expect(await screen.findAllByRole('button', { name: 'Book' })).toHaveLength(3)
  })
})

describe('mentors api', () => {
  it('filters by skill and search text', async () => {
    const react = await fetchMentors({ skill: 'React' })
    expect(react.length).toBeGreaterThan(0)
    expect(react.every(mentor => mentor.skills.includes('React'))).toBe(true)

    const byName = await fetchMentors({ search: 'priya' })
    expect(byName.map(mentor => mentor.name)).toEqual(['Priya Raman'])
  })
})

describe('sessions slice', () => {
  it('books and cancels a session', () => {
    store.dispatch(
      bookSession({
        id: 'test-session',
        mentorId: 'mei-chen',
        mentorName: 'Mei Chen',
        userEmail: 'test@example.com',
        startsAt: new Date(Date.now() + 86_400_000).toISOString(),
        durationMinutes: 45,
        topic: 'Portfolio review',
        notes: '',
        status: 'booked',
        createdAt: new Date().toISOString()
      })
    )
    expect(store.getState().sessions.items.find(item => item.id === 'test-session')?.status).toBe('booked')

    store.dispatch(cancelSession({ id: 'test-session' }))
    expect(store.getState().sessions.items.find(item => item.id === 'test-session')?.status).toBe('cancelled')
  })
})
