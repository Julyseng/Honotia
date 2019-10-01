import request from 'superagent'
import { getAuthorizationHeader } from 'authenticare/client'

export const SEND_USER_ACCOUNT = 'SEND_USER_ACCOUNT'
export const RECEIVE_USER_PROFILES = 'RECEIVE_USER_PROFILES'
export const RECEIVE_LOGGEDIN_USER_DETAILS = 'RECEIVE_LOGGEDIN_USER_DETAILS'

const storeFormData = userAccountData => {
  return {
    type: SEND_USER_ACCOUNT,
    userAccountData
  }
}

const receiveProfiles = profiles => {
  return {
    type: RECEIVE_USER_PROFILES,
    profiles
  }
}

const receiveUser = currentUser => {
  return {
    type: RECEIVE_LOGGEDIN_USER_DETAILS,
    currentUser
  }
}

export function fetchProfiles() {
  return dispatch => {
    return request
      .get(`/api/v1/user/profiles`)
      .set(getAuthorizationHeader())
      .then(res => {
        dispatch(receiveProfiles(res.body))
      })
  }
}

export const fetchLoggedInUser = () => {
  return dispatch => {
    return request
      .get(`/api/v1/user/current`)
      .set(getAuthorizationHeader())
      .then(res => {
        dispatch(receiveUser(res.body))
      })
  }
}
