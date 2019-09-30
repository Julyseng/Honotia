import request from 'superagent'
import { getAuthorizationHeader } from 'authenticare/client'

export const SEND_USER_ACCOUNT = 'SEND_USER_ACCOUNT'
export const RECEIVE_USER_PROFILES = 'RECEIVE_USER_PROFILES'

export const storeFormData = userAccountData => {
  return {
    type: SEND_USER_ACCOUNT,
    userAccountData
  }
}

export const receiveProfiles = (profiles) => {
  return {
    type: RECEIVE_USER_PROFILES,
    profiles
  }
}

export function fetchProfiles() {
    return (dispatch) => {
      return request
        .get(`/api/v1/user/profiles`)
        .set(getAuthorizationHeader())
        .then(res => {
          dispatch(receiveProfiles(res.body))
        })
    }
  }