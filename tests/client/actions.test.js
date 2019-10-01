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
      scope.done()
    })
})





