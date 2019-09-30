import { SEND_USER_ACCOUNT } from '../actions'

const initialState = {
  userAccount: {
    userStatus: '',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    currentCity: '',
    profileImg: ''
  },
  userBio: {
    occupation: '',
    languages: [],
    supports: [],
    bioText: ''
  },
  refugees: {
    needs: [],
    supports: [],
    yearLeft: null,
    reasonForLeaving: '',
    yearOfArrival: null,
    originCountry: ''
  }
}

export default function form(state = initialState, action) {
  console.log(action.type)
  switch (action.type) {
    case SEND_USER_ACCOUNT:
      return { ...state, userAccount: action.userAccountData }

    default:
      return state
  }
}
