const request = require('supertest')

let server = require('../../../server/server')

const {
  registerUser,
  registerLanguage,
  registerRefugee,
  registerNeeds,
  registerSupports
} = require('../../../server/db/register')

jest.mock('../../../server/db/register', () => {
  return {
    registerLanguage: jest.fn(() => Promise.resolve()),
    registerRefugee: jest.fn(() => Promise.resolve()),
    registerSupports: jest.fn(() => Promise.resolve()),
    registerNeeds: jest.fn(() => Promise.resolve()),
    registerUser: jest.fn(() => Promise.resolve())
  }
})

jest.mock('authenticare/server', () => {
  return {
    getTokenDecoder: () => {
      return (req, res, next) => {
        req.user = {
          id: 1
        }
        next()
      }
    },
    applyAuthRoutes: () => {}
  }
})

beforeEach(() => {
  jest.clearAllMocks()
})

describe('PUT /register-user-details', () => {
  test('calls registerUser', () => {
    expect.assertions(1)
    return registerUserDetails({ user: { status: 'NR' } }).then(req => {
      expect(registerUser).toHaveBeenCalled()
    })
  })

  test('calls db functions for new refugees', () => {
    expect.assertions(3)
    return registerUserDetails({ user: { status: 'NR' } }).then(() => {
      expect(registerRefugee).toHaveBeenCalled()
      expect(registerSupports).not.toHaveBeenCalled()
      expect(registerNeeds).toHaveBeenCalled()
    })
  })

  test('calls db functions for former refugees', () => {
    expect.assertions(3)
    return registerUserDetails({ user: { status: 'FR' } }).then(() => {
      expect(registerRefugee).toHaveBeenCalled()
      expect(registerSupports).toHaveBeenCalled()
      expect(registerNeeds).not.toHaveBeenCalled()
    })
  })

  test('calls db functions for ally', () => {
    expect.assertions(3)
    return registerUserDetails({ user: { status: 'AL' } }).then(() => {
      expect(registerRefugee).not.toHaveBeenCalled()
      expect(registerSupports).toHaveBeenCalled()
      expect(registerNeeds).not.toHaveBeenCalled()
    })
  })
})

function registerUserDetails(data) {
  return request(server)
    .put('/api/v1/user/register-user-details')
    .send(data)
}
