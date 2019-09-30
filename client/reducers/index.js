import { combineReducers } from 'redux'

import formReducer from './formReducer'
import connectReducer from './connectReducer'
import userReducer from './userReducer'

export default combineReducers({
  form: formReducer,
  profiles: connectReducer,
  currentUser: userReducer
})
