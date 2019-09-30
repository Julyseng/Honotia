const express = require('express')
const router = express.Router()
const { getTokenDecoder } = require('authenticare/server')

const tokenDecoder = getTokenDecoder(false)
const db = require('../db/db')

router.put('/register-user-details', tokenDecoder, (req, res) => {
  let conn = req.app.connection
  let userId = req.user.id
  let { user } = req.body
  db.registerUser(userId, user, conn)
    .then(() => {
      db.registerLanguage(userId, languageId)
    })
    .then(() => {
      res.status(201).send()
    })
})

module.exports = router
