const express = require('express')
const router = express.Router()
const { getTokenDecoder } = require('authenticare/server')

const tokenDecoder = getTokenDecoder(false)
const { registerUser, registerLanguage } = require('../db/register')
const { getUserProfiles } = require('../db/fetch')

router.get('/profiles', tokenDecoder, (req, res) => {
  let conn = req.app.connection
  let userId = req.user.id

  getUserProfiles(userId, conn).then(profiles => {
    res.status(201).send(profiles)
  })
})

router.put('/register-user-details', tokenDecoder, (req, res) => {
  let conn = req.app.connection
  let userId = req.user.id
  let { user } = req.body
  registerUser(userId, user, conn)
    // .then(() => {
    //   registerLanguage(userId, languageId)
    // })
    .then(() => {
      res.status(201).send()
    })
})

module.exports = router
