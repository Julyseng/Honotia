const request = require('supertest')

let server = require('../../../server/server')

const {
  registerUser,
  registerLanguage,
  registerRefugee,
  registerNeeds,
  registerSupports
} = require('../../../server/db/register')

const {
  getUserProfiles,
  getCurrentUserProfile
} = require('../../../server/db/fetch')

jest.mock('../../../server/db/register', () => {
  return {
    registerLanguage: jest.fn(() => Promise.resolve()),
    registerRefugee: jest.fn(() => Promise.resolve()),
    registerSupports: jest.fn(() => Promise.resolve()),
    registerNeeds: jest.fn(() => Promise.resolve()),
    registerUser: jest.fn(() => Promise.resolve())
  }
})

jest.mock('../../../server/db/fetch', () => {
  return {
    getUserProfiles: jest.fn(() => Promise.resolve()),
    getCurrentUserProfile: jest.fn(() => Promise.resolve())
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

  // ? how to mock req data
  describe.skip('functions are called with arguments', () => {
    let query
    let reqData = {
      languages: ['test'],
      refugee: {},
      needs: [],
      supports: [],
      user: {
        id: 2
      }
    }

    beforeEach(() => {
      query = registerUserDetails(reqData)
    })

    test('registerUser', () => {
      expect.assertions(1)
      return query.then(() => {
        const { user, languages } = reqData
        expect(registerUser).toHaveBeenCalledWith(1, ['test'])
      })
    })

    test('registerLanguage', () => {
      expect.assertions(1)
      return query.then(() => {
        const { user, body } = reqData
        expect(registerLanguage).toHaveBeenCalledWith(user.id, body.languages)
      })
    })
  })
})

function registerUserDetails(data) {
  return request(server)
    .put('/api/v1/user/register-user-details')
    .send(data)
}

// ? how to mock req.user.id
describe('get /profiles', () => {
  let query
  beforeEach(() => {
    query = request(server).get('/api/v1/user/profiles')
  })

  test('calls getUserProfiles', () => {
    expect.assertions(1)
    return query.expect(201).then(() => {
      expect(getUserProfiles).toHaveBeenCalled()
    })
  })

  test('sends error if userId not found', () => {
    expect.assertions(0)
  })
})
