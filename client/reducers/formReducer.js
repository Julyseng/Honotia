import {
  RECEIVE_LANGUAGES_LIST,
  RECEIVE_NEEDS_N_SUPPORTS_LIST
} from '../actions'

const initialState = {
  languages: [],
  needs: []
}

export default function form(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_LANGUAGES_LIST:
      return { ...state, languages: action.languages }
    case RECEIVE_NEEDS_N_SUPPORTS_LIST:
      return { ...state, needs: action.needs }

    default:
      return state
  }
}
