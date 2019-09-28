import { SEND_USER_ACCOUNT } from '../actions'

const initialState = {
  userAccount: { 
    status: '',
    firstName: '',
    lastName: '',
    email: '',
    DOB: '',
    profileURL: ''

  },
  userBio: {
    occupation: '',
    languages: [],
    support: [],
    bioText: ''
  }
}

export default function form(state = initialState, action) {
  console.log(action.type)
  switch (action.type) {
    case SEND_USER_ACCOUNT:
      return {...state, userAccount: action.userAccountData }

    default:
      return state
  }
}
