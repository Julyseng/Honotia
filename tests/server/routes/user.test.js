const request = require('supertest')

let server = require('../../../server/server')

server.connection = 'fake-connection'

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

// start with mock
const mockUserId = 1

jest.mock('authenticare/server', () => {
  return {
    getTokenDecoder: () => {
      return (req, res, next) => {
        req.user = {
          id: mockUserId
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
  describe('functions are called with arguments', () => {
    let query
    let reqBodyData = {
      languages: ['test'],
      refugee: {},
      needs: [],
      supports: [],
      user: {
        status: 'AL'
      }
    }

    beforeEach(() => {
      query = registerUserDetails(reqBodyData)
    })

    test('registerUser', () => {
      expect.assertions(1)
      return query.then(response => {
        const { user, languages } = reqBodyData
        expect(registerUser).toHaveBeenCalledWith(mockUserId, user, server.connection)
      })
    })

    test('registerLanguage', () => {
      expect.assertions(1)
      return query.then(() => {
        const { user, languages } = reqBodyData
        expect(registerLanguage).toHaveBeenCalledWith(mockUserId, languages, server.connection)
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

// ? how to mock req.user.id
describe('get /current', () => {
  let query
  beforeEach(() => {
    query = request(server).get('/api/v1/user/current')
  })

  test('calls getCurrentUserProfile', () => {
    expect.assertions(1)
    return query.expect(201).then(() => {
      expect(getCurrentUserProfile).toHaveBeenCalled()
    })
  })

  test('sends error if userId not found', () => {
    expect.assertions(0)
  })
})
