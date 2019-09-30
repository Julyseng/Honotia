const express = require('express')
const router = express.Router()
const { decodeToken } = require('authenticare/server')

const db = require('../db/db')

router.post('/postUserInfo', decodeToken, (req, res) => {
  // console.log(req)
  db.postUserInfoDb(req.body).then(() => {
    res.status(201).send('')
  })
})

module.exports = router
