const express = require('express')
const router = express.Router()
const { getTokenDecoder } = require('authenticare/server')

const tokenDecoder = getTokenDecoder(false)
const db = require('../db/db')

router.put('/register-user-details', tokenDecoder, (req, res) => {
  let conn = req.app.connection
  db.registerUser(req.user.id, req.body.user, conn).then(() => {
    res.status(201).send()
  })
})

module.exports = router
