const express = require('express')
const router = express.Router()
const { getTokenDecoder } = require('authenticare/server')

const tokenDecoder = getTokenDecoder(false)
const { registerUser, registerLanguage } = require('../db/register')
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
    console.log(user)
    res.status(201).send(user)
  })
})

router.put('/register-user-details', tokenDecoder, (req, res) => {
  let conn = req.app.connection
  let userId = req.user.id
  let { user } = req.body
  registerUser(userId, user, conn)
    .then(() => {
      registerLanguage(userId, languageId)
    })
    .then(() => {
      res.status(201).send()
    })
})

module.exports = router
