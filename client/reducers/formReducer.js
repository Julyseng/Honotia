import { RECEIVE_LANGUAGES_LIST } from '../actions'

const initialState = {
  languages: []
}

export default function form(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_LANGUAGES_LIST:
      return { ...state, languages: action.languages }

    default:
      return state
  }
}
