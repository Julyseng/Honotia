import { RECEIVE_LOGGEDIN_USER_DETAILS } from '../actions'

export default function connectReducer(oldState = {}, action) {
  switch (action.type) {
    case RECEIVE_LOGGEDIN_USER_DETAILS:
      return action.currentUser

    default:
      return oldState
  }
}
