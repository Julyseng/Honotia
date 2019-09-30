import { RECEIVE_USER_PROFILES } from '../actions'

export default function connectReducer(oldState = [], action) {
  switch (action.type) {
    case RECEIVE_USER_PROFILES:
      return action.profiles

    default:
      return oldState
  }
}
