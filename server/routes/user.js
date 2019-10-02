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

  getUserProfiles(userId, conn)
    .then(profiles => {
      res.status(201).send(profiles)
    })
    .catch(e => {
      res.status(500).json('Could not get profiles')
    })
})

router.get('/current', tokenDecoder, (req, res) => {
  let conn = req.app.connection
  let userId = req.user.id

  getCurrentUserProfile(userId, conn)
    .then(user => {
      res.status(201).send(user)
    })
    .catch(e => {
      res.status(500).json('Could not get user')
    })
})

router.put('/register-user-details', tokenDecoder, (req, res) => {
  let conn = req.app.connection
  let userId = req.user.id
  let { user, languages, refugee, needs, supports } = req.body
  let { status } = req.body.user

  registerUser(userId, user, conn)
    .then(() => {
      return registerLanguage(userId, languages, conn)
    })
    .then(() => {
      if (status === 'NR' || status === 'FR') {
        return registerRefugee(userId, refugee, conn)
      } else {
        return Promise.resolve()
      }
    })
    .then(() => {
      if (status === 'AL' || status === 'FR') {
        return registerSupports(userId, supports, conn)
      } else {
        return Promise.resolve()
      }
    })
    .then(() => {
      if (status === 'NR') {
        return registerNeeds(userId, needs, conn)
      } else {
        return Promise.resolve()
      }
    })
    .then(() => {
      res.status(201).send()
    })
    .catch(e => {
      console.log(e)
      res.status(500).json('Error registering user')
    })
})

module.exports = router
