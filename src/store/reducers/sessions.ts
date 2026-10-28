import { Session, SessionsState } from '@/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: SessionsState = {
  items: []
}

const sessionsSlice = createSlice({
  name: 'sessions',
  initialState,
  reducers: {
    bookSession(state, action: PayloadAction<Session>) {
      state.items.push(action.payload)
    },
    cancelSession(state, action: PayloadAction<{ id: string }>) {
      const session = state.items.find(item => item.id === action.payload.id)
      if (session) session.status = 'cancelled'
    }
  }
})

export default sessionsSlice.reducer

export const { bookSession, cancelSession } = sessionsSlice.actions
