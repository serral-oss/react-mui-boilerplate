import { combineReducers } from '@reduxjs/toolkit'

import auth from './auth'
import sessions from './sessions'

const reducers = combineReducers({
  auth,
  sessions
})

export default reducers
