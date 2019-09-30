const express = require('express')
const router = express.Router()
const { decodeToken } = require('authenticare/server')

const db = require('../db/db')

router.post('/register', decodeToken, (req, res) => {
  let conn = req.app.connection
  // const userId = decodeToken()
  console.log('id', userId)
  db.registerUser(userId, req.body.user, conn).then(() => {
    res.status(201)
  })
})

module.exports = router
