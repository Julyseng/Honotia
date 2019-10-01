import nock from 'nock'

import * as actions from '../../client/actions'

test('fetchFormDatas', () => {
  const scope = nock('http://localhost')
    .get(`/api/v1/form/languages`)
    .reply(200, [{data: 'fetched form data'}])
    .get(`/api/v1/form/needs`)
    .reply(200, [{data: 'fetched form needs'}])

  const dispatch = jest.fn()

  return actions.fetchFormDatas('form data')(dispatch)
    .then(() => {
      expect(dispatch.mock.calls.length).toBe(2)
      expect(dispatch.mock.calls[0][0].type).toBe('RECEIVE_LANGUAGES_LIST')
      expect(dispatch.mock.calls[1][0].type).toBe('RECEIVE_NEEDS_N_SUPPORTS_LIST')
      scope.done()
    })
})

test('fetchProfiles', () => {
  const scope = nock('http://localhost')
    .get(`/api/v1/user/profiles`)
    .reply(200, [{data: 'fetched profiles'}])

  const dispatch = jest.fn()

  return actions.fetchProfiles('profile data')(dispatch)
    .then(() => {
      expect(dispatch.mock.calls.length).toBe(1)
      expect(dispatch.mock.calls[0][0].type).toBe('RECEIVE_USER_PROFILES')

      let receiveProfiles = dispatch.mock.calls[0][0]
      expect(receiveProfiles.profiles[0].data).toBe('fetched profiles')
      scope.done()
    })
})

test('fetch logged in users', () =>{
  const scope = nock('http://localhost')
  .get('/api/v1/user/current')
  .reply(200, [{data: 'fetch loginned users'}])

  const dispatch = jest.fn()

  return actions.fetchLoggedInUser('loginned users')(dispatch)
    .then(() => {
      expect(dispatch.mock.calls.length).toBe(1)
      expect(dispatch.mock.calls[0][0].type).toBe('RECEIVE_LOGGEDIN_USER_DETAILS')

      let receiveUser = dispatch.mock.calls[0][0]
      expect(receiveUser.currentUser[0].data).toBe('fetch loginned users')
      scope.done()
    })
})

test('fetch stories', () => {
  const scope = nock('http://localhost')
  .get('/api/v1/stories/stories')
  .reply(200, [{data: 'fetch stories data'}])

  const dispatch = jest.fn()

  return actions.fetchStories('stories data')
  (dispatch)
    .then(() => {
      expect(dispatch.mock.calls.length).toBe(1)
      expect(dispatch.mock.calls[0][0].type).toBe('RECEIVE_STORIES')
      scope.done()
    })
})



