const express = require('express')
const router = express.Router()
const { getTokenDecoder } = require('authenticare/server')

const tokenDecoder = getTokenDecoder(false)
const {
  registerUser,
  registerLanguage,
  registerRefugee,
  registerNeeds,
  registerSupports
} = require('../db/register')
const { getUserProfiles, getCurrentUserProfile } = require('../db/fetch')

router.get('/profiles', tokenDecoder, (req, res) => {
  let conn = req.app.connection
  let userId = req.user.id

  getUserProfiles(userId, conn).then(profiles => {
    res.status(201).send(profiles)
  })
})

router.get('/current', tokenDecoder, (req, res) => {
  let conn = req.app.connection
  let userId = req.user.id

  getCurrentUserProfile(userId, conn).then(user => {
    res.status(201).send(user)
  })
})

router.put('/register-user-details', tokenDecoder, (req, res) => {
  let conn = req.app.connection
  let userId = req.user.id
  let { user, status, languages, refugee, needs, supports } = req.body

  Object.keys(supports)
  Object.keys(needs)
  
  registerUser(userId, user, conn)
    .then(() => {
      registerLanguage(userId, languages, conn)
    })
    .then(() => {
      if (status === 'NR') {
        registerRefugee(userId, refugee, needs, conn).then(() => {
          registerNeeds(userId, needs, conn)
        })
      } else if (status === 'AL' || status === 'FR') {
        registerSupports(userId, supports, conn)
      }
    })
    .then(() => {
      res.status(201).send()
    })
})

module.exports = router

// {
//   user: {
//     status: 'AL',
//     firstName: 'chloe',
//     lastName: 'chloe',
//     DOB: '',
//     email: 'test@t.com',
//     currentCity: '',
//     occupation: 'student',
//     bio: 'sdfasf'
//   },
//   refugee: {
//     countryOrigin: '',
//     yearLeft: null,
//     reasonForLeaving: [],
//     yearOfArrival: null
//   },
//   needs: [],
//   languages: [ '1', '2' ],
//   supports: { healthcare: true, education: true },
//   actualFile: {}
// }
