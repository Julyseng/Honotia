import { combineReducers } from 'redux'

import formReducer from './formReducer'
import connectReducer from './connectReducer'

export default combineReducers({
  form: formReducer,
  profiles: connectReducer
})
