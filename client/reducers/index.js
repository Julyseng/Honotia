import { combineReducers } from 'redux'

import formReducer from './formReducer'
import connectReducer from './connectReducer'
import userReducer from './userReducer'
import storiesReducer from './storiesReducer'

export default combineReducers({
  form: formReducer,
  profiles: connectReducer,
  currentUser: userReducer,
  stories: storiesReducer
})
