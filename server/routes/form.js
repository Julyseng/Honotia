const express = require('express')
const router = express.Router()

const {
  getLanguagesList,
  getSupportsList,
  getNeedsList
} = require('../db/fetch')

router.get('/languages', (req, res) => {
  let conn = req.app.connection

  getLanguagesList(conn).then(languages => {
    res.status(201).send(languages)
  })
})

router.get('/needs', (req, res) => {
  let conn = req.app.connection

  getNeedsList(conn).then(needs => {
    res.status(201).send(needs)
  })
})

router.get('/supports', (req, res) => {
  let conn = req.app.connection

  getSupportsList(conn).then(supports => {
    res.status(201).send(supports)
  })
})

module.exports = router
