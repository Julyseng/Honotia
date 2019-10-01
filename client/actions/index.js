import request from 'superagent'
import { getAuthorizationHeader } from 'authenticare/client'

export const RECEIVE_NEEDS_N_SUPPORTS_LIST = 'RECEIVE_NEEDS_N_SUPPORTS_LIST'
export const RECEIVE_SUPPORTS_LIST = 'RECEIVE_SUPPORTS_LIST'
export const RECEIVE_LANGUAGES_LIST = 'RECEIVE_LANGUAGES_LIST'

export const SEND_USER_ACCOUNT = 'SEND_USER_ACCOUNT'
export const RECEIVE_USER_PROFILES = 'RECEIVE_USER_PROFILES'
export const RECEIVE_LOGGEDIN_USER_DETAILS = 'RECEIVE_LOGGEDIN_USER_DETAILS'
export const RECEIVE_STORIES = 'RECEIVE_STORIES'

const receiveNeedsAndSupports = needs => {
  return {
    type: RECEIVE_NEEDS_N_SUPPORTS_LIST,
    needs
  }
}

const receiveLanguages = languages => {
  return {
    type: RECEIVE_LANGUAGES_LIST,
    languages
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

const receiveStories = stories => {
  return {
    type: RECEIVE_STORIES,
    stories
  }
}

export function fetchFormDatas() {
  return dispatch => {
    return request
      .get(`/api/v1/form/languages`)
      .then(res => {
        dispatch(receiveLanguages(res.body))
      })
      .then(() => {
        return request.get(`/api/v1/form/needs`).then(res => {
          dispatch(receiveNeedsAndSupports(res.body))
        })
      })
      .catch(e => console.log(e.message))
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

export function fetchStories() {
  return dispatch => {
    return request.get('/api/v1/stories/stories').then(res => {
      dispatch(receiveStories(res.body))
    })
  }
}

export function registerUser(data) {
  return dispatch => {
    return request
      .put('/api/v1/user/register-user-details')
      .set(getAuthorizationHeader())
      .send(data)
      .then(() => {
        dispatch(fetchLoggedInUser())
        return registerProfileImg(data.actualFile)
      })
      .catch(e => {
        console.log(e)
      })
  }
}

function registerProfileImg(profileFile) {
  return request
    .post('/api/v1/s3/upload')
    .set(getAuthorizationHeader())
    .attach('profileImg', profileFile)
    .catch(e => {
      console.log(e)
    })
}
