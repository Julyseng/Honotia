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

// function getTokenDecoder (throwNoTokenError = true) {
//    return (req, res, next) => {
//      verifyJwt({
//        secret: getSecret,
//        credentialsRequired: throwNoTokenError
//      })(req, res, next)
//    }
//  }

jest.mock('authenticare/server', () => {
  return {
    getTokenDecoder: () => {
      return (req, res, next) => {
        req.user = {
          id: 1
        }
        console.log('test')
        next()
      }
    },
    applyAuthRoutes: () => {}
  }
})

describe('PUT /register-user-details', () => {
  describe('new refugee', () => {
    let query
    beforeEach(() => {
      query = request(server)
        .put('/api/v1/register-user-details')
        .send({
          user: {
            status: 'NR'
          }
        })
    })

    test('calls registerRefugee', () => {
      return query.then(res => {
        expect(registerRefugee).toHaveBeenCalled()
      })
    })
    test('does not call registerSupports', () => {})
    test('calls registerNeeds', () => {})
  })
})
