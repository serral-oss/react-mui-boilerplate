import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { describe, expect, it } from 'vitest'

import App from './App'
import { persistor, store } from './store'

describe('App', () => {
  it('renders the layout and home page', async () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    )

    expect(await screen.findByText('Services & Prices')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Button' })).toBeInTheDocument()
    expect(document.querySelector('.app-icon svg')).not.toBeNull()
  })
})
